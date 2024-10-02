import {
    IconBrandBootstrap,
    IconBrandDjango,
    IconBrandGatsby,
    IconBrandGolang,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandSass,
    IconBrandStripe,
    IconBrandTailwind,
    IconBrandTypescript,
} from "@tabler/icons-react";
import { type Project, type WorkExperience, type Experience } from "./types";

const experienceData: Experience[] = [
    {
        title: "AGH Code Industry",
        sub: "Student Scientific Association",
        desc: "As a dedicated member of the web development team, I actively contribute to the development and maintenance of the Student Scientific Association <strong> AGH Code Industry </strong> website. Utilizing my expertise in Next.js and React, I have significantly enhanced the site&apos;s online presence and improved the user experience. My collaboration with team members has been instrumental in implementing features that align with the organization&apos;s needs, ensuring that the website serves as an effective tool for our community.",
        dateStart: new Date("2023-10-01"),
        dateEnd: null,
        link: "https://coin.agh.edu.pl",
        imageUrl: "/coin.png",
        technologies: [
            {
                name: "Nextjs",
                content: "Nextjs",
                icon: <IconBrandNextjs aria-label="Nextjs" id="Nextjs" />,
            },
            {
                name: "React",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React" />,
            },
            {
                name: "TypeScript",
                content: "TypeScript",
                icon: (
                    <IconBrandTypescript
                        aria-label="TypeScript"
                        id="TypeScript"
                    />
                ),
            },
            {
                name: "Sass",
                content: "Sass",
                icon: <IconBrandSass aria-label="Sass" id="Sass" />,
            },
        ],
    },
    {
        title: "Studenckie Koła Naukowe AGH",
        sub: "",
        desc: "As the Webmaster for <strong>SKN AGH</strong>, I play a crucial role in managing and updating the website content for a leading university organization that influences numerous student scientific associations. My responsibilities extend beyond utilizing <strong>Contentful CMS</strong> to ensure the site's content is up-to-date and accessible. I am also tasked with maintaining the website, which is developed using <strong>GatsbyJS</strong> and <strong>React</strong>, thereby guaranteeing optimal performance and user experience. My contributions are instrumental in facilitating effective communication and engagement among the student community, thereby fostering a sense of connection and collaboration within the university.",
        dateStart: new Date("2024-01-01"),
        dateEnd: null,
        link: "https://skn.agh.edu.pl",
        imageUrl: "/skn.svg",
        technologies: [
            {
                name: "Gatsbyjs",
                content: "Gatsbyjs",
                icon: <IconBrandGatsby aria-label="Gatsbyjs" id="Gatsbyjs" />,
            },
            {
                name: "React",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React" />,
            },
            {
                name: "JavaScript",
                content: "JavaScript",
                icon: (
                    <IconBrandJavascript
                        aria-label="JavaScript"
                        id="JavaScript"
                    />
                ),
            },
            {
                name: "Sass",
                content: "Sass",
                icon: <IconBrandSass aria-label="Sass" id="Sass" />,
            },
            {
                name: "Bootstrap",
                content: "Bootstrap",
                icon: (
                    <IconBrandBootstrap aria-label="Bootstrap" id="Bootstrap" />
                ),
            },
        ],
    },
];

const projectData: Project[] = [
    {
        title: "UXberries",
        desc: "The project focused on creating a scalable, maintainable codebase that would facilitate future enhancements and integration of new features. The result is a sophisticated platform that not only enhances the association's digital footprint but also serves as a vital resource for student collaboration and scientific discourse",
        link: "https://uxberries.pl",
        githubLink: "https://github.com/CALLmeDOMIN/uxberries",
        imageUrl: "/uxberries.png",
        isWorkInProgress: false,
        technologies: [
            {
                name: "Astro-yellow",
                content: "Astro",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-astro"
                        aria-label="Astro"
                        id="Astro-yellow"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39" />
                        <path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0" />
                    </svg>
                ),
            },
            {
                name: "React-yellow",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React-yellow" />,
            },
            {
                name: "TypeScript-yellow",
                content: "TypeScript",
                icon: (
                    <IconBrandTypescript
                        aria-label="TypeScript"
                        id="TypeScript-yellow"
                    />
                ),
            },
            {
                name: "Tailwindcss-yellow",
                content: "Tailwindcss",
                icon: (
                    <IconBrandTailwind
                        aria-label="Tailwindcss"
                        id="Tailwindcss-yellow"
                    />
                ),
            },
        ],
        align: "left",
    },
    {
        title: "Car rental",
        desc: "Project is a car rental website. It symulates a car rental company. The intention is to learn web development, new technologies and build a fully functional site. It is a work in progress and will be updated with new features, since its purpose is to learn newest things in practice.",
        link: "https://carrental.dsieron.pl",
        githubLink: "https://github.com/CALLmeDOMIN/car-rental",
        imageUrl: "/car-rental.png",
        isWorkInProgress: true,
        technologies: [
            {
                name: "Nextjs-yellow",
                content: "Nextjs",
                icon: (
                    <IconBrandNextjs aria-label="Nextjs" id="Nextjs-yellow" />
                ),
            },
            {
                name: "React-yellow",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React-yellow" />,
            },
            {
                name: "TypeScript-yellow",
                content: "TypeScript",
                icon: (
                    <IconBrandTypescript
                        aria-label="TypeScript"
                        id="TypeScript-yellow"
                    />
                ),
            },
            {
                name: "Tailwindcss-yellow",
                content: "Tailwindcss",
                icon: (
                    <IconBrandTailwind
                        aria-label="Tailwindcss"
                        id="Tailwindcss-yellow"
                    />
                ),
            },
            {
                name: "Prisma-yellow",
                content: "Prisma",
                icon: (
                    <IconBrandPrisma aria-label="Prisma" id="Prisma-yellow" />
                ),
            },
        ],
        align: "right",
    },
    {
        title: "mytriproutes",
        desc: "As part of a small team of two, I was responsible for frontend development and design in the mytriproutes project. We had specific technical goals in mind throughout the project, with a focus on providing users with an intuitive interface and ensuring high website performance. Overall, MyTripRoutes simplifies trip planning, sharing, and the storage of photos and routes in a user-friendly interface.",
        link: "https://mytriproutes.com",
        githubLink: "https://github.com/mytriproutes",
        imageUrl: "/mytriproutes.png",
        isWorkInProgress: true,
        technologies: [
            {
                name: "Nextjs-yellow",
                content: "Nextjs",
                icon: (
                    <IconBrandNextjs aria-label="Nextjs" id="Nextjs-yellow" />
                ),
            },
            {
                name: "React-yellow",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React-yellow" />,
            },
            {
                name: "TypeScript-yellow",
                content: "TypeScript",
                icon: (
                    <IconBrandTypescript
                        aria-label="TypeScript"
                        id="TypeScript-yellow"
                    />
                ),
            },
            {
                name: "Tailwindcss-yellow",
                content: "Tailwindcss",
                icon: (
                    <IconBrandTailwind
                        aria-label="Tailwindcss"
                        id="Tailwindcss-yellow"
                    />
                ),
            },
            {
                name: "Django-yellow",
                content: "Django",
                icon: (
                    <IconBrandDjango aria-label="Django" id="Django-yellow" />
                ),
            },
            {
                name: "Stripe-yellow",
                content: "Stripe",
                icon: (
                    <IconBrandStripe aria-label="Stripe" id="Stripe-yellow" />
                ),
            },
        ],
        align: "left",
    },
];

const workExperienceData: WorkExperience[] = [
    {
        title: "Intern Software Engineer",
        company: "SpotOn",
        dateStart: new Date("2024-07-01"),
        dateEnd: new Date("2024-09-30"),
        bullets: [
            "Contributed to the design and implementation of a new service using Golang and gRPC, with a focus on building scalable and efficient backend solutions.",
            "Developed a migration script for MongoDB, ensuring smooth data transitions and contributing to the overall stability of the database infrastructure.",
            "Worked closely with engineers and other teams to implement service architecture, troubleshoot backend issues, and optimize communication between services.",
            "Worked with GitHub Actions to automate testing and deployment pipelines, streamlining development workflows and improving team efficiency.",
            "Assisted with migrating a service to the company's design system using TypeScript, React, and SCSS, ensuring consistency with the updated UI/UX standards.",
            "Contributed to resolving front-end bugs and improving user experience, aligning front-end components with project goals.",
        ],
        imageUrl: "/spoton.svg",
        link: "https://pl.spoton.com/",
        technologies: [
            {
                name: "Golang",
                content: "Golang",
                icon: <IconBrandGolang aria-label="Golang" id="Golang" />,
            },
            {
                name: "Mongodb",
                content: "Mongodb",
                icon: <IconBrandMongodb aria-label="Mongodb" id="Mongodb" />,
            },
            {
                name: "Typescript",
                content: "Typescript",
                icon: (
                    <IconBrandTypescript
                        aria-label="Typescript"
                        id="Typescript"
                    />
                ),
            },
            {
                name: "React",
                content: "React",
                icon: <IconBrandReact aria-label="React" id="React" />,
            },
            {
                name: "Sass",
                content: "Sass",
                icon: <IconBrandSass aria-label="Sass" id="Sass" />,
            },
        ],
    },
];

export { workExperienceData, projectData, experienceData };
