import Link from "next/link";
import { User, LayoutGrid, MessageSquare, FileText } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: User, label: "About", href: "#about" },
    { icon: LayoutGrid, label: "Projects", href: "#projects" },
    { icon: MessageSquare, label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed right-6 top-1/2 -translate-y-1/2 z-50 animate-in fade-in slide-in-from-right-4 duration-1000">
      <nav className="flex flex-col items-center gap-6 p-4 backdrop-blur-xl bg-background/40 border border-foreground/5 rounded-full shadow-2xl shadow-black/20">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group relative p-3 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-300 active:scale-95"
          >
            <item.icon size={22} strokeWidth={1.5} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
        <div className="w-8 h-px bg-foreground/10 my-2" />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 bg-foreground text-background rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
        >
          <FileText size={22} strokeWidth={1.5} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
            Résumé
          </span>
        </a>
      </nav>
    </header>
  );
};

export { Navbar };