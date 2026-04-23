import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 bg-[#0d1117] border-t border-[rgba(99,179,237,0.12)] px-12 py-10"
        >
            <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">

                {/* Left — copyright */}
                <p className="font-mono text-[0.75rem] text-[#475569]">
                    Designed &amp; built with intention —{" "}
                    <span className="text-[#94a3b8]">2025</span>
                </p>

                {/* Center — social links */}
                <div className="flex items-center gap-1 font-mono text-[0.75rem] text-[#475569]">
                    {SOCIAL_LINKS.map(({ label, href }, i) => (
                        <span key={href} className="flex items-center gap-1">
                            {i > 0 && <span className="mx-1 opacity-40">·</span>}
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#63b3ed] hover:underline transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </span>
                    ))}
                </div>

                {/* Right — role tagline */}
                <p className="font-mono text-[0.68rem] text-[#475569]">
                    Performance Tester · Full-Stack · ML Engineer
                </p>

            </div>
        </motion.footer>
    );
}