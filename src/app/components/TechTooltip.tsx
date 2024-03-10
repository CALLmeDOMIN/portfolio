"use client"

import { IconBrandNextjs } from "@tabler/icons-react"
import { Tooltip } from "react-tooltip"

const TechTooltip = ({
    name,
    children,
}: {
    name: string
    children: React.ReactNode
}) => {
    return (
        <span className="tooltip-container">
            {children}
            <Tooltip
                className="tooltip"
                anchorSelect={`#${name}`}
                content={name}
                opacity={1}
            />
        </span>
    )
}

export default TechTooltip
