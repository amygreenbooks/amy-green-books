import { ReactNode } from "react";

export default function PageLayout({
  children,
  title = null,
  description = null,
}: {
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="ph2">
      <div className="measure-wide center mv2 mv4-ns mv5-m paper-2 bg-white pa3 pa4-ns br1">
        {title && (
          <header className="mb4 serif">
            <h1 className="db primary f2 b lh-title mb1">{title}</h1>
            {description && (
              <p className="mid-gray lh-title mb2">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </div>
  );
}
