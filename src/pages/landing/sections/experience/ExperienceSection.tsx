import { motion } from 'framer-motion';
import { FADE_UP_ANIM } from '../../../../utils/animations';

interface SkillProp {
    title: string,
    relevant: boolean
}

interface ExperienceCardProps {
    startYear: string,
    finalYear: string,
    title: string,
    enterprise: string,
    teamName: string,
    description: string,
    skills: Array<SkillProp>
}

function ExperienceCard({
    startYear,
    finalYear,
    title,
    enterprise,
    teamName,
    description,
    skills,
}: ExperienceCardProps) {

    return (
        <div className="experience-card flex flex-col gap-5 px-5 relative">
            <span
                className="
    absolute left-0 top-1.5 z-10
    -translate-x-[0.3rem]

    w-2 h-2 rounded-full bg-primary
    ring-[3px] ring-[#0A0D14]

    before:content-[''] before:absolute
    before:top-1/2 before:left-1/2
    before:-translate-x-1/2 before:-translate-y-1/2
    before:w-7 before:h-7 before:rounded-full before:-z-10
    before:bg-[radial-gradient(circle,rgba(99,179,237,0.55)_0%,transparent_70%)]
  "
            />
            <div className="">
                <h4 className="code-text text-left"><span>{startYear}</span> - <span>{finalYear}</span></h4>
                <h3 className="text-left font-bold text-foreground">{title}</h3>
                <span className="text-left font-light">{enterprise} - {teamName}</span>
            </div>
            <div className="md:max-w-150">
                <p className="!text-xs">{description}</p>
            </div>
            <div className="md:max-w-150 w-full flex flex-wrap gap-2">
                {skills.map(({ title, relevant }) => (
                    <span
                        className={`
                    bg-surface-elevated border-1 rounded-full text-xs py-0.5 px-2 
                    transition-all duration-300 ease-in-out pointer-events-auto 
                    hover:bg-surface-elevated-hover 
                    ${relevant ? "text-primary border-primary" : "text-foreground-muted border-muted"}
                    `}
                    >{title}</span>
                ))}
            </div>
        </div>
    );
}

function ExperienceSection() {
    return (<>

        <section className="experience-section min-h-screen" id='experience'>
            <div className="py-16 px-6 md:mx-auto flex flex-col gap-4 md:max-w-3/5">

                <motion.div
                    {...FADE_UP_ANIM(0.3)}
                    className="flex flex-col gap-5">
                    <h3 className="code-text flex uppercase ">02 / Experience</h3>
                    <h2 className="!text-5xl flex gap-2 flex-wrap items-center font-sans text-left !font-semibold !m-0">
                        <span className="tracking-wider">
                            My
                        </span>
                        <span className="block font-serif italic tracking-normal font-light bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>
                    <p className="text-left md:max-w-150">
                        From full-stack container management to certifying high-availability financial core systems. A career driven by observability, scalability, and AI automation.
                    </p>
                </motion.div>


                <div className="flex flex-col flex-wrap gap-8 border-primary border-0 border-l-2 ">
                    <motion.div
                        {...FADE_UP_ANIM(0.3)}
                    >
                        <ExperienceCard
                            title="Infrastructure & IT Operations"
                            description="Leading optimization and certification of critical batch, AI, and transactional bank components. Executing performance testing, architecting Elasticsearch solutions, and driving Oracle SQL tuning. Implemented AI-driven automation for observability with Dynatrace and Grafana."
                            enterprise="Hitss Solutions S.A. de C.V."
                            finalYear="Present"
                            skills={[
                                { title: "Dynatrace", relevant: true },
                                { title: "Apache Spark", relevant: true },
                                { title: "OracleDB", relevant: true },
                                { title: "Python & Java", relevant: true },
                                { title: "Elasticsearch", relevant: false },
                                { title: "Grafana", relevant: false }
                            ]}
                            startYear="2025"
                            teamName="Performance & Certification"
                            key={1}
                        />
                    </motion.div>
                    <motion.div
                        {...FADE_UP_ANIM(0.3)}
                    >
                        <ExperienceCard
                            title="Infrastructure & Digital Systems Management"
                            description="Migrated, monitored, and optimized common infrastructure components within containerized environments. Managed VMware vSphere environments, developed management panels, and deployed full-stack web applications using React.js and Express.js on the Tanzu platform."
                            enterprise="Petróleos Mexicanos"
                            finalYear="2024"
                            skills={[
                                { title: "Kubernetes", relevant: true },
                                { title: "React.js", relevant: true },
                                { title: "Express.js", relevant: true },
                                { title: "VMware", relevant: true },
                                { title: "Active Directory", relevant: false },
                                { title: "Tanzu", relevant: false },
                            ]}
                            startYear="2023"
                            teamName="Digital Systems"
                            key={2}
                        />
                    </motion.div>
                    <motion.div
                        {...FADE_UP_ANIM(0.3)}
                    >
                        <ExperienceCard
                            title="Computational Systems Engineering"
                            description="Focused on Data Structures, Greedy Algorithms, and Distributed Architecture. Developed a full-stack web application for image recognition and executed database optimization through indexing."
                            enterprise="The Higher School of Computing (ESCOM) - IPN"
                            finalYear="2023"
                            skills={[
                                { title: "Web Development", relevant: true },
                                { title: "Distributed Arch", relevant: true },
                                { title: "SQL Optimization", relevant: true },
                                { title: "Data Structures", relevant: false },
                                { title: "Algorithms", relevant: false },
                            ]}
                            startYear="2019"
                            teamName="Bachelor's Degree"
                            key={3}
                        />
                    </motion.div>
                </div>
            </div>
        </section>


    </>);
}

export default ExperienceSection;