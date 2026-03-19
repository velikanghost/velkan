import Link from "next/link";
import { User, LayoutGrid, MessageSquare, FileText } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: User, label: "About", href: "#about" },
    { icon: LayoutGrid, label: "Projects", href: "#projects" },
    { icon: FileText, label: "Skills", href: "#skills" },
    { icon: MessageSquare, label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-1000">
      <nav className="flex flex-row md:flex-col items-center gap-4 md:gap-6 p-3 md:p-4 backdrop-blur-xl bg-background/40 border border-foreground/5 rounded-full shadow-2xl shadow-black/20">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group relative p-3 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-300 active:scale-95"
          >
            <item.icon className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
            <span className="absolute bottom-full mb-4 translate-y-2 group-hover:translate-y-0 md:bottom-auto md:right-full md:mr-4 md:top-1/2 md:-translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 md:translate-x-2 md:group-hover:translate-x-0 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
        <div className="h-8 w-px md:w-8 md:h-px bg-foreground/10 mx-2 md:mx-0 md:my-2" />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 bg-foreground text-background rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
        >
          <FileText className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
          <span className="absolute bottom-full mb-4 translate-y-2 group-hover:translate-y-0 md:bottom-auto md:right-full md:mr-4 md:top-1/2 md:-translate-y-1/2 px-2 py-1 rounded bg-foreground text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 md:translate-x-2 md:group-hover:translate-x-0 whitespace-nowrap">
            Résumé
          </span>
        </a>
      </nav>
    </header>
  );
};

export { Navbar };