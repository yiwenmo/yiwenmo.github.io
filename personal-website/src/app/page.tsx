// src/app/page.tsx
import Link from "next/link";
// import Head from "next/head";
import ThreeBackground from "@/components/ThreeBackground";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";


export const metadata = {
  title: "Winnie Mo",
  description: "Check my stuff out.",
  openGraph: {
    type: "website",
    url: "https://winniemo.com/",
    title: "Winnie Mo",
    description: "Check my stuff out.",
    images: [
      {
        url: "/thumbnail_v1.png",
        width: 1200,
        height: 630,
        alt: "Winnie Mo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winnie Mo",
    description: "Check my stuff out.",
    images: ["/thumbnail_v1.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThreeBackground />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Winnie Mo</h1>
        <div className="flex gap-6 text-gray-50">
          {/* <Link href="https://github.com/yiwenmo" className="hover:underline">Github</Link> */}
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="/CV_202508_yiwenmo.pdf" className="hover:underline">CV</Link>
          <Link href="https://github.com/yiwenmo" className="hover:underline">GitHub</Link>
          <Link href="https://hackmd.io/@winniemyiwen" className="hover:underline">HackMD</Link>
          <Link href="https://tw.linkedin.com/in/winniemo" className="hover:underline">LinkedIn</Link>
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
