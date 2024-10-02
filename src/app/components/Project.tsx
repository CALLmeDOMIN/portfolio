import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconAlertTriangle,
    IconBrandChrome,
    IconBrandGithub,
} from "@tabler/icons-react";
import { type Project } from "@/utils/types";
import TechTooltip from "./TechTooltip";

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
            <h2 className="mb-4 pl-4 text-3xl font-semibold">{title}</h2>
            <div className="flex flex-col gap-2 md:flex-row">
                {align === "left" && (
                    <Link
                        className="relative aspect-video md:flex md:w-1/2 md:items-center"
                        href={link}
                        target="_blank"
                        aria-label={title}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-xl object-cover shadow-md transition-all duration-300  ease-in-out hover:scale-105 md:object-contain lg:object-cover"
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
                                <TechTooltip
                                    name={tech.name}
                                    isAccent
                                    content={tech.content}
                                >
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
                        <div className="mx-8 flex justify-center gap-2 rounded-md border-2 border-primary py-2 text-orange-400">
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
                        className="relative aspect-video md:flex md:w-1/2 md:items-center"
                        href={link}
                        target="_blank"
                        aria-label={title}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-xl object-cover shadow-md transition-all duration-300  ease-in-out hover:scale-105 md:object-contain lg:object-cover"
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Project;
