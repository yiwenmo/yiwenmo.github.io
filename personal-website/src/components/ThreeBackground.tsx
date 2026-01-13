'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { Suspense, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

const simplex = createNoise4D();

// 定義 ParticleMaterial，不需要 extend
const ParticleMaterial = shaderMaterial(
  {
    uColorSlow: new THREE.Color('#8A2BE2'),
    uColorMid: new THREE.Color('#00FFFF'),
    uColorFast: new THREE.Color('#FFD700'),
    uFadeNear: 2.0,
    uFadeFar: 8.0,
    uGlobalAlpha: 1.0,
  },
  `
    attribute vec2 aLifetime;
    attribute float aVelocity;
    varying float vLifetime;
    varying float vVelocity;
    varying float vDist;

    void main() {
      vLifetime = aLifetime.x / aLifetime.y;
      vVelocity = aVelocity;

      vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
      vDist = length(viewPos.xyz);

      gl_PointSize = (vLifetime * vLifetime) * 6.0 + 2.0;
      gl_Position = projectionMatrix * viewPos;
    }
  `,
  `
    uniform vec3 uColorSlow;
    uniform vec3 uColorMid;
    uniform vec3 uColorFast;
    uniform float uFadeNear;
    uniform float uFadeFar;
    uniform float uGlobalAlpha;

    varying float vLifetime;
    varying float vVelocity;
    varying float vDist;

    void main() {
      float distToCenter = distance(gl_PointCoord, vec2(0.5));
      float circle = 1.0 - smoothstep(0.45, 0.5, distToCenter);
      if (circle < 0.01) discard;

      float lifeOpacity = smoothstep(0.0, 0.2, vLifetime) * (1.0 - smoothstep(0.8, 1.0, vLifetime));
      float depthFade = 1.0 - smoothstep(uFadeNear, uFadeFar, vDist);
      float finalOpacity = lifeOpacity * depthFade * circle;
      if (finalOpacity < 0.01) discard;

      float speedT = clamp(vVelocity, 0.0, 1.0);
      vec3 slowMid = mix(uColorSlow, uColorMid, speedT);
      vec3 baseColor = mix(slowMid, uColorFast, speedT * speedT);

      float glow = smoothstep(0.4, 0.0, distToCenter);
      vec3 finalColor = baseColor + baseColor * glow * 0.6;

      gl_FragColor = vec4(finalColor, finalOpacity * uGlobalAlpha);
    }
  `
);

function ParticleField() {
  const { camera } = useThree();
  const pointsRef = useRef<THREE.Points>(null);

  // 用 primitive
  const shaderMaterialInstance = useMemo(() => new ParticleMaterial(), []);

  const mouse = useRef<[number, number]>([0, 0]);
  const clickRef = useRef<{ position: THREE.Vector3; time: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = [e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight];
    };
    const handleClick = (e: MouseEvent) => {
      const ndc = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(ndc, camera);
      const clickPos = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(5));
      clickRef.current = { position: clickPos, time: performance.now() * 0.001 };
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [camera]);

  const count = 5000;
  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count * 2);
    const velocities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const life = 2.0 + Math.random() * 2.0;
      lifetimes[i * 2] = Math.random() * life;
      lifetimes[i * 2 + 1] = life;
      velocities[i] = 0;
    }
    return { positions, lifetimes, velocities };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    const lifetimeAttr = pointsRef.current.geometry.attributes.aLifetime;
    const velocityAttr = pointsRef.current.geometry.attributes.aVelocity;
    const time = performance.now() * 0.001;

    const mouseVec = new THREE.Vector3(
      (mouse.current[0] - 0.5) * 10,
      (mouse.current[1] - 0.5) * 10,
      0
    );

    const temp = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
      let life = lifetimeAttr.getX(i) - delta;
      const total = lifetimeAttr.getY(i);
      if (life <= 0) {
        posAttr.setXYZ(i, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
        life = total;
      }

      temp.fromBufferAttribute(posAttr, i);
      const noise = simplex(temp.x, temp.y, temp.z, time);

      const direction = new THREE.Vector3().subVectors(mouseVec, temp).normalize();
      const distanceToMouse = temp.distanceTo(mouseVec);
      const maxInfluence = 10.0;
      const influenceFalloff = 1.0 - Math.min(distanceToMouse / maxInfluence, 1.0);
      const strength = influenceFalloff * 4.0;
      temp.addScaledVector(direction, strength * noise * delta);

      if (clickRef.current) {
        const elapsed = time - clickRef.current.time;
        if (elapsed < 0.5) {
          const clickDist = temp.distanceTo(clickRef.current.position);
          const impact = Math.max(0, 1.0 - clickDist / 2.0);
          const forceDir = new THREE.Vector3().subVectors(temp, clickRef.current.position).normalize();
          temp.addScaledVector(forceDir, impact * delta * 5.0);
        } else {
          clickRef.current = null;
        }
      }

      posAttr.setXYZ(i, temp.x, temp.y, temp.z);
      lifetimeAttr.setX(i, life);
      velocityAttr.setX(i, Math.abs(noise));
    }

    posAttr.needsUpdate = true;
    lifetimeAttr.needsUpdate = true;
    velocityAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particleData.positions, 3]} />
        <bufferAttribute attach="attributes-aLifetime" args={[particleData.lifetimes, 2]} />
        <bufferAttribute attach="attributes-aVelocity" args={[particleData.velocities, 1]} />
      </bufferGeometry>

      {/* 用 primitive，不用 <particleMaterial /> */}
      <primitive
        object={shaderMaterialInstance}
        attach="material"
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
