import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
    IconAlertTriangle,
    IconBrandChrome,
    IconBrandGithub,
} from "@tabler/icons-react"
import { type Project } from "@/utils/types"
import TechTooltip from "./TechTooltip"

const Project = ({
    title,
    desc,
    link,
    githubLink,
    imageUrl,
    isWorkInProgress,
    technologies,
    align,
}: Project) => {
    return (
        <div className="my-8 md:my-16">
            <h2 className="mb-4 text-3xl font-semibold pl-4">{title}</h2>
            <div className="flex flex-col gap-2 md:flex-row">
                {align === "left" && (
                    <Link
                        className="md:w-1/2 md:flex md:items-center relative aspect-video"
                        href={link}
                        target="_blank"
                        aria-label={title}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-xl shadow-md object-cover md:object-contain lg:object-cover  hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                )}
                <div className="flex flex-col gap-2 md:w-1/2">
                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                        <div
                            className={`h-0.5 w-0.5 bg-secondary ${align === "right" ? "grow" : "w-[5%]"}`}
                        />
                        {technologies.map((tech, index) => (
                            <React.Fragment key={index}>
                                <TechTooltip name={tech.name} isAccent>
                                    {tech.icon}
                                </TechTooltip>
                                <div
                                    className={`h-0.5 w-0.5 bg-secondary ${index === technologies.length - 1 ? "hidden" : ""}`}
                                />
                            </React.Fragment>
                        ))}
                        <div
                            className={`h-0.5 w-0.5 bg-secondary ${align === "left" ? "grow" : "w-[5%]"}`}
                        />
                    </div>
                    {isWorkInProgress && (
                        <div className="flex justify-center gap-2 text-orange-400 border-2 border-primary py-2 mx-8 rounded-md">
                            <IconAlertTriangle aria-label="warning" />
                            <h3>Work in progress</h3>
                        </div>
                    )}
                    <p className="grow px-10 text-xl font-medium">{desc}</p>
                    <div className="my-4 flex items-center gap-2 px-4 pr-6">
                        <div
                            className={`h-0.5 w-0.5 bg-secondary ${align === "right" ? "grow" : "hidden"}`}
                        />
                        <Link
                            aria-label="Github repository"
                            href={githubLink}
                            target="_blank"
                        >
                            <IconBrandGithub />
                        </Link>
                        <div className="h-0.5 w-0.5 bg-secondary" />
                        <Link
                            aria-label="Deployment"
                            href={link}
                            target="_blank"
                        >
                            <IconBrandChrome />
                        </Link>
                        <div
                            className={`h-0.5 w-0.5 bg-secondary ${align === "left" ? "grow" : "hidden"}`}
                        />
                    </div>
                </div>
                {align === "right" && (
                    <Link
                        className="md:w-1/2 md:flex md:items-center relative aspect-video"
                        href={link}
                        target="_blank"
                        aria-label={title}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-xl shadow-md object-cover md:object-contain lg:object-cover  hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Project
