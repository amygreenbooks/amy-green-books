"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface JumbotronProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function Jumbotron({ title, subtitle, image }: JumbotronProps) {
  return (
    <div className={cn("relative px-4 py-16 lg:py-32")}>
      <Image src={image} fill alt="" className="of-cover br0" priority />
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 block">
          <div className="relative mb-2 max-w-3xl">
            <h1
              className={cn(
                "di font-serif text-4xl font-bold leading-tight lg:text-5xl",
                {
                  "white bg-black px-2": image,
                  "text-primary": !image,
                },
              )}
            >
              {title}
            </h1>
          </div>
          <div className="relative max-w-3xl">
            {subtitle && (
              <p
                className={cn(
                  "di font-serif text-xl font-medium leading-tight",
                  {
                    "white bg-primary px-2": image,
                    "text-grey-3": !image,
                  },
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
