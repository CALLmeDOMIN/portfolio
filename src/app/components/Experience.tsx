import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { IconArrowUpRight } from "@tabler/icons-react";
import { type Experience } from "@/utils/types";
import TechTooltip from "./TechTooltip";
import { formatDate } from "@/utils/utils";

const Experience = ({
    title,
    sub,
    desc,
    dateStart,
    dateEnd,
    link,
    imageUrl,
    technologies,
}: Experience) => {
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
                <h3>{sub}</h3>
                <p>{parse(desc)}</p>
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

export default Experience;
