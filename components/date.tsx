import { TimeHTMLAttributes } from "react";

import { parseISO, format } from "date-fns";

interface DateProps extends TimeHTMLAttributes<HTMLTimeElement> {
  date: string;
}

export default function DateCmp({ date }: DateProps) {
  const dateString = new Date(Date.parse(date)).toISOString();
  // Ignore the time component of these dates.
  const normalizedDate = parseISO(dateString.split("T")[0]);
  return (
    <time dateTime={dateString}>{format(normalizedDate, "LLLL yyyy")}</time>
  );
}
