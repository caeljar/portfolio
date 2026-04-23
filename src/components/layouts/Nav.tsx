import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

const NAV_LINKS = [
    { label: "Experience", href: "#experience" },
    { label: "Synvetix", href: "#current-work" },
    { label: "Certifications", href: "#certifications" },
    { label: "Interests", href: "#interests" },
];

function Nav() {

    const [scrolled, setScrolled] = useState(false);

    const navHeight = 'h-18 py 5'

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
            <motion.nav
                id="navbar"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={[
                    "fixed top-0 left-0 right-0 z-100 h-4",
                    "flex items-center justify-between",
                    "px-12",
                    "backdrop-blur-xl border-b",
                    "transition-all duration-300",
                    scrolled
                        ? "bg-[rgba(6,8,16,0.95)] border-[rgba(99,179,237,0.18)]"
                        : "bg-[rgba(6,8,16,0.70)] border-[rgba(99,179,237,0.12)]",
                    navHeight
                ].join(" ")}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    className="font-mono text-[0.85rem] tracking-widest text-[#63b3ed] no-underline"
                >
                    /{" "}
                    <span className="text-[#94a3b8]">portfolio</span>
                </a>

                {/* Nav links — hidden on mobile */}
                <ul className="hidden md:flex items-center gap-10 list-none">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <NavLink href={href}>{label}</NavLink>
                        </li>
                    ))}
                </ul>

                {/* Status badge */}
                <div className="flex items-center gap-2 font-mono text-[0.75rem] text-[#475569]">
                    <motion.span
                        className="w-1.75 h-1.75 rounded-full bg-[#48bb78]"
                        animate={{
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                    </motion.span>

                    <span className="hidden sm:inline">Available for collaboration</span>
                </div>
            </motion.nav>

        </>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="group relative text-[0.8rem] tracking-[0.12em] uppercase text-[#94a3b8] no-underline transition-colors duration-200 hover:text-[#63b3ed]"
        >
            {children}
            {/* sliding underline */}
            <span
                className="absolute -bottom-1 left-0 h-px bg-[#63b3ed] w-0 group-hover:w-full transition-all duration-300"
            />
        </a>
    );
}

export default Nav