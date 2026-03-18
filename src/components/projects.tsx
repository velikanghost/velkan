import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Monshape",
    stack: ["Next.js", "Tailwind CSS", "Prisma"],
    description: "A community-focused platform for coordinating local environmental initiatives and sustainability tracking.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    url: "https://monshape.com",
    github: "https://github.com/velikanghost/monshape",
  },
  {
    title: "Firespot",
    stack: ["Solidity", "TypeScript", "Ethers.js"],
    description: "A blockchain security audit tool that uses AI to detect common vulnerabilities in smart contracts.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    url: "https://firespot.app",
    github: "https://github.com/velkanghost/firespot",
  },
  {
    title: "Blonks",
    stack: ["React", "NestJS", "OpenAI"],
    description: "AI-driven recruiting platform that automates resume screening and initial behavioral analysis.",
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
    url: "https://blonks.com",
    github: "https://github.com/velkanghost/blonks",
  },
  {
    title: "Riskon",
    stack: ["Next.js", "Zustand", "PostgreSQL"],
    description: "Integrated health tracking system for clinics to manage patient vitals and telehealth schedules.",
    img: "https://images.unsplash.com/photo-1532103054090-3491f1a05d0d",
    url: "https://riskon.com",
    github: "https://github.com/velkanghost/riskon",
  },
  {
    title: "Kairos",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description: "Premium personal portfolio with dynamic grids, container queries, and sleek animations.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    url: "https://kairos.velkan.dev",
    github: "https://github.com/velkanghost/kairos",
  },
  {
    title: "Monvoyage",
    stack: ["TypeScript", "NestJS", "CommerceJS"],
    description: "A high-performance headless e-commerce frontend with ultra-fast sub-second page loads.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    url: "https://monvoyage.com",
    github: "https://github.com/velkanghost/monvoyage",
  },
  {
    title: "Covus",
    stack: ["TypeScript", "NestJS", "CommerceJS"],
    description: "A high-performance headless e-commerce frontend with ultra-fast sub-second page loads.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    url: "https://covus.app",
    github: "https://github.com/velkanghost/covus",
  },
    {
    title: "Farcaster Starter Kit",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description: "Premium personal portfolio with dynamic grids, container queries, and sleek animations.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    url: "https://farcaster.velkan.dev",
    github: "https://github.com/velkanghost/farcaster-starter-kit",
  },
  {
    title: "MonCrush",
    stack: ["TypeScript", "NestJS", "CommerceJS"],
    description: "A high-performance headless e-commerce frontend with ultra-fast sub-second page loads.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    url: "https://moncrush.com",
    github: "https://github.com/velkanghost/moncrush",
  },
];

const Projects = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, i) => {
          const index = i + 1;
          let gridClasses = "";
          let aspectClass = "aspect-[16/10]"; // Default landscape

          
          if ((index - 2) % 3 === 0) {
            gridClasses = "md:row-span-2"; // Middle long (mockup style)
            aspectClass = "aspect-[3/4]";
          }

          return (
            <div key={i} className={`flex flex-col group ${gridClasses}`}>
              <div className={`relative overflow-hidden bg-foreground/5 mb-4 ${aspectClass}`}>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-full"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                </a>
                
                {/* Discrete links on top-right */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/10 text-white">
                    <Github size={16} />
                  </a>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/10 text-white">
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
                <p className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 text-xs font-syne text-foreground/50 overflow-hidden leading-relaxed pt-1">
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