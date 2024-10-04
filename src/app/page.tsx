import {
    IconAddressBook,
    IconArrowUpRight,
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBriefcase,
    IconCode,
    IconMail,
    IconSubtask,
} from "@tabler/icons-react";
import Link from "next/link";
import FrontendMentor from "./components/Frontendmentor";
import Experience from "./components/Experience";
import { experienceData, projectData, workExperienceData } from "@/utils/data";
import Project from "./components/Project";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
    return (
        <div className="mt-14 font-Poppins">
            <main
                id="home"
                className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4"
            >
                <h1 className="text-3xl font-extralight">Hi, my name is</h1>
                <h1 className="-ml-1 text-7xl font-semibold text-primary">
                    Dominik Sieroń.
                </h1>
                <p className="mt-4 max-w-[25ch] pb-2 pl-2 text-xl md:max-w-[50ch]">
                    I am software engineer with a passion for{" "}
                    <span className="text-accent">web development.</span>{" "}
                    Currently studying Computer Science in Engineering
                    <br />
                    at{" "}
                    <span className="text-accent">
                        AGH University of Cracow
                    </span>
                    .
                </p>
                <div className="flex items-center gap-2 pl-2">
                    <div className="h-0.5 w-4 bg-secondary"></div>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                        href="https://github.com/CALLmeDOMIN"
                        aria-label="Github profile link"
                    >
                        <IconBrandGithub size={24} />
                    </Link>
                    <div className="h-0.5 w-0.5 bg-secondary"></div>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                        href="https://www.linkedin.com/in/dominiksieron/"
                        aria-label="Linkedin profile link"
                    >
                        <IconBrandLinkedin size={24} />
                    </Link>
                    <div className="h-0.5 w-0.5 bg-secondary"></div>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                        href={"/CV.pdf"}
                        aria-label="CV pdf"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-file-cv"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h14v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                            <path d="M13 11l1.5 6l1.5 -6" />
                        </svg>
                    </Link>
                    <div className="h-0.5 w-[40%] bg-secondary"></div>
                </div>
            </main>
            <section
                id="workExperience"
                className="bg-secondary px-4 py-14 text-white"
            >
                <div className="mx-auto max-w-7xl space-y-12">
                    <div className="flex">
                        <IconBriefcase className="mr-2 text-accent" size={48} />
                        <h1 className="text-5xl font-bold">Work Experience</h1>
                    </div>
                    {workExperienceData.map((data) => (
                        <WorkExperience key={data.title} {...data} />
                    ))}
                </div>
            </section>
            <div className="h-4 w-full bg-background" />
            <section
                id="experience"
                className="bg-secondary px-4 py-14 text-white"
            >
                <div className="mx-auto max-w-7xl space-y-12">
                    <div className="flex">
                        <IconSubtask className="mr-2 text-accent" size={48} />
                        <h1 className="text-5xl font-bold">
                            Relevant Experience
                        </h1>
                    </div>
                    {experienceData.map((experience, key) => (
                        <Experience key={key} {...experience} />
                    ))}
                </div>
            </section>
            <section id="projects" className="px-4 py-14">
                <div className="mx-auto max-w-7xl space-y-10">
                    <div className="flex justify-end">
                        <h1 className="text-5xl font-bold">Projects</h1>
                        <IconCode className="ml-2 text-accent" size={48} />
                    </div>
                    {projectData.map((project, key) => (
                        <Project key={key} {...project} />
                    ))}
                    <div className="flex items-center justify-center py-4 text-3xl font-semibold">
                        <h2>Frontend Mentor</h2>
                        <Link
                            href={"https://www.frontendmentor.io/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pl-4"
                            aria-label="Frontend Mentor link"
                        >
                            <IconArrowUpRight />
                        </Link>
                    </div>
                    <div className="mb-4 grid place-items-center gap-4 transition-all duration-1000 odd:delay-300 even:delay-700 sm:grid-cols-2 lg:grid-cols-3">
                        <FrontendMentor
                            image="/advice.jpg"
                            alt="advice generator"
                            github="https://github.com/CALLmeDOMIN/advice-generator"
                            vercel="https://advice-generator-gold-one.vercel.app/"
                            whiteText
                        />
                        <FrontendMentor
                            image="/newsletter.jpg"
                            alt="newsletter sign up"
                            github="https://github.com/CALLmeDOMIN/newsletter-sign-up"
                            vercel="https://newsletter-sign-up-delta.vercel.app/"
                            whiteText
                        />
                        <FrontendMentor
                            image="/tipcalc.jpg"
                            alt="tip calculator"
                            github="https://github.com/CALLmeDOMIN/tip-calculator"
                            vercel="https://tip-calculator-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/summarycomponent.png"
                            alt="summary component"
                            github="https://github.com/CALLmeDOMIN/summary-component"
                            vercel="https://summarycomponent-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/previewcard.png"
                            alt="preview card"
                            github="https://github.com/CALLmeDOMIN/preview-card"
                            vercel="https://previewcard-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/qrcode.png"
                            alt="qrcode"
                            github="https://github.com/CALLmeDOMIN/qrcode"
                            vercel="https://qrcode-dominiksieron.vercel.app/"
                        />
                    </div>
                </div>
            </section>
            <section
                id="contact"
                className="mx-auto flex w-full max-w-5xl flex-col space-y-4 px-4 py-28 transition-all  duration-[1250ms] odd:delay-300 even:delay-700 md:pr-10"
            >
                <div className="flex">
                    <IconAddressBook className="mr-2 text-accent" size={48} />
                    <h1 className="mb-4 text-5xl font-bold">Contact me</h1>
                </div>
                <div>
                    <p className="mb-4 text-center font-light md:text-xl">
                        You can write to me through{" "}
                        <span className="text-accent">mail/discord</span>. I
                        will always try to respond.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            aria-label="mail"
                            href="mailto:contact@dsieron.pl"
                            className="ml-4 flex justify-center rounded-md bg-primary p-2 px-4 text-white"
                        >
                            <IconMail />
                        </Link>
                        <Link
                            aria-label="discord"
                            href={
                                "https://discord.com/users/320254777160368139"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 flex justify-center rounded-md bg-primary p-2 px-4 text-white"
                        >
                            <IconBrandDiscord />
                        </Link>
                    </div>
                </div>
            </section>
            <footer className="flex items-center bg-secondary p-4 font-semibold shadow-md">
                <h1>
                    &copy;
                    {" " + new Date().getFullYear()} Dominik Sieroń
                </h1>
            </footer>
        </div>
    );
}
