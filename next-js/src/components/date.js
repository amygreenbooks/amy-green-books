import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  // Ignore the time component of these dates.
  const date = parseISO(dateString.split("T")[0]);
  return <time dateTime={dateString}>{format(date, "LLLL yyyy")}</time>;
}
