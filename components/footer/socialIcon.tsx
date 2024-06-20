interface SocialIconProps {
  svg: string;
  link: string;
  name: string;
}

export default function SocialIcon({ svg, link, name }: SocialIconProps) {
  return (
    <li className="inline-block px-2 transition-transform hover:-translate-y-1">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="relative block rounded-full bg-muted bg-opacity-55 p-2 text-black"
        aria-label={name}
      >
        <svg width="16px" height="16px" className="block">
          <use xlinkHref={`#${svg}`}></use>
        </svg>
      </a>
    </li>
  );
}
