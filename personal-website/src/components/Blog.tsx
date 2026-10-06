export default function Blog() {
  const posts = [
    {
      title: "2026 Fall PhD Application Journey",
      link: "https://hackmd.io/@winniemyiwen/PhDapplication",
      description: "A detailed write-up of my US PhD application process — what I did, what I learned, and tips for future applicants (in Chinese)."
    },
    {
      title: "Fixing MacBook Air Overheating",
      link: "https://hackmd.io/@winniemyiwen/macbookair",
      description: "Tracking down a frozen Notification Center that kept an M2 MacBook Air running hot."
    },
    {
      title: "Zotero for Researchers",
      link: "https://hackmd.io/@winniemyiwen/zotero_intro",
      description: "Why Zotero is a must-have reference manager for grad students and researchers."
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
      title: "Why is Spatial Statistics Important?",
      link: "https://hackmd.io/@winniemyiwen/Spatial_stats",
      description: "An introduction to spatial autocorrelation, variograms and kriging."
    },
    {
      title: "C++ Notes",
      link: "https://hackmd.io/@winniemyiwen/winniemo",
      description: "Contains my notes and solutions to several C++ problems I worked on during a past class."
    },
    {
      title: "Mac Terminal Customization",
      link: "https://hackmd.io/@winniemyiwen/Mac_terminal",
      description: "Setting up iTerm2 + Oh My Zsh for a better terminal experience"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase text-gray-900">Blog</h2>
          <p className="text-gray-600">
            Selected notes I&apos;ve written on HackMD.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
