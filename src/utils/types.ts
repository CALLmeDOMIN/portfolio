export type Experience = {
    title: string
    sub: string
    desc: string
    date: string
    link: string
    imageUrl: string
    technologies: Technology[]
}

type Technology = {
    name: string
    icon: React.ReactNode
}
