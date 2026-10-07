// src/app/page.tsx
import Link from "next/link";
// import Head from "next/head";
import ThreeBackground from "@/components/ThreeBackground";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";


export default function Home() {
  return (
    <main className="min-h-screen">
      <ThreeBackground />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Winnie Mo</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 text-gray-50">
          <Link href="#about" className="hover:underline">About</Link>
          {/* <Link href="https://github.com/yiwenmo" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</Link> */}
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#blog" className="hover:underline">Blog</Link>
          <Link href="/CV_2025_yiwenmo.pdf" target="_blank" className="hover:underline">CV</Link>
          <Link href="https://github.com/yiwenmo" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</Link>
          <Link href="https://hackmd.io/@winniemyiwen" target="_blank" rel="noopener noreferrer" className="hover:underline">HackMD</Link>
          <Link href="https://www.linkedin.com/in/winniemo" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</Link>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Project / Portfolio Section */}
      <Portfolio />

      {/* Blog / Blog Section from HackMD */}
      <Blog />

      {/* Footer */}
      <Footer />
    </main>
  );
}
