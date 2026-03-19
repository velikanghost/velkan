"use client";

import { useEffect, isValidElement } from "react";
import Lenis from "lenis";
import { Projects, Skills } from "@/components";
import { Mail } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:velikanghost@yahoo.com", label: "Email", color: "hover:bg-red-500" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>, href: "https://x.com/velkan_gst", label: "X (Twitter)", color: "hover:bg-blue-400" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 640 640"><path d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z"/></svg>, href: "?velikan.ghost", label: "Discord", color: "hover:bg-indigo-500" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg>, href: "https://github.com/velikanghost", label: "GitHub", color: "hover:bg-zinc-400" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z"/></svg>, href: "https://t.me/velkan_gst", label: "Telegram", color: "hover:bg-cyan-500" },
  { icon: <img height="24" width="24" src="/icons/farcaster.svg" />, href: "https://farcaster.xyz/velikanghost", label: "Farcaster", color: "hover:bg-purple-500" },
];

const SocialLink = ({ social, className, iconSize = 22 }: { social: typeof socials[0], className?: string, iconSize?: number }) => {

  const isDiscord = social.label === "Discord";

  const IconComponent = social.icon as any;

  return (
    <div className="relative group">
      <a
        href={social.href}
        target={isDiscord ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={social.label}
        className={className}
      >
        {isValidElement(IconComponent) ? (
          IconComponent
        ) : (
          <IconComponent size={iconSize} className={iconSize > 22 ? "md:w-8 md:h-8" : ""} />
        )}
      </a>
    </div>
  );
};

const ThankYou = () => (
  <section className="scroll-section py-6 flex flex-col items-center justify-center text-foreground min-h-[90vh]">
    <div className="flex flex-col items-center -space-y-2 md:-space-y-6">
      <h2 
        className="font-protest-strike text-[42px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
      >
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[42px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
      >
        THANK YOU
      </h2>
      <h2 className="font-protest-strike text-[42px] md:text-[96px] leading-none font-bold">
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[42px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
      >
        THANK YOU
      </h2>
      <h2 
        className="font-protest-strike text-[42px] md:text-[96px] leading-none" 
        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
      >
        THANK YOU
      </h2>
    </div>
    <div className="w-full max-w-7xl flex justify-end mt-8 px-8">
      <p className="font-syne text-lg md:text-2xl font-bold uppercase tracking-wider">Have a nice day</p>
    </div>
  </section>
);

const PageContent = ({ isClone = false }: { isClone?: boolean }) => (
  <div className="content flex flex-col">
    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
        <div id={isClone ? undefined : "about"} className="container mx-auto px-4 md:px-0 min-h-dvh flex flex-col justify-center relative">
          <div className="about max-w-4xl text-left pt-20">
            <h2 className="font-protest-strike text-foreground text-[42px] md:text-[68px] leading-tight transition-all duration-700 ease-out">
              Hi, I'm Velkan
            </h2>
            <h3 className="font-protest-strike text-foreground text-[48px] md:text-[92px] leading-none mb-6">
              Fullstack & Blockchain Developer
            </h3>
            <p className="font-syne text-foreground/80 text-lg md:text-[24px] leading-relaxed max-w-3xl">
              I'm a versatile Software Engineer with extensive experience building production-ready decentralized applications (dApps), high-performance backends, and immersive 3D interfaces. Passionate about architecting scalable systems and seamless user experiences across the Web3 and Web2 landscape. Proven track record of delivering end-to-end solutions, from secure smart contracts to complex, state-managed frontends.
            </p>
          </div>

         
            <div className="hidden lg:flex absolute right-28 bottom-24 flex-col items-end pointer-events-auto">
              {/* Row 1: 1 icons (Mail, X) */}
              <div className="flex">
                {socials.slice(0, 1).map((social, i) => (
                  <SocialLink 
                    key={i} 
                    social={social} 
                    className={`w-14 h-14 flex items-center justify-center bg-foreground text-background transition-all duration-300 hover:scale-110 shadow-xl border border-background/10 ${social.color}`}
                  />
                ))}
              </div>
              {/* Row 2: 2 icons (Mail, X) */}
              <div className="flex">
                {socials.slice(1, 3).map((social, i) => (
                  <SocialLink 
                    key={i} 
                    social={social} 
                    className={`w-14 h-14 flex items-center justify-center bg-foreground text-background transition-all duration-300 hover:scale-110 shadow-xl border border-background/10 ${social.color}`}
                  />
                ))}
              </div>
              {/* Row 3: 3 icons (Discord, GitHub, Telegram) */}
              <div className="flex">
                {socials.slice(3, 6).map((social, i) => (
                  <SocialLink 
                    key={i + 2} 
                    social={social} 
                    className={`w-14 h-14 flex items-center justify-center bg-foreground text-background transition-all duration-300 hover:scale-110 shadow-xl border border-background/10 ${social.color}`}
                  />
                ))}
              </div>
            </div>
          
        </div>
    </section>

    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "skills"} className="container px-4 md:px-0 mx-auto text-left py-40">
        <h2 className="font-protest-strike text-foreground text-[40px] md:text-[64px] leading-tight mb-8">
          Skills
        </h2>
        <Skills />
      </div>
    </section>

    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "projects"} className="projects container px-4 md:px-0 mx-auto text-left py-40">
        <h2 className="font-protest-strike text-foreground text-[40px] md:text-[64px] leading-tight mb-8">
          Projects
        </h2>
        <Projects />
      </div>
    </section>

    <section className="scroll-section transition-all duration-300 ease-out will-change-transform">
      <div id={isClone ? undefined : "contact"} className="container mx-auto px-4 md:px-0 text-left py-40 border-t border-foreground/5">
        <h2 className="font-protest-strike text-foreground text-[40px] md:text-[64px] leading-tight mb-8">
          LET'S CONNECT.
        </h2>
        <p className="font-syne text-foreground/60 text-lg md:text-xl max-w-2xl mb-12">
          Currently looking for new opportunities and collaborations. 
          If you have a project in mind or just want to say hi, my inbox is always open.
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social, i) => (
            <SocialLink 
              key={i} 
              social={social} 
              iconSize={28}
              className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-foreground text-background transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/10 ${social.color}`}
            />
          ))}
        </div>
      </div>
    </section>

    <ThankYou />
  </div>
);

export default function Home() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    
    function initLenis() {
      const isDesktop = window.innerWidth >= 768;
      
      if (isDesktop && !lenis) {
        lenis = new Lenis({
          infinite: true,
          syncTouch: false,
          autoRaf: true,
        });
      } else if (!isDesktop && lenis) {
        lenis.destroy();
        lenis = null;
      }
    }

    initLenis();
    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      if (lenis) {
        lenis.destroy();
      }
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
