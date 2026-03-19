"use client";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["TypeScript", "JavaScript", "Solidity", "Node.js"],
  },
  {
    title: "Frontend Evolution",
    skills: ["Next.js 16", "React 19", "Three.js", "GSAP", "Tailwind CSS 4", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    skills: ["NestJS", "Prisma", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    title: "Web3 Engineering",
    skills: ["Wagmi/Viem", "Foundry", "Hardhat", "Envio HyperIndex"],
  },
];

const Skills = () => {
  return (
    <section className="pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="group p-8 bg-foreground/2 border border-foreground/5 relative overflow-hidden transition-all duration-500 hover:bg-foreground/4 hover:border-foreground/10"
          >
            {/* Minimal number decoration */}
            <span className="absolute top-4 right-6 text-[40px] font-protest-strike text-foreground/3 group-hover:text-foreground/6 transition-colors duration-500">
              0{idx + 1}
            </span>

            <h3 className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-foreground/40 mb-8 group-hover:text-foreground/60 transition-colors duration-500">
              {category.title}
            </h3>

            <div className="flex flex-col space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 bg-foreground/20 rounded-full group-hover/item:scale-125 group-hover/item:bg-foreground transition-all duration-300" />
                  <span className="font-syne text-lg font-bold text-foreground/60 group-hover/item:text-foreground transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground/20 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Skills };
