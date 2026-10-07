import SectionHeading from "@/components/SectionHeading";

export default function Blog() {
  const posts = [
    {
      title: "2026 Fall PhD Application Journey",
      link: "https://hackmd.io/@winniemyiwen/PhDapplication",
      description: "A detailed write-up of my US PhD application process — what I did, what I learned, and tips for future applicants (in Chinese)."
    },
    {
      title: "PyTorch Installation",
      link: "https://hackmd.io/@winniemyiwen/PyTorch_installation",
      description: "Step-by-step guide for installing PyTorch with CUDA support."
    },
    {
      title: "WSL2 VHDX Cleanup",
      link: "https://hackmd.io/@winniemyiwen/WSL2_vhdx",
      description: "How to shrink WSL2 virtual disks and free up your C drive when Docker cache grows unexpectedly."
    },
    {
      title: "C++ Notes",
      link: "https://hackmd.io/@winniemyiwen/winniemo",
      description: "Contains my notes and solutions to several C++ problems I worked on during a past class."
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading>Blog</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition"
            >
              <h3 className="font-semibold mb-2 text-gray-900">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.description}</p>
            </a>
          ))}
        </div>
        <a
          href="https://hackmd.io/@winniemyiwen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm text-gray-500 hover:text-gray-900"
        >
          All notes on HackMD →
        </a>
      </div>
    </section>
  );
}
