import { TimeHTMLAttributes } from "react";

import { parseISO, format } from "date-fns";

interface DateProps extends TimeHTMLAttributes<HTMLTimeElement> {
  date: Date;
}

export default function Date({ date }: DateProps) {
  const dateString = date.toISOString();
  // Ignore the time component of these dates.
  const normalizedDate = parseISO(dateString.split("T")[0]);
  return (
    <time dateTime={dateString}>{format(normalizedDate, "LLLL yyyy")}</time>
  );
}
