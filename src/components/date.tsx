import { TimeHTMLAttributes } from "react";

import { parseISO, format } from "date-fns";

interface DateProps extends TimeHTMLAttributes<HTMLTimeElement> {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  // Ignore the time component of these dates.
  const date = parseISO(dateString.split("T")[0]);
  return <time dateTime={dateString}>{format(date, "LLLL yyyy")}</time>;
}
