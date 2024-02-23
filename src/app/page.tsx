import {
    IconAddressBook,
    IconAlertTriangle,
    IconArrowUpRight,
    IconBrandDiscord,
    IconBrandDjango,
    IconBrandFirefox,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVercel,
    IconCode,
    IconMail,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import FrontendMentor from "./components/Frontendmentor"
import { IconBrandStripe } from "@tabler/icons-react"

export default function Home() {
    return (
        <>
            <div className="mt-14 font-Poppins">
                <main
                    id="home"
                    className="mx-auto px-4 flex min-h-screen max-w-5xl flex-col justify-center"
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
                            AGH University of Cracow
                        </span>
                        .
                    </p>
                    <div className="flex items-center gap-2 pl-2">
                        <div className="h-0.5 w-4 bg-accent"></div>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent"
                            href="https://github.com/CALLmeDOMIN"
                            aria-label="Github profile link"
                        >
                            <IconBrandGithub size={24} />
                        </Link>
                        <div className="h-0.5 w-0.5 bg-accent"></div>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent"
                            href="https://www.linkedin.com/in/dominiksieron/"
                            aria-label="Linkedin profile link"
                        >
                            <IconBrandLinkedin size={24} />
                        </Link>
                        <div className="h-0.5 w-0.5 bg-accent"></div>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
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
                        <div className="h-0.5 w-[40%] bg-accent"></div>
                    </div>
                </main>
                <section
                    id="experience"
                    className="bg-accent text-background px-4"
                ></section>
                <section id="projects" className="px-4">
                    <div className="max-w-7xl mx-auto py-14 space-y-10">
                        <div className="flex justify-end ">
                            <h2 className="text-5xl font-bold">Projects</h2>
                            <IconCode className="mr-2 h-12 w-12 " />
                        </div>
                        <div>
                            <h2 className="flex items-center mb-4 text-3xl font-semibold pl-4">
                                Car rental
                            </h2>
                            <div className="flex flex-col gap-2 md:flex-row">
                                <Link
                                    className="md:w-1/2 md:flex md:items-center"
                                    href={"https://carrental.dsieron.pl"}
                                    aria-label="Mytriproutes preview and link"
                                >
                                    <Image
                                        src={"/car-rental.png"}
                                        alt="car rental project"
                                        width={1920}
                                        height={1080}
                                        className="rounded-xl shadow-md object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                                    />
                                </Link>
                                <div className="flex flex-col gap-2 md:w-1/2">
                                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                                        <div className="h-0.5 w-[5%] bg-background"></div>
                                        <IconBrandNextjs aria-label="Nextjs" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandReact aria-label="React" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandTypescript aria-label="TypeScript" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandTailwind aria-label="Tailwindcss" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandPrisma aria-label="Prisma" />
                                        <div className="grow h-0.5 bg-background"></div>
                                    </div>
                                    <div className="flex justify-center gap-2 text-orange-400 bg-background py-2 mx-8 rounded-md">
                                        <IconAlertTriangle aria-label="warning" />
                                        <h1>Work in progress</h1>
                                    </div>
                                    <p className="grow px-10 text-xl font-medium">
                                        Project is a car rental website. It
                                        symulates a car rental company. The
                                        intention is to learn web development,
                                        new technologies and build a fully
                                        functional site. It is a work in
                                        progress and will be updated with new
                                        features, since its purpose is to learn
                                        newest things in practice.
                                    </p>
                                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                                        <Link
                                            aria-label="Github repository"
                                            href={
                                                "https://github.com/CALLmeDOMIN/car-rental"
                                            }
                                        >
                                            <IconBrandGithub />
                                        </Link>
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <Link
                                            aria-label="Vercel deployment"
                                            href={
                                                "https://carrental.dsieron.pl"
                                            }
                                        >
                                            <IconBrandVercel />
                                        </Link>
                                        <div className="grow h-0.5 bg-background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-8 md:my-16">
                            <h2 className="flex items-center mb-4 text-3xl font-semibold pl-4">
                                mytriproutes
                            </h2>
                            <div className="flex flex-col gap-2 md:flex-row">
                                <div className="flex flex-col gap-2 md:w-1/2">
                                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                                        <div className="grow h-0.5 bg-background"></div>
                                        <IconBrandNextjs aria-label="Nextjs" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandReact aria-label="React" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandTypescript aria-label="TypeScript" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandTailwind aria-label="Tailwindcss" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandDjango aria-label="Django" />
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <IconBrandStripe aria-label="Stripe" />
                                        <div className="h-0.5 w-[5%] bg-background"></div>
                                    </div>
                                    <div className="flex justify-center gap-2 text-orange-400 bg-background py-2 mx-8 rounded-md">
                                        <IconAlertTriangle aria-label="warning" />
                                        <h1>Work in progress</h1>
                                    </div>
                                    <p className="grow px-10 text-xl font-medium">
                                        As part of a small team of two, I was
                                        responsible for frontend development and
                                        design in the mytriproutes project. We
                                        had specific technical goals in mind
                                        throughout the project, with a focus on
                                        providing users with an intuitive
                                        interface and ensuring high website
                                        performance. Overall, MyTripRoutes
                                        simplifies trip planning, sharing, and
                                        the storage of photos and routes in a
                                        user-friendly interface.
                                    </p>
                                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                                        <div className="grow h-0.5 bg-background"></div>
                                        <Link
                                            aria-label="Github repository"
                                            href={
                                                "https://github.com/mytriproutes"
                                            }
                                        >
                                            <IconBrandGithub />
                                        </Link>
                                        <div className="h-0.5 w-0.5 bg-background"></div>
                                        <Link
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={"https://mytriproutes.com"}
                                            aria-label="Mytriproutes link"
                                        >
                                            <IconBrandFirefox />
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    className="md:w-1/2 md:flex md:items-center"
                                    href={"https://mytriproutes.com"}
                                    aria-label="Mytriproutes preview and link"
                                >
                                    <Image
                                        src={"/mytriproutes.png"}
                                        alt="Mytriproutes"
                                        width={1920}
                                        height={1080}
                                        className="rounded-xl shadow-md object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                                    />
                                </Link>
                            </div>
                        </div>
                        <h2 className="flex items-center justify-center py-4 text-3xl font-semibold">
                            Frontend Mentor
                            <Link
                                href={"https://www.frontendmentor.io/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pl-4 text-background"
                            >
                                <IconArrowUpRight />
                            </Link>
                        </h2>
                        <div className="mb-4 grid gap-4 place-items-center transition-all duration-1000 odd:delay-300 even:delay-700 sm:grid-cols-2 lg:grid-cols-3">
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
                        <IconAddressBook className="mr-2 h-12 w-12" />
                        <h2 className="mb-4 text-5xl font-bold">Contact me</h2>
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
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 flex justify-center rounded-md bg-secondary-button p-2 px-4 text-background shadow-sm shadow-secondary-button transition-all ease-in-out hover:shadow-md hover:shadow-secondary-button"
                            >
                                <IconBrandDiscord />
                            </Link>
                        </div>
                    </div>
                </section>
                <footer className="flex min-h-[100px] flex-col items-center justify-center space-y-2 border-t border-accent">
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
    )
}
