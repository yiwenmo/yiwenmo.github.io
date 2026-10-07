// Set to an address to show an email link in the footer
const email = "";

const links = [
    { label: "GitHub", href: "https://github.com/yiwenmo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/winniemo" },
    { label: "HackMD", href: "https://hackmd.io/@winniemyiwen" },
];

const Footer = () => {
    return (
        <footer className="border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <p className="text-lg font-semibold text-gray-100">Let&apos;s connect</p>
                {email && (
                    <a href={`mailto:${email}`} className="inline-block mt-2 text-gray-300 hover:text-white hover:underline">
                        {email}
                    </a>
                )}
                <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            {l.label}
                        </a>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-8">&copy; 2026 Winnie Mo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
