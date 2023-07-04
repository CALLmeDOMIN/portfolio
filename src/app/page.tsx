import FrontendMentor from "@/components/frontendmentor";
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
    IconCertificate,
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
            <div className="font-Poppins scrollbar mt-14">
                <div className="hidden fixed w-24 h-screen md:flex items-center left-auto right-0 md:right-5 text-white ">
                    <ul className="w-full flex flex-col items-center after:block after:w-0.5 after:h-24 after:mx-auto after:my-1 after:bg-accent before:block before:w-0.5 before:h-24 before:mx-auto before:my-1 before:bg-accent">
                        <li className="transition-all duration-300 hover:-translate-y-1 ease-in-out">
                            <Link
                                target="about:blank"
                                className="w-6 h-6 p-1 hover:text-accent hover:mb-5"
                                href={"https://github.com/CALLmeDOMIN"}
                                aria-label="Github profile link"
                            >
                                <IconBrandGithub />
                            </Link>
                        </li>
                        <li className="transition-all duration-300 hover:-translate-y-1 ease-in-out">
                            <Link
                                target="about:blank"
                                className="w-6 h-6 p-1 hover:text-accent hover:mb-5"
                                href={
                                    "https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b/"
                                }
                                aria-label="Linkedin profile link"
                            >
                                <IconBrandLinkedin />
                            </Link>
                        </li>
                    </ul>
                </div>
                <main className="px-6 md:px-12 lg:px-24 xl:px-36 py-0 my-0 mx-auto max-w-[1600px]">
                    <section
                        id="home"
                        className="flex flex-col justify-center min-h-screen max-w-5xl mx-auto my-0 transition-all duration-[1250ms]"
                    >
                        <h2 className="text-3xl text-text font-extralight">
                            Hi, my name is
                        </h2>
                        <h1 className="-ml-1 text-7xl text-accent font-semibold">
                            Dominik Sieroń.
                        </h1>
                        <p className="w-5/6 text-text text-xl pl-2 pb-2 mt-4">
                            I am software engineer with a passion for{" "}
                            <span className="text-accent">web development</span>
                            . Currently studying Computer Science in Engineering
                            at{" "}
                            <span className="text-accent">
                                AGH University of Science and Technology
                            </span>
                            .
                        </p>
                        <Link
                            href={"/DominikSieronCV.pdf"}
                            target="about:blank"
                            className="sm:w-1/3 text-center min-w-min mt-8 py-4 px-8 text-xl font-semibold text-background bg-primary-button shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button rounded-xl transition-all duration-300"
                            aria-label="CV link"
                        >
                            <button>Check out my CV!</button>
                        </Link>
                    </section>
                    <section
                        id="about"
                        className="min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28  transition-all duration-[1250ms]"
                    >
                        <div className="flex">
                            <IconUser className="w-12 h-12 text-text mr-2" />
                            <h2 className="text-5xl font-bold mb-4 text-text">
                                About me
                            </h2>
                        </div>
                        <div className="md:w-5/6 text-justify">
                            <p className="md:text-xl font-light transition-all duration-300 hover:border-text border-l pl-2 border-accent text-text mb-4">
                                I graduated from{" "}
                                <span className="text-accent">
                                    VI Liceum Ogólnokształcące im. Jana
                                    Kochanowskiego
                                </span>{" "}
                                in Radom, Poland and now I am a student at AGH
                                University of Science and Technology. My field
                                of study{" "}
                                <span className="text-accent">
                                    Computer Science in Engineering
                                </span>{" "}
                                helps me to develop my technical skills and gain
                                knowledge.
                            </p>
                            <p className="transition-all duration-300 hover:border-text md:text-xl font-light border-l pl-2 border-accent text-text mb-4">
                                I am also interested in web development and I am
                                currently learning{" "}
                                <span className="text-accent">J</span>
                                avaScript,{" "}
                                <span className="text-accent">T</span>
                                ypeScript,{" "}
                                <span className="text-accent">R</span>
                                eact, <span className="text-accent">N</span>
                                ext.js, <span className="text-accent">T</span>
                                ailwindcss and other technologies.
                            </p>
                            <p className="transition-all duration-300 hover:border-white md:text-xl font-light border-l border-accent pl-2 text-text mb-4">
                                In addition to my technical skills, I possess
                                excellent problem-solving abilities, strong
                                communication skills, and a collaborative
                                approach to teamwork. Please feel free to browse
                                my portfolio to see some of my coding projects
                                and learn more about me.
                            </p>
                            <div className="transition-all duration-300 hover:border-text flex justify-center md:justify-start space-x-2 text-text border-b border-l border-accent p-4 md:w-1/2">
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
                            <IconCode className="w-12 h-12 text-text mr-2" />
                            <h2 className="text-5xl font-bold mb-4 text-text">
                                Projects
                            </h2>
                        </div>

                        <div>
                            <h2 className="pl-2 flex items-center text-3xl font-semibold py-4 text-text">
                                <IconArrowNarrowRight className="mx-2 text-accent" />
                                Car rental
                            </h2>
                            <div className="flex md:flex-row flex-col gap-2">
                                <div className="md:w-1/2 flex flex-col gap-2">
                                    <div className="flex justify-center gap-2 text-orange-400">
                                        <IconAlertTriangle aria-label="warning" />
                                        <h1>Work in progress</h1>
                                    </div>
                                    <p className="px-4 grow">
                                        Project is a car rental website. It
                                        symulates a car rental company. The
                                        intention is to learn web development,
                                        new technologies and build a fully
                                        functional site. It is a work in
                                        progress and will be updated with new
                                        features, since its purpose is to learn
                                        newest things in practice.
                                    </p>
                                    <div className="flex gap-2 px-4 pr-6 my-4">
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
                                    className="md:w-1/2 rounded-xl shadow-md shadow-text/30"
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
                            <h2 className="pl-2 flex items-center text-3xl font-semibold py-4 text-text">
                                <IconArrowNarrowRight className="mx-2 text-accent" />
                                mytriproutes
                            </h2>
                            <div className="flex md:flex-row flex-col gap-2">
                                <div className="md:w-1/2 flex flex-col gap-2 items-center md:items-start">
                                    <div className="flex w-full items-center justify-center gap-2 text-orange-400">
                                        <IconAlertTriangle aria-label="warning" />
                                        <h1>Work in progress</h1>
                                    </div>
                                    <p className="px-4 grow">
                                        As part of a small team of three, I was
                                        responsible for frontend development and
                                        design in the mytriproutes project. I
                                        utilized various tools and technologies,
                                        including React, Typescript, and SCSS,
                                        and later migrated the project to
                                        Tailwindcss. Our team had specific
                                        business and technical goals in mind
                                        throughout the project, with a focus on
                                        providing users with an intuitive
                                        interface and ensuring high website
                                        performance. We successfully created an
                                        intuitive user interface, and the
                                        website functions quickly and smoothly.
                                        Overall, MyTripRoutes benefits users by
                                        making it easier for them to plan and
                                        share their trips, and store their
                                        photos and routes in a user-friendly
                                        way. A preview of the project is
                                        available at the link below (website may
                                        be under maintenance sometimes).
                                    </p>
                                    <Link
                                        target="about:blank"
                                        className="text-background md:ml-4 shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button bg-primary-button font-semibold flex items-center p-2 w-28 rounded-md"
                                        href={"https://mytriproutes.com"}
                                        aria-label="Mytriproutes link"
                                    >
                                        <button className="grow">
                                            Look Up
                                        </button>
                                        <IconArrowUpRight />
                                    </Link>
                                </div>
                                <Link
                                    className="md:w-1/2 rounded-xl max-h-[300px] shadow-md shadow-text/30"
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
                        <h2 className="pl-2 flex items-center text-3xl font-semibold py-4 text-text">
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
                        <div className="px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 transition-all duration-1000 odd:delay-300 even:delay-700">
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
                        <Link
                            className="m-4 text-accent"
                            href={"/frontendmentor"}
                        >
                            <button>More</button>
                        </Link>
                    </section>
                    <section
                        id="certificates"
                        className="min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28  transition-all duration-[1250ms]"
                    >
                        <div className="flex">
                            <IconCertificate className="w-12 h-12 text-text mr-2" />
                            <h2 className="text-5xl font-bold mb-4 text-text">
                                Certificates
                            </h2>
                        </div>
                        <div className="md:w-5/6 ">
                            <div className="text-justify pl-2 border-l border-accent hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-300 text-text mb-4">
                                    JavaScript Algorithms and Data Structures by
                                    freeCodeCamp.org
                                </p>
                                <p className=" md:text-md font-light transition-all duration-300 text-text mb-4 pl-4">
                                    Developer Certification, representing
                                    approximately 300 hours of coursework.
                                </p>
                            </div>
                            <Link
                                target="about:blank"
                                className="text-background shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button bg-primary-button font-semibold flex items-center p-2 w-28 rounded-md"
                                href={
                                    "https://www.freecodecamp.org/certification/CALLmeDOMIN/javascript-algorithms-and-data-structures"
                                }
                                aria-label="FreeCodeCamp JavaScript certificate link"
                            >
                                <button className="grow">Look Up</button>
                                <IconArrowUpRight />
                            </Link>
                        </div>

                        <div className="md:w-5/6 mt-4 ">
                            <div className="text-justify pl-2 border-l border-accent hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-300 text-text mb-4">
                                    SQL Essential Training by Linkedin
                                </p>
                                <p className=" md:text-md font-light transition-all duration-300 text-text mb-4 pl-4">
                                    Developer Certification, representing
                                    knowledge of SQL/SQLite language.
                                </p>
                            </div>
                            <Link
                                target="about:blank"
                                className="text-background bg-secondary-button shadow-sm shadow-secondary-button hover:shadow-md hover:shadow-secondary-button transition-all ease-in-out font-semibold flex items-center p-2 w-28 rounded-md"
                                href={
                                    "https://www.linkedin.com/learning/certificates/d9ee88b0d34eaafa1c30d8a5b86aa07bfbf73956f5c1cfa8ac397fcc70f7f317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPXoqZb2MSw6qBkVaX6Qnrg%3D%3D"
                                }
                                aria-label="Linkedin SQL certificate link"
                            >
                                <button className="grow">Look Up</button>
                                <IconArrowUpRight />
                            </Link>
                        </div>

                        <div className="md:w-5/6 mt-4 ">
                            <div className="text-justify pl-2 border-l border-accent hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-300 text-text mb-4">
                                    TypeScript Essential Training by Linkedin
                                </p>
                                <p className=" md:text-md font-light transition-all duration-300 text-text mb-4 pl-4">
                                    Developer Certification, representing
                                    knowledge of Typescript language.
                                </p>
                            </div>
                            <Link
                                target="about:blank"
                                className="text-background bg-primary-button shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button transition-all ease-in-out font-semibold flex items-center p-2 w-28 rounded-md"
                                href={
                                    "https://www.linkedin.com/learning/certificates/6e0410f3fb9da1a3fe38c9ad0ca2a1affcd0af36d046d05da07e71597cebd329"
                                }
                                aria-label="Linkedin SQL certificate link"
                            >
                                <button className="grow">Look Up</button>
                                <IconArrowUpRight />
                            </Link>
                        </div>
                    </section>
                    <section
                        id="contact"
                        className="flex flex-col space-y-4 min-h-[800px] py-28 mx-auto my-0 max-w-5xl  md:pr-10 text-text w-full  transition-all duration-[1250ms] odd:delay-300 even:delay-700"
                    >
                        <div className="flex">
                            <IconAddressBook className="w-12 h-12 text-text mr-2" />
                            <h2 className="text-5xl font-bold mb-4 text-text">
                                Contact me
                            </h2>
                        </div>
                        <div>
                            <p className="md:text-xl font-light text-center text-text mb-4">
                                You can write to me through{" "}
                                <span className="text-accent">
                                    mail/discord
                                </span>
                                . I will always try to respond.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    aria-label="mail"
                                    href="mailto:dominiksieron13@gmail.com"
                                    className="text-background bg-primary-button shadow-sm shadow-primary-button hover:shadow-md hover:shadow-primary-button transition-all ease-in-out flex justify-center p-2 px-4 rounded-md ml-4"
                                >
                                    <IconMail />
                                </Link>
                                <Link
                                    aria-label="discord"
                                    href={
                                        "https://discord.com/users/320254777160368139"
                                    }
                                    target="about:blank"
                                    className="text-background bg-secondary-button shadow-sm shadow-secondary-button hover:shadow-md hover:shadow-secondary-button transition-all ease-in-out flex justify-center p-2 px-4 rounded-md ml-4"
                                >
                                    <IconBrandDiscord />
                                </Link>
                            </div>
                        </div>
                    </section>
                    <footer className="text-text flex flex-col space-y-2 items-center justify-center min-h-[100px] border-t border-accent">
                        <div className="md:hidden flex space-x-4">
                            <Link
                                aria-label="github profile link"
                                className="hover:text-accent transition-all duration-300 hover:-translate-y-1"
                                href={"https://github.com/CALLmeDOMIN"}
                            >
                                <IconBrandGithub />
                            </Link>
                            <Link
                                aria-label="linkedin profile link"
                                className="hover:text-accent transition-all duration-300 hover:-translate-y-1"
                                href={
                                    "https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b"
                                }
                            >
                                <IconBrandLinkedin />
                            </Link>
                        </div>
                        <h1 className="md:text-lg">
                            Designed and developed by{" "}
                            <span className="text-accent">Dominik Sieroń</span>
                        </h1>
                    </footer>
                </main>
            </div>
        </>
    );
}
