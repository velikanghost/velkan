"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { transform } from "motion";
import { Projects } from "@/components";
import { Mail, Twitter, Github, Send, MessageSquare } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:velkanghost@yahoo.com", label: "Email", color: "hover:bg-red-500" },
  { icon: Twitter, href: "https://twitter.com/velkanghost", label: "X (Twitter)", color: "hover:bg-blue-400" },
  { icon: MessageSquare, href: "https://discordapp.com/users/velkanghost", label: "Discord", color: "hover:bg-indigo-500" },
  { icon: Github, href: "https://github.com/velikanghost", label: "GitHub", color: "hover:bg-zinc-800" },
  { icon: Send, href: "https://t.me/velkanghost", label: "Telegram", color: "hover:bg-cyan-500" },
];

const ThankYou = () => (
  <section className="scroll-section py-6 flex flex-col items-center justify-center text-foreground min-h-[90vh]">
    <div className="flex flex-col items-center -space-y-3 md:-space-y-6">
      <h2 
        className="font-protest-strike text-[24px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
      >
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[24px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
      >
        THANK YOU
      </h2>
      <h2 className="font-protest-strike text-[24px] md:text-[96px] leading-none font-bold">
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[24px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
      >
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[24px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
      >
        THANK YOU
      </h2>
    </div>
    <div className="w-full max-w-7xl flex justify-end mt-8 px-8">
      <p className="font-syne text-sm md:text-2xl font-bold uppercase tracking-wider">Have a nice day</p>
    </div>
  </section>
);

const PageContent = ({ isClone = false }: { isClone?: boolean }) => (
  <div className="content flex flex-col">
    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "about"} className="container mx-auto min-h-dvh flex flex-col justify-center">
        <div className="about max-w-4xl text-left pt-20">
          <h2 className="font-protest-strike text-foreground text-[68px] leading-tight">
            Hi, I'm Velkan
          </h2>
          <h3 className="font-protest-strike text-foreground text-[92px] leading-none mb-6">
            Fullstack & Blockchain Developer
          </h3>
          <p className="font-syne text-foreground/80 text-[24px] leading-relaxed max-w-3xl">
            Highly motivated FullStack Developer with hands-on experience in
            building innovative web applications, APIs, and web3 solutions using
            modern technologies like TypeScript, Next.js, Tailwind CSS and Nest.js.
            Proven expertise in frontend and backend development across various
            domains, including Healthcare, Human Resource, Web3, and E-commerce,
            with a focus on user-centric design and scalable architecture.
          </p>
        </div>
      </div>
    </section>

    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "projects"} className="projects container mx-auto text-left py-40">
        <h2 className="font-protest-strike text-foreground text-[32px] leading-tight mb-8">
          Projects
        </h2>
        <Projects />
      </div>
    </section>

    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "contact"} className="container mx-auto text-left py-40 border-t border-foreground/5">
        <h2 className="font-protest-strike text-foreground text-[64px] leading-tight mb-8">
          LET'S CONNECT.
        </h2>
        <p className="font-syne text-foreground/60 text-xl max-w-2xl mb-12">
          Currently looking for new opportunities and collaborations. 
          If you have a project in mind or just want to say hi, my inbox is always open.
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-20 h-20 flex items-center justify-center bg-foreground text-background transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/10 ${social.color}`}
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>

    <ThankYou />
  </div>
);

export default function Home() {
  useEffect(() => {
    // Check if desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const lenis = new Lenis({
      infinite: true,
      syncTouch: false,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <div id="original">
        <PageContent />
      </div>
      <div id="clone" className="h-screen overflow-hidden hidden md:block select-none pointer-events-none">
        <PageContent isClone />
      </div>
      <div className="scroll-fade hidden md:block" />
    </main>
  );
}
