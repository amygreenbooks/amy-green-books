import { parseISO, format } from "date-fns";
import { TimeHTMLAttributes } from "react";

export default function Date({
  dateString,
  ...rest
}: { dateString: string } & TimeHTMLAttributes<HTMLElement>) {
  // Ignore the time component of these dates.
  const date = parseISO(dateString.split("T")[0]);
  return (
    <time dateTime={dateString} {...rest}>
      {format(date, "LLLL yyyy")}
    </time>
  );
}
