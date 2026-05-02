import { string } from "three/tsl";

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

        <section className="experience-section min-h-screen">
            <div className="py-16 px-6 md:mx-auto flex flex-col gap-4 md:max-w-3/5">

                <div className="flex flex-col gap-5">
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
                </div>


                <div className="flex flex-col flex-wrap gap-8 border-primary border-0 border-l-2 ">
                    <ExperienceCard
                        title="Performance Testing / Certifications Domain"
                        description="Managing a cross-functional team developing and maintaining AI-driven certification tools. Overseeing performance benchmarks, QA pipelines, and delivery of ML-integrated services at scale for one of the world's largest banks."
                        enterprise="BBVA"
                        finalYear="Present"
                        skills={[
                            { title: "Dynatrace", relevant: true },
                            { title: "JMeter", relevant: true },
                            { title: "AWS", relevant: false },
                            { title: "Spring Batch", relevant: false },
                            { title: "Transactions", relevant: true },
                            { title: "Neoload", relevant: true }
                        ]}
                        startYear="2025"
                        teamName="Quality & Deployment IT Operations"
                        key={1}
                    />
                    <ExperienceCard
                        title="Performance Testing / Certifications Domain"
                        description="Managing a cross-functional team developing and maintaining AI-driven certification tools. Overseeing performance benchmarks, QA pipelines, and delivery of ML-integrated services at scale for one of the world's largest banks."
                        enterprise="BBVA"
                        finalYear="Present"
                        skills={[
                            { title: "Dynatrace", relevant: true },
                            { title: "JMeter", relevant: true },
                            { title: "AWS", relevant: false },
                            { title: "Spring Batch", relevant: false },
                            { title: "Transactions", relevant: true },
                            { title: "Neoload", relevant: true }
                        ]}
                        startYear="2025"
                        teamName="Quality & Deployment IT Operations"
                        key={2}
                    />
                    <ExperienceCard
                        title="Performance Testing / Certifications Domain"
                        description="Managing a cross-functional team developing and maintaining AI-driven certification tools. Overseeing performance benchmarks, QA pipelines, and delivery of ML-integrated services at scale for one of the world's largest banks."
                        enterprise="BBVA"
                        finalYear="Present"
                        skills={[
                            { title: "Dynatrace", relevant: true },
                            { title: "JMeter", relevant: true },
                            { title: "AWS", relevant: false },
                            { title: "Spring Batch", relevant: false },
                            { title: "Transactions", relevant: true },
                            { title: "Neoload", relevant: true }
                        ]}
                        startYear="2025"
                        teamName="Quality & Deployment IT Operations"
                        key={3}
                    />
                </div>
            </div>
        </section>


    </>);
}

export default ExperienceSection;