import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import TechTooltip from "./TechTooltip";
import { type WorkExperience } from "@/utils/types";
import { formatDate } from "@/utils/utils";

const WorkExperience = ({
    title,
    company,
    dateStart,
    dateEnd,
    bullets,
    link,
    imageUrl,
    technologies,
}: WorkExperience) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-between space-y-4 p-2 md:justify-center md:p-4">
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
                <h2 className="text-center font-semibold">
                    {formatDate(dateStart, dateEnd)}
                </h2>
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
                <h3>{company}</h3>
                <ul className="list-disc space-y-4 pl-4 md:pl-0">
                    {bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                    <h3 className="font-semibold">Technologies used:</h3>
                    <div className="flex grow items-center gap-2">
                        {technologies.map((tech, index) => (
                            <React.Fragment key={index}>
                                <TechTooltip
                                    name={tech.name}
                                    content={tech.content}
                                >
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
    );
};

export default WorkExperience;
