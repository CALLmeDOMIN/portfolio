import FrontendMentor from "@/components/Frontendmentor";
import {
    IconAddressBook,
    IconAlertTriangle,
    IconArrowNarrowRight,
    IconArrowUpRight,
    IconBrandCpp,
    IconBrandCss3,
    IconBrandDiscord,
    IconBrandGit,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandLinkedin,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandPython,
    IconBrandReact,
    IconBrandSass,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVercel,
    IconCode,
    IconMail,
    IconSql,
    IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <div className="scrollbar my-0 mx-auto mt-14 max-w-[1600px] px-6 py-0 font-Poppins md:px-12 lg:px-24 xl:px-36">
                <main
                    id="home"
                    className="mx-auto my-0 flex min-h-screen max-w-5xl flex-col justify-center transition-all duration-[1250ms]"
                >
                    <h2 className="text-3xl font-extralight">Hi, my name is</h2>
                    <h1 className="-ml-1 text-7xl font-semibold text-accent">
                        Dominik Sieroń.
                    </h1>
                    <p className="mt-4 max-w-[25ch] pl-2 pb-2 text-xl md:max-w-[50ch]">
                        I am software engineer with a passion for{" "}
                        <span className="text-accent">web development.</span>{" "}
                        Currently studying Computer Science in Engineering
                        <br />
                        at{" "}
                        <span className="text-accent">
                            AGH University of Science and Technology
                        </span>
                        .
                    </p>
                    <div className="flex items-center gap-2 pl-2">
                        <div className="h-[2px] w-4 bg-accent"></div>
                        <Link
                            passHref
                            target="about:blank"
                            className="hover:text-accent"
                            href="https://github.com/CALLmeDOMIN"
                            aria-label="Github profile link"
                        >
                            <IconBrandGithub size={24} />
                        </Link>
                        <div className="h-[2px] w-[2px] bg-accent"></div>
                        <Link
                            passHref
                            target="about:blank"
                            className="hover:text-accent"
                            href="https://www.linkedin.com/in/dominiksieron/"
                            aria-label="Linkedin profile link"
                        >
                            <IconBrandLinkedin size={24} />
                        </Link>
                        <div className="h-[2px] w-[2px] bg-accent"></div>
                        <Link
                            passHref
                            target="about:blank"
                            className="hover:text-accent"
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
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                                <path d="M13 11l1.5 6l1.5 -6" />
                            </svg>
                        </Link>
                        <div className="h-[2px] w-[40%] bg-accent"></div>
                    </div>
                </main>
                <section
                    id="about"
                    className="mx-auto my-0 min-h-[600px] max-w-5xl py-28 transition-all  duration-[1250ms] md:pr-10"
                >
                    <div className="flex">
                        <IconUser className="mr-2 h-12 w-12 text-text" />
                        <h2 className="mb-4 text-5xl font-bold text-text">
                            About me
                        </h2>
                    </div>
                    <div className="text-justify md:w-5/6">
                        <p className="mb-4 border-l border-accent pl-2 font-light text-text transition-all duration-300 hover:border-text md:text-xl">
                            I graduated from{" "}
                            <span className="text-accent">
                                VI Liceum Ogólnokształcące im. Jana
                                Kochanowskiego
                            </span>{" "}
                            in Radom, Poland and now I am a student at AGH
                            University of Science and Technology. My field of
                            study{" "}
                            <span className="text-accent">
                                Computer Science in Engineering
                            </span>{" "}
                            helps me to develop my technical skills and gain
                            knowledge.
                        </p>
                        <p className="mb-4 border-l border-accent pl-2 font-light text-text transition-all duration-300 hover:border-text md:text-xl">
                            I am also interested in web development and I am
                            currently learning{" "}
                            <span className="text-accent">J</span>
                            avaScript, <span className="text-accent">T</span>
                            ypeScript, <span className="text-accent">R</span>
                            eact, <span className="text-accent">N</span>
                            ext.js, <span className="text-accent">T</span>
                            ailwindcss and other technologies.
                        </p>
                        <p className="mb-4 border-l border-accent pl-2 font-light text-text transition-all duration-300 hover:border-white md:text-xl">
                            In addition to my technical skills, I possess
                            excellent problem-solving abilities, strong
                            communication skills, and a collaborative approach
                            to teamwork. Please feel free to browse my portfolio
                            to see some of my coding projects and learn more
                            about me.
                        </p>
                        <div className="flex justify-center space-x-2 border-b border-l border-accent p-4 text-text transition-all duration-300 hover:border-text md:w-1/2 md:justify-start">
                            <IconBrandHtml5 />
                            <IconBrandCss3 />
                            <IconBrandTailwind />
                            <IconBrandSass />
                            <IconBrandJavascript />
                            <IconBrandTypescript />
                            <IconBrandReact />
                            <IconBrandNextjs />
                            <IconSql />
                            <IconBrandPython />
                            <IconBrandCpp />
                            <IconBrandGit />
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    className="my-0 mx-auto py-48  transition-all duration-[1250ms]"
                >
                    <div className="flex">
                        <IconCode className="mr-2 h-12 w-12 text-text" />
                        <h2 className="mb-4 text-5xl font-bold text-text">
                            Projects
                        </h2>
                    </div>

                    <div>
                        <h2 className="flex items-center py-4 pl-2 text-3xl font-semibold text-text">
                            <IconArrowNarrowRight className="mx-2 text-accent" />
                            Car rental
                        </h2>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <div className="flex flex-col gap-2 md:w-1/2">
                                <div className="flex justify-center gap-2 text-orange-400">
                                    <IconAlertTriangle aria-label="warning" />
                                    <h1>Work in progress</h1>
                                </div>
                                <p className="grow px-4">
                                    Project is a car rental website. It
                                    symulates a car rental company. The
                                    intention is to learn web development, new
                                    technologies and build a fully functional
                                    site. It is a work in progress and will be
                                    updated with new features, since its purpose
                                    is to learn newest things in practice.
                                </p>
                                <div className="my-4 flex gap-2 px-4 pr-6">
                                    <IconBrandNextjs aria-label="Nextjs" />
                                    <IconBrandReact aria-label="React" />
                                    <IconBrandTypescript aria-label="TypeScript" />
                                    <IconBrandTailwind aria-label="Tailwindcss" />
                                    <IconBrandPrisma aria-label="Prisma" />
                                    <div className="grow" />
                                    <Link
                                        aria-label="Github repository"
                                        href={
                                            "https://github.com/CALLmeDOMIN/car-rental"
                                        }
                                    >
                                        <IconBrandGithub />
                                    </Link>
                                    <Link
                                        aria-label="Vercel deployment"
                                        href={
                                            "https://car-rental-dominiksieron.vercel.app/"
                                        }
                                    >
                                        <IconBrandVercel />
                                    </Link>
                                </div>
                            </div>
                            <Link
                                className="rounded-xl shadow-md shadow-text/30 md:w-1/2"
                                href={
                                    "https://car-rental-dominiksieron.vercel.app/"
                                }
                                aria-label="Car rental project preview and link"
                            >
                                <Image
                                    src={"/car-rental.png"}
                                    alt="car rental project preview"
                                    width={1920}
                                    height={1080}
                                    className="rounded-xl"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="my-8 md:my-16">
                        <h2 className="flex items-center py-4 pl-2 text-3xl font-semibold text-text">
                            <IconArrowNarrowRight className="mx-2 text-accent" />
                            mytriproutes
                        </h2>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <div className="flex flex-col items-center gap-2 md:w-1/2 md:items-start">
                                <div className="flex w-full items-center justify-center gap-2 text-orange-400">
                                    <IconAlertTriangle aria-label="warning" />
                                    <h1>Work in progress</h1>
                                </div>
                                <p className="grow px-4">
                                    As part of a small team of three, I was
                                    responsible for frontend development and
                                    design in the mytriproutes project. I
                                    utilized various tools and technologies,
                                    including React, Typescript, and SCSS, and
                                    later migrated the project to Tailwindcss.
                                    Our team had specific business and technical
                                    goals in mind throughout the project, with a
                                    focus on providing users with an intuitive
                                    interface and ensuring high website
                                    performance. We successfully created an
                                    intuitive user interface, and the website
                                    functions quickly and smoothly. Overall,
                                    MyTripRoutes benefits users by making it
                                    easier for them to plan and share their
                                    trips, and store their photos and routes in
                                    a user-friendly way. A preview of the
                                    project is available at the link below
                                    (website may be under maintenance
                                    sometimes).
                                </p>
                                <Link
                                    target="about:blank"
                                    className="flex w-28 items-center rounded-md bg-primary-button p-2 font-semibold text-background shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button md:ml-4"
                                    href={"https://mytriproutes.com"}
                                    aria-label="Mytriproutes link"
                                >
                                    <button className="grow">Look Up</button>
                                    <IconArrowUpRight />
                                </Link>
                            </div>
                            <Link
                                className="max-h-[300px] rounded-xl shadow-md shadow-text/30 md:w-1/2"
                                href={"https://mytriproutes.com"}
                                aria-label="Mytriproutes preview and link"
                            >
                                <Image
                                    src={"/mytriproutes.png"}
                                    alt="car rental project preview"
                                    width={1920}
                                    height={1080}
                                    className="rounded-xl"
                                />
                            </Link>
                        </div>
                    </div>
                    <h2 className="flex items-center py-4 pl-2 text-3xl font-semibold text-text">
                        <IconArrowNarrowRight className="mx-2 text-accent" />
                        Frontend Mentor
                        <Link
                            href={"https://www.frontendmentor.io/"}
                            target="about:blank"
                            className="pl-4 text-accent"
                        >
                            <IconArrowUpRight />
                        </Link>
                    </h2>
                    <div className="mb-4 grid gap-4 px-4 transition-all duration-1000 odd:delay-300 even:delay-700 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Link className="m-4 text-accent" href={"/frontendmentor"}>
                        <button>More</button>
                    </Link>
                </section>
                <section
                    id="contact"
                    className="mx-auto my-0 flex min-h-[800px] w-full max-w-5xl flex-col space-y-4  py-28 text-text transition-all  duration-[1250ms] odd:delay-300 even:delay-700 md:pr-10"
                >
                    <div className="flex">
                        <IconAddressBook className="mr-2 h-12 w-12 text-text" />
                        <h2 className="mb-4 text-5xl font-bold text-text">
                            Contact me
                        </h2>
                    </div>
                    <div>
                        <p className="mb-4 text-center font-light text-text md:text-xl">
                            You can write to me through{" "}
                            <span className="text-accent">mail/discord</span>. I
                            will always try to respond.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                aria-label="mail"
                                href="mailto:dominiksieron13@gmail.com"
                                className="ml-4 flex justify-center rounded-md bg-primary-button p-2 px-4 text-background shadow-sm shadow-primary-button transition-all ease-in-out hover:shadow-md hover:shadow-primary-button"
                            >
                                <IconMail />
                            </Link>
                            <Link
                                aria-label="discord"
                                href={
                                    "https://discord.com/users/320254777160368139"
                                }
                                target="about:blank"
                                className="ml-4 flex justify-center rounded-md bg-secondary-button p-2 px-4 text-background shadow-sm shadow-secondary-button transition-all ease-in-out hover:shadow-md hover:shadow-secondary-button"
                            >
                                <IconBrandDiscord />
                            </Link>
                        </div>
                    </div>
                </section>
                <footer className="flex min-h-[100px] flex-col items-center justify-center space-y-2 border-t border-accent text-text">
                    <div className="flex space-x-4 md:hidden">
                        <Link
                            aria-label="github profile link"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                            href={"https://github.com/CALLmeDOMIN"}
                        >
                            <IconBrandGithub />
                        </Link>
                        <Link
                            aria-label="linkedin profile link"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                            href={"https://www.linkedin.com/in/dominiksieron/"}
                        >
                            <IconBrandLinkedin />
                        </Link>
                    </div>
                    <h1 className="md:text-lg">
                        Designed and developed by{" "}
                        <span className="text-accent">Dominik Sieroń</span>
                    </h1>
                </footer>
            </div>
        </>
    );
}
