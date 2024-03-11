import React from "react"
import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser"
import { IconArrowUpRight } from "@tabler/icons-react"
import { type Experience } from "@/utils/types"
import TechTooltip from "./TechTooltip"

const Experience = ({
    title,
    sub,
    desc,
    date,
    link,
    imageUrl,
    technologies,
}: Experience) => {
    return (
        <div className="flex gap-4 flex-col md:flex-row">
            <div className="p-2 md:p-4 space-y-4 flex justify-between md:justify-center flex-col">
                <div className="relative aspect-video min-w-36">
                    <Image
                        src={imageUrl}
                        alt={`${title} logo`}
                        fill
                        sizes="144px"
                        className="object-contain"
                        title={title}
                    />
                </div>
                <h2 className="font-semibold text-center">{date} - present</h2>
            </div>
            <div className="flex flex-col space-y-4">
                <Link target="_blank" href={link} className="">
                    <h2 className="text-3xl font-semibold">
                        {title}{" "}
                        <IconArrowUpRight
                            size={36}
                            className="-mt-1 inline-block"
                        />
                    </h2>
                </Link>
                <h3>{sub}</h3>
                <p>{parse(desc)}</p>
                <div className="flex gap-2 md:items-center flex-col md:flex-row">
                    <h3 className="font-semibold">Technologies used:</h3>
                    <div className="flex gap-2 items-center grow">
                        {technologies.map((tech, index) => (
                            <React.Fragment key={index}>
                                <TechTooltip name={tech.name}>
                                    {tech.icon}
                                </TechTooltip>
                                <div
                                    className={`h-0.5 w-0.5 bg-accent ${index === technologies.length - 1 ? "grow" : ""}`}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
