import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Monshape",
    stack: ["Next.js", "Wagmi", "Zustand", "React Query", "Framer Motion"],
    description: "Official project portal for Monshape on Monad, featuring secure wallet integration, an eligibility checker, and community campaign tracking.",
    img: "/images/monshape.png",
    url: "https://checker.monshape.club",
    github: "#",
  },
  {
    title: "Firespot",
    stack: ["Next.js", "NestJS", "Zustand", "Redux Toolkit", "React Query"],
    description: "Comprehensive QR payment ecosystem with merchant dashboards, real-time analytics, and instant bank transfer settlement.",
    img: "/images/firespot.png",
    url: "https://lite.firespot.co",
    github: "#",
  },
  {
    title: "Rebalancr",
    stack: ["Next.js", "Mantine", "Redux Toolkit", "Privy", "Allora AI", "Kuru DEX"],
    description: "AI-powered portfolio rebalancing protocol built natively for Monad, leveraging Allora for predictive analytics and Kuru DEX for deep liquidity execution.",
    img: "/images/rebalancr.png",
    url: "https://rebalancr-nu.vercel.app",
    github: "https://github.com/velikanghost/rebalancr",
  },
  {
    title: "Blonks",
    stack: ["Next.js", "Solidity", "Foundry", "Wagmi", "React Query"],
    description: "On-chain generative art project on Monad, featuring evolving ASCII portraits deterministically generated from wallet addresses.",
    img: "/images/blonks.mp4",
    url: "https://blonks.vercel.app/gallery",
    github: "https://github.com/velikanghost/blonks",
  },
  {
    title: "Kairos",
    stack: ["Next.js", "NestJS", "Envio", "Prisma", "Wagmi"],
    description: "Automated DCA trading bot leveraging MetaMask Advanced Permissions for secure, non-custodial strategy execution.",
    img: "/images/kairos.png",
    url: "https://kairos-frontend-weld.vercel.app",
    github: "https://github.com/velikanghost/kairos",
  },
  {
    title: "Riskon",
    stack: ["Next.js", "Redux Toolkit", "Wagmi", "React Query", "Solidity"],
    description: "High-speed prediction markets with 3-minute rounds and fixed-odds payouts for automated on-chain price forecasting.",
    img: "https://placehold.co/600x400?text=Riskon",
    url: "#",
    github: "https://github.com/velikanghost/riskon",
  },
  {
    title: "Covus",
    stack: ["Solidity", "Hardhat", "Next.js", "Wagmi", "Scaffold-ETH 2"],
    description: "ERC-4626 compliant liquid staking protocol for STT tokens, featuring instant withdrawals and FIFO queue mechanics.",
    img: "/images/covus.png",
    url: "https://covus-beige.vercel.app",
    github: "https://github.com/velikanghost/covus",
  },
  {
    title: "Farcaster Mini App Starter Kit",
    stack: ["Next.js", "Farcaster SDK", "Foundry", "Wagmi", "Scaffold-ETH 2"],
    description: "Foundational toolkit for developing social-integrated dApps and Farcaster Mini-Apps with built-in JFS verification.",
    img: "/images/fma.png",
    url: "https://farcaster.xyz/miniapps/QtQlOp2K7E_d/mini-app-starter",
    github: "https://github.com/velikanghost/se2-farcaster-miniapp-starter",
  },
  {
    title: "Monvoyage",
    stack: ["Vite", "Three.js", "GSAP", "Zustand", "Tailwind CSS 4"],
    description: "Immersive 3D visualization platform showcasing the Monad ecosystem through interactive particle systems and flocking simulations.",
    img: "/images/monvayage.mov",
    url: "https://monvoyage.vercel.app",
    github: "https://github.com/velikanghost/monvoyage",
  },
  {
    title: "Shapeup",
    stack: ["NestJS", "Prisma", "Solidity", "Foundry", "Twitter API"],
    description: "Scalable backend engine for signature-verified minting and campaign achievement tracking for Web3 applications.",
    img: "/images/shapeup.png",
    url: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, i) => {
          const index = i + 1;
          let gridClasses = "";
          let aspectClass = "aspect-[16/10]"; // Default landscape

          
          if ((index - 2) % 3 === 0) {
            gridClasses = "md:row-span-2"; // Middle long (mockup style)
            aspectClass = "aspect-[3/4]";
          }

          const isVideo = project.img.endsWith('.mp4') || project.img.endsWith('.mov');

          return (
            <div key={i} className={`flex flex-col group ${gridClasses}`}>
              <div className={`relative overflow-hidden bg-foreground/5 mb-4 ${aspectClass}`}>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-full"
                >
                  {isVideo ? (
                    <video
                      src={project.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                  )}
                </a>
                
                {/* Discrete links on top-right */}
                <div className="absolute top-4 right-4 flex gap-2 md:translate-y-2 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 z-10">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white shadow-lg"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-bold font-syne text-white/90 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40 font-syne">
                  {project.stack.join(" / ")}
                </p>
                <p className="opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-700 text-xs font-syne text-foreground/50 overflow-hidden leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Projects };