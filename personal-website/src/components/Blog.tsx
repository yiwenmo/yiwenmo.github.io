export default function Blog() {
  const posts = [
    {
      title: "PyTorch Installation",
      link: "https://hackmd.io/@winniemyiwen/PyTorch_installation",
      description: "Step-by-step guide for installing PyTorch with CUDA support."
    },
    {
      title: "WSL2 VHDX Cleanup",
      link: "https://hackmd.io/@winniemyiwen/WSL2_vhdx",
      description: "How to shrink WSL2 virtual disks and free up your C drive when Docker cache grows unexpectedly."
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase text-gray-900 dark:text-black">Blog</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Selected notes I&apo;sve written on HackMD.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-black">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
