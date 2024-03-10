import {
    IconBrandGithub,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandVercel,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const FrontendMentor = ({
    image,
    github,
    vercel,
    alt,
    whiteText,
}: {
    image: string
    github: string
    vercel: string
    alt: string
    whiteText?: boolean
}) => {
    return (
        <div className="relative max-w-xs max-h-44">
            <Image
                className="max-w-xs max-h-44 transform hover:scale-105 ease-in-out transition-all duration-300 aspect-video rounded-xl"
                src={image}
                alt={alt}
                width={320}
                height={176}
            />

            <Link
                passHref
                href={github}
                target="_blank"
                className={
                    "absolute bottom-1 left-2" +
                    (whiteText ? " text-text" : " text-secondary")
                }
            >
                <IconBrandGithub aria-label="github" />
            </Link>
            <Link
                passHref
                href={vercel}
                target="_blank"
                className={
                    "absolute bottom-1 left-9" +
                    (whiteText ? " text-text" : " text-secondary")
                }
            >
                <IconBrandVercel aria-label="vercel" />
            </Link>
            <IconBrandReact
                className={
                    "absolute top-1 right-2" +
                    (whiteText ? " text-text" : " text-secondary")
                }
                aria-label="react"
            />
            <IconBrandTailwind
                className={
                    "absolute top-1 right-9" +
                    (whiteText ? " text-text" : " text-secondary")
                }
                aria-label="tailwindcss"
            />
        </div>
    )
}

export default FrontendMentor
