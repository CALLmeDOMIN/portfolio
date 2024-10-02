const formatDate = (startDate: Date, endDate: Date | null) => {
    const start = new Date(startDate);
    if (endDate === null) {
        return `${start.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" })} - Present`;
    }

    const end = new Date(endDate);
    return `${start.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" })}`;
};

export { formatDate };
