import { formatISO, format } from "date-fns";

type DateComponentProps = {
  date: Date;
};

export default function Date$({ date, ...rest }: DateComponentProps) {
  return (
    <time dateTime={formatISO(date)} {...rest}>
      {format(date, "LLLL yyyy")}
    </time>
  );
}
