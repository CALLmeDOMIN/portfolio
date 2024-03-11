"use client"

import { IconBrandNextjs } from "@tabler/icons-react"
import { Tooltip } from "react-tooltip"

const TechTooltip = ({
    name,
    children,
    isAccent = false,
}: {
    name: string
    children: React.ReactNode
    isAccent?: boolean
}) => {
    return (
        <span className="tooltip-container">
            {children}
            <Tooltip
                className={`tooltip ${isAccent && "tooltip-accent"}`}
                anchorSelect={`#${name}`}
                content={name}
                opacity={1}
            />
        </span>
    )
}

export default TechTooltip
