
import { motion } from 'framer-motion';
import { FADE_UP_ANIM } from '../../../../utils/animations';
function PassionTechCard({ text }: { text: string }) {
    return (
        <div className="border border-teal-500/30 bg-teal-500/5 rounded-md px-3 py-1.5 transition-all duration-300
            group-hover:shadow-2xl group-hover:shadow-teal-500/20
        ">
            <span className="text-teal-400 text-xs font-mono">{text}</span>
        </div>
    );
}

interface PassionCardProps {
    number: number,
    title: string,
    description: string,
    techs: Array<string>
}

function PassionCard({ number, title, description, techs }: PassionCardProps) {
    // This turns '1' into '01'
    const formattedNumber = String(number).padStart(2, '0');

    return (
        <>
            {/* 1. We add the 'group' class here to act as a trigger for child elements */}
            <div
                className="h-full group passion-card flex flex-col bg-surface-elevated border border-white/10 rounded-3xl px-8 py-4 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary hover:-translate-y-1">

                {/* The giant faint number */}
                {/* 3. We use 'group-hover:' to react when the parent card is hovered */}
                <h1 className="text-6xl !font-mono !text-white/10 !font-extralight !my-0 !mb-4 tracking-tighter transition-all duration-300 group-hover:!text-primary/40 group-hover:drop-shadow-[0_0_20px_rgba(var(--color-primary),0.5)]">
                    {formattedNumber}
                </h1>

                {/* The Title */}
                <h2 className="!text-xl !font-display !font-bold text-white !mb-6 !leading-tight tracking-wide pr-4 transition-all duration-300
                group-hover:!text-primary/80 group-hover:drop-shadow-[0_0_20px_rgba(var(--color-primary),0.5)]
                ">
                    {title}
                </h2>

                {/* The Description */}
                <p className="grow text-slate-400 text-left !text-xs !leading-normal !mb-4 ">
                    {description}
                </p>

                {/* The Tech Pills container */}
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                        <PassionTechCard key={idx} text={tech} />
                    ))}
                </div>
            </div>
        </>
    );
}

function PassionSection() {
    return (
        <section className="passion-section min-h-screen" id='interests'>
            <div className="py-16 px-6 md:mx-auto flex flex-col gap-4 md:max-w-3/5">

                <motion.div
                    {...FADE_UP_ANIM(0.5)}
                    className="flex flex-col gap-5">
                    <h3 className="code-text flex uppercase ">05 / Passions</h3>
                    <h2 className="!text-5xl flex gap-2 flex-wrap items-center font-sans text-left !font-semibold !m-0">
                        <span className="tracking-wider">
                            What
                        </span>
                        <span className="block font-serif italic tracking-normal font-light bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Drives Me
                        </span>
                    </h2>
                    <p className="text-left md:max-w-150">
                        Beyond the daily work - the subject that makes my mind explode.
                    </p>
                </motion.div>
                <div className="grid gap-4 md:gap-8 lg:gap-4 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">

                    <motion.div
                        className='h-full'
                        {...FADE_UP_ANIM(0.5)}
                    >
                        <PassionCard
                            number={1}
                            title="Deep Learning for Generation"
                            description="Fascinated by NN models, particularly Variational Autoencoders (VAEs) and their latent space properties. I implement algorithms from scratch to understand them at the algorithmic level, not just the conceptual one."
                            techs={["VAEs", "PyTorch"]}
                        />
                    </motion.div>


                    <motion.div
                        className='h-full'
                        {...FADE_UP_ANIM(0.5)}
                    >
                        <PassionCard
                            number={2}
                            title="Local LLM Fine-Tuning"
                            description="Running and fine-tuning LLMs (like BERT) to be deployed locally through custom embedded layers. I build private inference pipelines trained on specialized vocabularies to power identification of changes into custom bank services, domain-specific tooling."
                            techs={["LLMs", "BERT", "Fine-Tuning", "Local Inference"]}
                        />
                    </motion.div>


                    <motion.div
                        className='h-full'
                        {...FADE_UP_ANIM(0.5)}
                    >
                        <PassionCard
                            number={3}
                            title="Task Automation"
                            description="Obsessed with eliminating repetitive tasks through code as much as possible. From bash scripts and Python automation to job execution and ML-powered CLI tools. If I do it twice, I figure out how to automate it."
                            techs={["Python", "Shell", "Spring Batch", "Docker"]}
                        />
                    </motion.div>

                </div>
            </div>

        </section>
    );
}

export default PassionSection;