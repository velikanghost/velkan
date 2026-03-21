"use client";

import { ReactNode } from "react";
import { Download } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ResumeSheetProps {
  children: ReactNode;
}

export function ResumeSheet({ children }: ResumeSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none h-dvh! p-0 bg-background text-foreground border-none"
      >
        <div className="h-full w-full overflow-y-auto" data-lenis-prevent>
          <SheetHeader className="sr-only">
            <SheetTitle>Résumé</SheetTitle>
            <SheetDescription>Velkan Fullstack & Blockchain Engineer Résumé</SheetDescription>
          </SheetHeader>
          
          <div className="max-w-4xl mx-auto p-6 sm:p-12 md:p-20 font-syne antialiased selection:bg-foreground selection:text-background pb-32">
          <div className="mb-10 text-center border-b-[3px] border-border pb-8">
            <h1 className="text-5xl md:text-7xl font-protest-strike mb-4 uppercase tracking-wider text-foreground">Velkan</h1>
            <p className="text-2xl md:text-3xl font-bold mb-4 font-syne uppercase tracking-widest text-foreground/90">Fullstack & Blockchain Engineer</p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm md:text-base text-foreground/80 mt-6 font-bold tracking-wide">
              <a href="mailto:velikanghost@yahoo.com" className="hover:underline hover:text-foreground transition-all">velikanghost@yahoo.com</a>
              <span className="hidden sm:inline text-foreground/50">•</span>
              <a href="https://velkan.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground">velkan.xyz</a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4 text-sm md:text-base font-bold text-foreground">
              <a href="https://x.com/velkan_gst" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase tracking-wider">X: velkan_gst</a>
              <a href="https://github.com/velikanghost" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase tracking-wider">GitHub: velikanghost</a>
              <a href="https://t.me/velkan_gst" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase tracking-wider">Telegram: velkan_gst</a>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="/velkan.pdf"
                download="Velikan_Ghost_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 hover:bg-foreground/90 transition-all shadow-lg active:scale-95"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:duration-300 transition-transform" strokeWidth={2} />
                Download PDF
              </a>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-protest-strike border-b-2 border-border/50 pb-2 mb-6 uppercase tracking-widest text-foreground/90">Summary</h2>
            <p className="leading-relaxed text-base md:text-lg text-foreground/90 font-medium">
              Versatile Software Engineer with extensive experience building production-ready decentralized applications (dApps), high-performance backends, and immersive 3D interfaces. Passionate about architecting scalable systems and seamless user experiences across the Web3 and Web2 landscape. Proven track record of delivering end-to-end solutions, from secure smart contracts to complex, state-managed frontends.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-protest-strike border-b-2 border-border/50 pb-2 mb-6 uppercase tracking-widest text-foreground/90">Skills</h2>
            <div className="flex flex-wrap gap-2 text-base md:text-lg leading-relaxed text-foreground/90 font-bold">
              <span>JavaScript •</span>
              <span>TypeScript •</span>
              <span>React •</span>
              <span>NextJS •</span>
              <span>NestJS •</span>
              <span>Tailwind •</span>
              <span>MongoDB •</span>
              <span>Postgres •</span>
              <span>Solidity •</span>
              <span>SCSS •</span>
              <span>Viem/Wagmi</span>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-protest-strike border-b-2 border-border/50 pb-2 mb-6 uppercase tracking-widest text-foreground/90">Experience</h2>
            
            <div className="mb-8 pl-4 border-l-[3px] border-border/30 hover:border-foreground transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">Firespot <span className="text-base font-normal tracking-normal text-foreground/70 ml-2">| Lead Developer</span></h3>
                <span className="text-sm md:text-base font-bold bg-foreground/5 px-3 py-1 mt-2 md:mt-0 uppercase tracking-widest text-foreground/90">March 2025 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg text-foreground/90">
                <li>Architected and implemented a comprehensive <strong className="font-bold text-foreground">QR-based payment ecosystem</strong> with dual-platform.</li>
                <li><strong className="font-bold text-foreground">Firespot Lite:</strong> Developed an instant transfer landing page, admin portal, and scalable REST API for lightweight bank settlements and QR kit activation.</li>
                <li><strong className="font-bold text-foreground">Firespot Pro:</strong> Built professional Customer and Merchant frontends using Next.js, Redux Toolkit, and Mantine, leveraging RTK Query for efficient data fetching.</li>
                <li>Integrated <strong className="font-bold text-foreground">Paystack</strong> for automated bank account validation, subaccount creation, and high-volume payouts.</li>
                <li>Implemented secure OTP-based authentication via <strong className="font-bold text-foreground">Termii</strong> and email notifications using <strong className="font-bold text-foreground">Resend</strong>.</li>
              </ul>
              <div className="mt-3 ml-2">
                <a href="https://firespot.co" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline font-bold text-foreground/60 italic hover:text-foreground transition-colors">https://firespot.co</a>
              </div>
            </div>

            <div className="mb-8 pl-4 border-l-[3px] border-border/30 hover:border-foreground transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">Monshape <span className="text-base font-normal tracking-normal text-foreground/70 ml-2">| Fullstack Web3 Developer</span></h3>
                <span className="text-sm md:text-base font-bold bg-foreground/5 px-3 py-1 mt-2 md:mt-0 uppercase tracking-widest text-foreground/90">April 2025 - December 2025</span>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg text-foreground/90">
                <li>Independently built a full-stack campaign platform using <strong className="font-bold text-foreground">Next.js</strong>, supporting over <strong className="font-bold text-foreground">3,000 users</strong> completing verifiable on-chain and off-chain tasks (Twitter/Discord engagement, DeFi interactions, etc.).</li>
                <li>Implemented automated point-distribution logic based on NFT holdings and integrated <strong className="font-bold text-foreground">SBT (soul-bound token)</strong> minting upon successful task completion.</li>
                <li>Developed all smart contracts in <strong className="font-bold text-foreground">Solidity</strong> and built a secure, scalable backend with <strong className="font-bold text-foreground">NestJS</strong> to manage task verification, user state, and blockchain interactions.</li>
                <li>Developed a wallet checker website using Next.js, Wagmi and Google sheets.</li>
              </ul>
              <div className="mt-3 ml-2">
                <a href="https://checker.monshape.club" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline font-bold text-foreground/60 italic hover:text-foreground transition-colors">https://checker.monshape.club</a>
              </div>
            </div>

            <div className="mb-8 pl-4 border-l-[3px] border-border/30 hover:border-foreground transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">MYITURA HEALTH <span className="text-base font-normal tracking-normal text-foreground/70 ml-2">| Frontend Engineer</span></h3>
                <span className="text-sm md:text-base font-bold bg-foreground/5 px-3 py-1 mt-2 md:mt-0 uppercase tracking-widest text-foreground/90">January 2023 - March 2025</span>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg text-foreground/90">
                <li>Developed MyItura website using <strong className="font-bold text-foreground">Vite</strong> and <strong className="font-bold text-foreground">MobX</strong> for global state management.</li>
                <li>Built various dashboards tailored for different users: <strong className="font-bold text-foreground">Doctor dashboard</strong> for managing appointments and consultations. <strong className="font-bold text-foreground">User dashboard</strong> for accessing health services and managing profiles. <strong className="font-bold text-foreground">Laboratory dashboard</strong> for test management and result processing.</li>
                <li>Implemented an appointment booking process for scheduling video call consultations.</li>
                <li>Enabled purchase and payment functionality for services and items, integrated with <strong className="font-bold text-foreground">Paystack</strong> for secure transactions.</li>
              </ul>
              <div className="mt-3 ml-2">
                <a href="https://myitura.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline font-bold text-foreground/60 italic hover:text-foreground transition-colors">https://myitura.com</a>
              </div>
            </div>

            <div className="mb-8 pl-4 border-l-[3px] border-border/30 hover:border-foreground transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">MICH CONSULTING SERVICES <span className="text-base font-normal tracking-normal text-foreground/70 ml-2">| Fullstack Engineer</span></h3>
                <span className="text-sm md:text-base font-bold bg-foreground/5 px-3 py-1 mt-2 md:mt-0 uppercase tracking-widest text-foreground/90">July 2021 - February 2022</span>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg text-foreground/90">
                <li>Developed Mich Consulting Services website front-end using <strong className="font-bold text-foreground">Next.js</strong>, <strong className="font-bold text-foreground">Tailwind CSS</strong> for styling, and <strong className="font-bold text-foreground">MobX</strong> for state management.</li>
                <li>Built the backend using <strong className="font-bold text-foreground">Supabase SQL database</strong> and <strong className="font-bold text-foreground">TypeScript</strong> for data management and logic.</li>
                <li>Implemented a job board feature to enable users to search and apply for jobs.</li>
                <li>Developed an e-commerce shop feature for purchasing HR-related materials, with a secure payment integration using <strong className="font-bold text-foreground">Paystack</strong>.</li>
              </ul>
              <div className="mt-3 ml-2">
                <a href="https://www.michconsultingservices.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline font-bold text-foreground/60 italic hover:text-foreground transition-colors">https://www.michconsultingservices.com/</a>
              </div>
            </div>

            <div className="mb-8 pl-4 border-l-[3px] border-border/30 hover:border-foreground transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">ESTENDO <span className="text-base font-normal tracking-normal text-foreground/70 ml-2">| Frontend Engineer</span></h3>
                <span className="text-sm md:text-base font-bold bg-foreground/5 px-3 py-1 mt-2 md:mt-0 uppercase tracking-widest text-foreground/90">August 2020 - January 2021</span>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg text-foreground/90">
                <li>Developed the frontend using <strong className="font-bold text-foreground">React.js</strong> and <strong className="font-bold text-foreground">Bootstrap</strong> for a responsive, user-friendly interface.</li>
                <li>Built a product view and selection page to allow users to browse and choose products efficiently.</li>
                <li>Created a blog page to provide users with valuable insights and enhance the website’s content offering.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-protest-strike border-b-2 border-border/50 pb-2 mb-6 uppercase tracking-widest text-foreground/90">Projects</h2>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase text-foreground">Rebalancr</h3>
              </div>
              <p className="mb-2 text-base md:text-lg text-foreground/90">
                Architected a protocol for intelligent portfolio management, integrating Allora AI for real-time sentiment analysis and price predictions and Kuru DEX orderbooks to achieve 80% lower slippage compared to AMM-based protocols.
              </p>
              <a href="https://rebalancr.nu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline text-foreground/60 hover:text-foreground italic transition-colors">https://rebalancr.nu.vercel.app</a>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase text-foreground">Blonks</h3>
              </div>
              <p className="mb-2 text-base md:text-lg text-foreground/90">
                Built a fully on-chain SVG generative art engine where NFTs evolve every 100 blocks based on deterministic wallet-seed logic, Implementing portrait generation and evolution mechanics in Solidity, with real-time tracking in a Next.js frontend.
              </p>
              <a href="https://blonks.vercel.app/gallery" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline text-foreground/60 hover:text-foreground italic transition-colors">https://blonks.vercel.app/gallery</a>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase text-foreground">Kairos</h3>
              </div>
              <p className="mb-2 text-base md:text-lg text-foreground/90">
                Developed an automated DCA trading bot leveraging MetaMask Advanced Permissions (ERC-7715/7710) for non-custodial, session-based trading powered by real-time market analysis engine using Envio HyperIndex to track Uniswap V4 liquidity and price trends.
              </p>
              <a href="https://kairos-frontend-weld.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline text-foreground/60 hover:text-foreground italic transition-colors">https://kairos-frontend-weld.vercel.app</a>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase text-foreground">Covus</h3>
              </div>
              <p className="mb-2 text-base md:text-lg text-foreground/90">
                Implemented an ERC-4626 compliant liquid staking protocol for STT tokens with non-rebasing share mechanics, using a robust FIFO withdrawal queue system to maintain protocol solvency and handle orderly redemptions during low-liquidity periods.
              </p>
              <a href="https://covus-beige.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline text-foreground/60 hover:text-foreground italic transition-colors">https://covus-beige.vercel.app</a>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase text-foreground">Farcaster Starter Kit</h3>
              </div>
              <p className="mb-2 text-base md:text-lg text-foreground/90">
                Built an open-source foundational toolkit for developing Farcaster Mini-Apps with built-in JFS (JSON Farcaster Signature) verification, Pre-configured Frame metadata, account association, and notification systems using Scaffold-ETH 2.
              </p>
              <a href="https://github.com/velikanghost/se2-farcaster-miniapp-starter" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline text-foreground/60 hover:text-foreground italic transition-colors">https://github.com/velikanghost/se2-farcaster-miniapp-starter</a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-protest-strike border-b-2 border-border/50 pb-2 mb-6 uppercase tracking-widest text-foreground/90">Education</h2>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-foreground">Federal University Abeokuta</h3>
                <span className="text-base font-bold tracking-wide text-foreground">Bachelor's Degree</span>
              </div>
              <p className="text-base md:text-lg italic text-foreground/80">Mechanical Engineering</p>
            </div>
          </section>
        </div>
      </div>
    </SheetContent>
    </Sheet>
  );
}
