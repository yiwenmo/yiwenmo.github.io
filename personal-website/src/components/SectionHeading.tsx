export default function SectionHeading({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className={`text-sm font-semibold tracking-[0.2em] uppercase ${dark ? "text-gray-400" : "text-gray-500"}`}>{children}</h2>
      <div className={`flex-1 h-px ${dark ? "bg-white/15" : "bg-gray-200"}`} />
    </div>
  );
}
