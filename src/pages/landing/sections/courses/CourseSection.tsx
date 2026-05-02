import { motion } from 'framer-motion';
interface CourseCardProps {
    techName: string,
    title: string,
    description: string,
    year: string
}

function CourseCard(courseCardProp: CourseCardProps) {


    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            className="
            relative flex flex-col gap-1 w-full px-8 py-4 rounded-xl bg-surface-elevated overflow-hidden cursor-pointer transition-all duration-300 ease-out
            hover:shadow-primary hover:shadow hover:shadow-md
            "
        >
            <span className="text-primary text-xs">{courseCardProp.techName.toUpperCase()}</span>
            <h4 className="text-white !font-semibold">{courseCardProp.title}</h4>
            <p className="!text-xs !tracking-normal">{courseCardProp.description}</p>
            <span className="!text-right text-xs">{courseCardProp.year}</span>

            <motion.div
                className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-secondary  w-full origin-left"
                variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        </motion.div>
    );
}


function CourseSection() {

    return (
        <section className="experience-section min-h-screen bg-surface">
            <div className="py-16 px-6 md:mx-auto flex flex-col gap-4 md:max-w-3/5">

                <div className="flex flex-col gap-5">
                    <h3 className="code-text flex uppercase ">04 / Courses</h3>
                    <h2 className="!text-5xl flex gap-2 flex-wrap items-center font-sans text-left !font-semibold !m-0">
                        <span className="tracking-wider">
                            Always
                        </span>
                        <span className="block font-serif italic tracking-normal font-light bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Learning
                        </span>
                    </h2>
                    <p className="text-left md:max-w-150">
                        Continuous learning in backend engineering, architectures and machine learning fundamentals.
                    </p>
                </div>
                <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                    <CourseCard title="Solution Architect" techName="AWS" description="Cloud architecture patterns, high availability design and AWS service integration for distributed testing" year="2022" />
                </div>
            </div>
        </section>
    )
}

export default CourseSection;