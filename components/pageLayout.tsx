import { ReactNode } from "react";

export default function PageLayout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="px-2">
      <div className="mx-auto my-2 max-w-prose rounded bg-white p-4 drop-shadow sm:my-8 sm:p-8 md:my-16">
        <header className="mb-8 font-serif">
          <h1 className="mb-1 block text-4xl font-bold leading-tight text-primary">
            {title}
          </h1>
          {description && (
            <p className="mid-gray mb-2 leading-tight">{description}</p>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}
