export type Experience = {
    title: string
    sub: string
    desc: string
    date: string
    link: string
    imageUrl: string
    technologies: Technology[]
}

export type Project = {
    title: string
    desc: string
    link: string
    githubLink: string
    imageUrl: string
    isWorkInProgress: boolean
    technologies: Technology[]
    align: "left" | "right"
}

type Technology = {
    name: string
    content: string
    icon: React.ReactNode
}
