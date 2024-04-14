"use client"

import { Tooltip } from "react-tooltip"

const TechTooltip = ({
    name,
    children,
    content,
    isAccent = false,
}: {
    name: string
    children: React.ReactNode
    content: string
    isAccent?: boolean
}) => {
    const tooltipClass = isAccent ? "tooltip tooltip-accent" : "tooltip"

    return (
        <span className="tooltip-container">
            {children}
            <Tooltip
                className={tooltipClass}
                anchorSelect={`#${name}`}
                content={content}
                opacity={1}
            />
        </span>
    )
}

export default TechTooltip
