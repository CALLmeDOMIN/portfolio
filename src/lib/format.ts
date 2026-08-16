const MONTH_YEAR: Intl.DateTimeFormatOptions = {
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
};

export function formatDateRange(start: Date, end: Date | null): string {
  const from = start.toLocaleDateString("en-US", MONTH_YEAR);
  if (end === null) return `${from} - Present`;
  return `${from} - ${end.toLocaleDateString("en-US", MONTH_YEAR)}`;
}
