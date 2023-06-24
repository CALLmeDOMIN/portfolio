import {
    IconAddressBook,
    IconArrowNarrowRight,
    IconBrandCpp,
    IconBrandCss3,
    IconBrandGit,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandLinkedin,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandSass,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVercel,
    IconCertificate,
    IconCode,
    IconSql,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="bg-slate-900">
                <div className="font-Poppins scrollbar">
                    <div className="hidden fixed w-24 h-screen md:flex items-center left-auto right-0 md:right-5 text-white ">
                        <ul className="w-full flex flex-col items-center space-y-4 after:block after:w-0.5 after:h-24 after:mx-auto after:my-4 after:bg-[#ff6ec7] before:block before:w-0.5 before:h-24 before:mx-auto before:my-4 before:bg-[#ff6ec7]">
                            <li className="transition-all duration-300 hover:-translate-y-1">
                                <Link
                                    target="_blank"
                                    className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5"
                                    href={"https://github.com/CALLmeDOMIN"}
                                >
                                    <IconBrandGithub />
                                </Link>
                            </li>
                            <li className="transition-all duration-300 hover:-translate-y-1">
                                <Link
                                    target="_blank"
                                    className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5"
                                    href={
                                        "https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b/"
                                    }
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
                            <h2 className="text-3xl text-gray-300 font-extralight">
                                Hi, my name is
                            </h2>
                            <h1 className="-ml-1 text-7xl text-[#ff6ec7] font-semibold">
                                Dominik Sieroń.
                            </h1>
                            <p className="w-5/6 text-gray-300 text-xl pl-2 pb-2 mt-4">
                                I am software engineer with a passion for{" "}
                                <span className="text-pink-400">
                                    web development
                                </span>
                                . Currently studying Computer Science in
                                Engineering at{" "}
                                <span className="text-pink-400">
                                    AGH University of Science and Technology
                                </span>
                                .
                            </p>
                            <Link href={"/CV_1-7.pdf"} target="_blank">
                                <button className="sm:w-1/3 min-w-min mt-8 py-4 px-8 bg-transparent text-xl font-semibold text-pink-400 border border-pink-400 rounded-xl transition-all duration-500 hover:bg-pink-400/20">
                                    Check out my CV!
                                </button>
                            </Link>
                        </section>
                        <section
                            id="about"
                            className="min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28  transition-all duration-[1250ms]"
                        >
                            <div className="flex">
                                <IconUser className="w-12 h-12 text-gray-300 mr-2" />
                                <h2 className="text-5xl font-bold mb-4 text-gray-300">
                                    About me
                                </h2>
                            </div>
                            <div className="md:w-5/6 text-justify">
                                <p className=" md:text-xl font-light transition-all duration-500 hover:border-white border-l pl-2 border-pink-400 text-gray-300 mb-4">
                                    I graduated from
                                    <span className="text-pink-400">
                                        VI Liceum Ogólnokształcące im. Jana
                                        Kochanowskiego
                                    </span>
                                    in Radom, Poland and now I am a student at
                                    AGH University of Science and Technology. My
                                    field of study (
                                    <span className="text-pink-400">
                                        Computer Science in Engineering
                                    </span>
                                    ) helps me to develop my technical skills
                                    and gain knowledge.
                                </p>
                                <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l pl-2 border-pink-400 text-gray-300 mb-4">
                                    I am also interested in web development and
                                    I am currently learning{" "}
                                    <span className="text-pink-400">J</span>s,{" "}
                                    <span className="text-pink-400">T</span>s,{" "}
                                    <span className="text-pink-400">R</span>
                                    eact,{" "}
                                    <span className="text-pink-400">N</span>
                                    ext.js,{" "}
                                    <span className="text-pink-400">t</span>
                                    ailwindcss and other technologies.
                                </p>
                                <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l border-pink-400 pl-2 text-gray-300 mb-4">
                                    In addition to my technical skills, I
                                    possess excellent problem-solving abilities,
                                    strong communication skills, and a
                                    collaborative approach to teamwork. Please
                                    feel free to browse my{" "}
                                    <span className="text-pink-400">
                                        portfolio
                                    </span>{" "}
                                    to see some of my coding projects and learn
                                    more about me.
                                </p>
                                <div className="transition-all duration-500 hover:border-white flex justify-center md:justify-start space-x-2 text-white border-b border-l border-pink-400 p-4 md:w-1/2">
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
                            id="portfolio"
                            className="my-0 mx-auto py-48  transition-all duration-[1250ms]"
                        >
                            <div className="flex">
                                <IconCode className="w-12 h-12 text-gray-300 mr-2" />
                                <h2 className="text-5xl font-bold mb-4 text-gray-300">
                                    Projects
                                </h2>
                            </div>
                            <h2 className="pl-4 flex items-center text-3xl font-semibold py-4 text-gray-300">
                                {" "}
                                <IconArrowNarrowRight className="mx-2 text-pink-400" />{" "}
                                mytriproutes
                            </h2>
                            <div className="px-8">
                                <p className="text-gray-300">
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
                                    target="_blank"
                                    className="text-pink-400"
                                    href={"https://mytriproutes.com"}
                                >
                                    Look up
                                </Link>
                            </div>
                            <h2 className="pl-4 flex items-center text-3xl font-semibold py-4 text-gray-300">
                                {" "}
                                <IconArrowNarrowRight className="mx-2 text-pink-400" />{" "}
                                Frontend Mentor
                            </h2>
                            <div className="pr-16 pl-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 transition-all duration-1000 odd:delay-300 even:delay-700">
                                <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/tipcalc.jpg')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
                                    <Link
                                        href={
                                            "https://github.com/CALLmeDOMIN/tip-calculator"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandGithub />
                                    </Link>
                                    <Link
                                        href={
                                            "https://tip-calculator-dominiksieron.vercel.app/"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandVercel />
                                    </Link>
                                    <IconBrandReact className="ml-auto" />
                                    <IconBrandTailwind />
                                </div>
                                <div
                                    className={`text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/summarycomponent.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40 delay-300`}
                                >
                                    <Link
                                        href={
                                            "https://github.com/CALLmeDOMIN/summary-component"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandGithub />
                                    </Link>
                                    <Link
                                        href={
                                            "https://summarycomponent-dominiksieron.vercel.app"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandVercel />
                                    </Link>
                                    <IconBrandHtml5 className="ml-auto" />
                                    <IconBrandTailwind />
                                </div>
                                <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/previewcard.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40 delay-1000">
                                    <Link
                                        href={
                                            "https://github.com/CALLmeDOMIN/preview-card"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandGithub />
                                    </Link>
                                    <Link
                                        href={
                                            "https://previewcard-dominiksieron.vercel.app"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandVercel />
                                    </Link>
                                    <IconBrandReact className="ml-auto" />
                                    <IconBrandTailwind />
                                </div>
                                <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/qrcode.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
                                    <Link
                                        href={
                                            "https://github.com/CALLmeDOMIN/qrcode"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandGithub />
                                    </Link>
                                    <Link
                                        href={
                                            "https://qrcode-dominiksieron.vercel.app/"
                                        }
                                        target="_blank"
                                    >
                                        <IconBrandVercel />
                                    </Link>
                                    <IconBrandHtml5 className="ml-auto" />
                                    <IconBrandTailwind />
                                </div>
                            </div>
                            {/* <Link className="m-4 text-pink-400" href={''}>More</Link> */}
                        </section>
                        <section
                            id="certificates"
                            className="min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28  transition-all duration-[1250ms]"
                        >
                            <div className="flex">
                                <IconCertificate className="w-12 h-12 text-gray-300 mr-2" />
                                <h2 className="text-5xl font-bold mb-4 text-gray-300">
                                    Certificates
                                </h2>
                            </div>
                            <div className="md:w-5/6 text-justify pl-2 border-l border-pink-400 hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-500 text-gray-300 mb-4">
                                    JavaScript Algorithms and Data Structures by
                                    freeCodeCamp.org
                                </p>
                                <p className=" md:text-md font-light transition-all duration-500 text-gray-300 mb-4 pl-4">
                                    Developer Certification, representing
                                    approximately 300 hours of coursework.
                                </p>
                                <Link
                                    target="_blank"
                                    className="text-pink-400 pl-4"
                                    href={
                                        "https://www.freecodecamp.org/certification/CALLmeDOMIN/javascript-algorithms-and-data-structures"
                                    }
                                >
                                    Look up
                                </Link>
                            </div>

                            <div className="md:w-5/6 mt-4 text-justify pl-2 border-l border-pink-400 hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-500 text-gray-300 mb-4">
                                    SQL Essential Training by Linkedin
                                </p>
                                <p className=" md:text-md font-light transition-all duration-500 text-gray-300 mb-4 pl-4">
                                    Developer Certification, representing
                                    knowledge of SQL/SQLite language.
                                </p>
                                <Link
                                    target="_blank"
                                    className="text-pink-400 pl-4"
                                    href={
                                        "https://www.linkedin.com/learning/certificates/d9ee88b0d34eaafa1c30d8a5b86aa07bfbf73956f5c1cfa8ac397fcc70f7f317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPXoqZb2MSw6qBkVaX6Qnrg%3D%3D"
                                    }
                                >
                                    Look up
                                </Link>
                            </div>
                        </section>
                        <section
                            id="contact"
                            className="flex flex-col space-y-4 min-h-[800px] py-28 mx-auto my-0 max-w-5xl  md:pr-10 text-gray-300 w-full  transition-all duration-[1250ms] odd:delay-300 even:delay-700"
                        >
                            <div className="flex">
                                <IconAddressBook className="w-12 h-12 text-gray-300 mr-2" />
                                <h2 className="text-5xl font-bold mb-4 text-gray-300">
                                    Contact me
                                </h2>
                            </div>
                            <div className=" pl-2 border-l border-pink-400 hover:border-white">
                                <p className=" md:text-xl font-light transition-all duration-500 text-gray-300 mb-4">
                                    You can write to me through{" "}
                                    <span className="text-pink-400">
                                        mail/discord
                                    </span>
                                    . I will always try to respond.
                                </p>
                                <div className="flex flex-col pl-4 space-y-2">
                                    <Link
                                        href={
                                            "mailto:dominiksieron13@gmail.com"
                                        }
                                        className="text-pink-400"
                                    >
                                        Mail me!
                                    </Link>
                                    <Link
                                        href={
                                            "https://discord.com/users/320254777160368139"
                                        }
                                        target="_blank"
                                        className="text-pink-400"
                                    >
                                        Discord
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <footer className="text-gray-300 flex flex-col space-y-2 items-center justify-center min-h-[100px] border-t border-pink-400">
                            <div className="md:hidden flex space-x-4">
                                <Link
                                    className="hover:text-pink-400 transition-all duration-500 hover:-translate-y-1"
                                    href={"https://github.com/CALLmeDOMIN"}
                                >
                                    <IconBrandGithub />
                                </Link>
                                <Link
                                    className="hover:text-pink-400 transition-all duration-500 hover:-translate-y-1"
                                    href={
                                        "https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b"
                                    }
                                >
                                    <IconBrandLinkedin />
                                </Link>
                            </div>
                            <h1 className="text-lg">
                                Designed and developed by{" "}
                                <span className="text-pink-400">
                                    Dominik Sieroń
                                </span>
                            </h1>
                        </footer>
                    </main>
                </div>
            </div>
        </>
    );
}
