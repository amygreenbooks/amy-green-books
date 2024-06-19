interface SocialIconProps {
  svg: string;
  link: string;
  name: string;
}

export default function SocialIcon({ svg, link, name }: SocialIconProps) {
  return (
    <li className="dib raise px-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="link black br-100 relative block bg-muted bg-opacity-55 p-2"
        aria-label={name}
      >
        <svg width="16px" height="16px" className="block">
          <use xlinkHref={`#${svg}`}></use>
        </svg>
      </a>
    </li>
  );
}
