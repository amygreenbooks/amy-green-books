import Image from "next/image";

export default function Retailer({
  link,
  image,
  name,
}: {
  link: string;
  image: string;
  name: string;
}) {
  return (
    <div className="flex w-1/2 p-2 sm:w-1/3">
      <a
        className="flex w-full items-center rounded bg-off-white p-8 transition-all hover:-translate-y-1 focus:-translate-y-1 active:opacity-50 sm:p-4 md:p-2"
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <Image
          width={300}
          height={100}
          src={image}
          alt={name}
          className="mx-auto block h-auto max-h-16 w-full max-w-full object-contain"
        ></Image>
      </a>
    </div>
  );
}
