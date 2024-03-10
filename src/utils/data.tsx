import {
    IconBrandBootstrap,
    IconBrandGatsby,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandSass,
    IconBrandTypescript,
} from "@tabler/icons-react"
import { type Experience } from "./types"

export const experienceData: Experience[] = [
    {
        title: "AGH Code Industry",
        sub: "Student Scientific Association",
        desc: "As a dedicated member of the web development team, I actively contribute to the development and maintenance of the Student Scientific Association <strong> AGH Code Industry </strong> website. Utilizing my expertise in Next.js and React, I have significantly enhanced the site&apos;s online presence and improved the user experience. My collaboration with team members has been instrumental in implementing features that align with the organization&apos;s needs, ensuring that the website serves as an effective tool for our community.",
        date: "2023",
        link: "http://coin.agh.edu.pl",
        imageUrl: "/coin.png",
        technologies: [
            {
                name: "Nextjs",
                icon: <IconBrandNextjs aria-label="Nextjs" id="Nextjs" />,
            },
            {
                name: "React",
                icon: <IconBrandReact aria-label="React" id="React" />,
            },
            {
                name: "TypeScript",
                icon: (
                    <IconBrandTypescript
                        aria-label="TypeScript"
                        id="TypeScript"
                    />
                ),
            },
            {
                name: "Sass",
                icon: <IconBrandSass aria-label="Sass" id="Sass" />,
            },
        ],
    },
    {
        title: "Studenckie Koła Naukowe AGH",
        sub: "",
        desc: "As the Webmaster for <strong>SKN AGH</strong>, I play a crucial role in managing and updating the website content for a leading university organization that influences numerous student scientific associations. My responsibilities extend beyond utilizing <strong>Contentful CMS</strong> to ensure the site's content is up-to-date and accessible. I am also tasked with maintaining the website, which is developed using <strong>GatsbyJS</strong> and <strong>React</strong>, thereby guaranteeing optimal performance and user experience. My contributions are instrumental in facilitating effective communication and engagement among the student community, thereby fostering a sense of connection and collaboration within the university.",
        date: "2024",
        link: "https://skn.agh.edu.pl",
        imageUrl: "/skn.svg",
        technologies: [
            {
                name: "Gatsbyjs",
                icon: <IconBrandGatsby aria-label="Gatsbyjs" id="Gatsbyjs" />,
            },
            {
                name: "React",
                icon: <IconBrandReact aria-label="React" id="React" />,
            },
            {
                name: "JavaScript",
                icon: (
                    <IconBrandJavascript
                        aria-label="JavaScript"
                        id="JavaScript"
                    />
                ),
            },
            {
                name: "Sass",
                icon: <IconBrandSass aria-label="Sass" id="Sass" />,
            },
            {
                name: "Bootstrap",
                icon: (
                    <IconBrandBootstrap aria-label="Bootstrap" id="Bootstrap" />
                ),
            },
        ],
    },
]
