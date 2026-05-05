import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FADE_UP_ANIM } from "../../utils/animations";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/caeljar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cesar-morelos/" },
];

export default function Footer() {
    return (
        <motion.footer
            {...FADE_UP_ANIM(0.5)}
            className="relative z-10 bg-surface border-t border-surface-floating px-12 py-10"
        >
            <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">

                {/* Left — copyright */}
                <p className="font-mono text-[0.75rem] text-foreground-subtle">
                    Designed &amp; built with intention —{" "}
                    <span className="text-[#94a3b8]">2025</span>
                </p>

                {/* Center — social links */}
                <div className="flex items-center gap-1 font-mono text-[0.75rem] text-foreground-subtle">
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
                <p className="font-mono text-[0.68rem] text-foreground-subtle hidden lg:block">
                    Performance Tester · Full-Stack · ML Engineer
                </p>

            </div>
        </motion.footer>
    );
}