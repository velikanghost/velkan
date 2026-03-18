import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <nav className="flex items-center justify-between w-full max-w-6xl px-8 py-4 backdrop-blur-xl bg-background/40 border border-foreground/5 rounded-full shadow-2xl shadow-black/20">
        <Link href="/" className="font-protest-strike text-2xl tracking-tighter hover:scale-105 transition-transform">
          VELKAN
        </Link>
        <div className="hidden md:flex items-center gap-8 font-syne text-sm font-bold uppercase tracking-widest text-foreground/60">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <button className="bg-foreground text-background px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-foreground/80 transition-all active:scale-95 shadow-lg shadow-black/10">
          Résumé
        </button>
      </nav>
    </header>
  );
};

export { Navbar };