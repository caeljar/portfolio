import { motion } from "motion/react";
import HeroCanvas3D from "./HeroCanvas3D";
import Hero3DCanvas from "./Hero3DCanvas";

/* ── SVG icons ───────────────────────────────────────────────────────────── */
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

/* ── Animation variants ──────────────────────────────────────────────────── */
const FADE_UP = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
});

const FADE_IN = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, delay, ease: "easeOut" },
});

/* ── Inline tag chip ──────────────────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span
            className={[
                "inline-block font-mono text-[0.75rem] text-[#63b3ed]",
                "bg-[#161d2e] border border-[rgba(99,179,237,0.22)]",
                "px-[0.6rem] py-[0.15rem] rounded-[4px]",
                "mr-[0.3rem] mb-[0.3rem]",
            ].join(" ")}
        >
            {children}
        </span>
    );
}

/* ── CTA button variants ─────────────────────────────────────────────────── */
function PrimaryBtn({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(99,179,237,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className={[
                "inline-flex items-center gap-2",
                "px-7 py-3 rounded-lg",
                "font-[Syne] text-[0.85rem] font-semibold tracking-[0.05em]",
                "bg-[#63b3ed] text-[#060810]",
                "border-[1.5px] border-[#63b3ed]",
                "transition-colors duration-200 hover:bg-[#90cdf4]",
                "cursor-none no-underline",
            ].join(" ")}
        >
            {children}
        </motion.a>
    );
}

function GhostBtn({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, borderColor: "#63b3ed", color: "#63b3ed" }}
            whileTap={{ scale: 0.97 }}
            className={[
                "inline-flex items-center gap-2",
                "px-7 py-3 rounded-lg",
                "font-[Syne] text-[0.85rem] font-semibold tracking-[0.05em]",
                "bg-transparent text-[#e2e8f0]",
                "border-[1.5px] border-[rgba(99,179,237,0.22)]",
                "transition-all duration-200",
                "cursor-none no-underline",
            ].join(" ")}
        >
            {children}
        </motion.a>
    );
}

/* ── Main component ──────────────────────────────────────────────────────── */
function HeroSection2() {
    return (
        <section
            id="hero"
            className="relative z-[1] min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-12 pt-24 pb-16 overflow-hidden"
        >
            {/* ── Background: grid lines ── */}
            <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(99,179,237,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,.04) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                }}
            />

            {/* ── Background: glow orbs ── */}
            <div
                aria-hidden
                className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
                style={{ background: "rgba(99,179,237,.08)", filter: "blur(80px)" }}
            />
            <div
                aria-hidden
                className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
                style={{ background: "rgba(79,209,199,.06)", filter: "blur(80px)" }}
            />
            <div
                aria-hidden
                className="absolute top-[50%] right-[30%] w-[250px] h-[250px] rounded-full pointer-events-none z-0"
                style={{ background: "rgba(237,100,166,.05)", filter: "blur(80px)" }}
            />

            {/* ── Hero content (left column) ── */}
            <div className="relative z-[2]">
                {/* Eyebrow */}
                <motion.p
                    {...FADE_UP(0.2)}
                    className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-[#63b3ed] mb-6"
                >
          // Hello, World — I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    {...FADE_UP(0.35)}
                    className="text-[clamp(3rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4"
                >
                    A Developer
                    <br />
                    {/* Italic serif gradient line */}
                    <span
                        className="font-[Instrument_Serif] italic font-normal"
                        style={{
                            background: "linear-gradient(135deg, #63b3ed, #4fd1c7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        &amp; Engineer.
                    </span>
                </motion.h1>

                {/* Tagline + role chips */}
                <motion.p
                    {...FADE_UP(0.5)}
                    className="text-[1rem] text-[#94a3b8] max-w-[440px] leading-[1.8] mb-10"
                >
                    <Tag>Performance Tester</Tag>
                    <Tag>Full-Stack Dev</Tag>
                    <Tag>ML Engineer (in progress)</Tag>
                    <br />
                    Leading AI certification initiatives at BBVA. Building robust backend
                    systems, reactive frontends, and exploring the frontier of deep learning.
                </motion.p>

                {/* CTA buttons */}
                <motion.div {...FADE_UP(0.65)} className="flex flex-wrap gap-4">
                    <PrimaryBtn href="https://github.com">
                        <GitHubIcon />
                        GitHub
                    </PrimaryBtn>
                    <GhostBtn href="https://linkedin.com">
                        <LinkedInIcon />
                        LinkedIn
                    </GhostBtn>
                </motion.div>
            </div>

            {/* ── 3D canvas (right column) ── */}
            <motion.div
                {...FADE_IN(0.4)}
                className="relative h-[300px] md:h-[520px] order-first md:order-none"
            >
                <HeroCanvas3D />
            </motion.div>

            {/* ── Scroll hint ── */}
            <motion.div
                {...FADE_UP(1.2)}
                className={[
                    "absolute bottom-8 left-1/2 -translate-x-1/2",
                    "flex flex-col items-center gap-2",
                    "font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#475569]",
                ].join(" ")}
            >
                <span>Scroll</span>
                <span
                    className="w-px h-10"
                    style={{
                        background: "linear-gradient(to bottom, #63b3ed, transparent)",
                        animation: "scrollPulse 2s infinite",
                    }}
                />
            </motion.div>

            {/* ── Keyframes ── */}
            <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1);   }
          50%       { opacity: 1;   transform: scaleY(1.3); }
        }
      `}</style>
        </section>
    );
}

export default function HeroSection() {
    return (
        <>
            <Hero3DCanvas />
            <section className="absolute inset-0 z-10 text-white flex items-center pointer-events-none">
                <div className="flex flex-col items-start justify-center px-10 w-1/2 gap-2">
                    <span>// Hello, World - I'm</span>
                    <div>A Developer</div>
                    <div>
                        <div><p>Performance Tester</p></div>
                        <div>
                            <p>Full-Stack Dev</p>
                        </div>
                        <div>
                            <p>ML Engineer (in progress)</p>
                        </div>
                    </div>
                    <div>
                        <p>Being part of AI certifications at BBVA. Building innovative solutions, reactive frontends, and exploring deeplearning and Specialized AI Tools</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <div>
                            <span></span>
                            <h4>GitHub</h4>
                        </div>
                        <div>
                            <span></span>
                            <h4>LinkedIn</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}