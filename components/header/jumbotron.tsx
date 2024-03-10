"use client";

import cn from "classnames";
import Image from "next/image";

interface JumbotronProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function Jumbotron({ title, subtitle, image }: JumbotronProps) {
  return (
    <div className={cn("pv5 ph3 pv6-l relative")}>
      <Image src={image} fill alt="" className="of-cover br0" priority />
      <div className="mw7 center">
        <div className="db mb3">
          <div className="mw7 relative mb2">
            <h1
              className={cn("f2 f1-l b di lh-title serif", {
                "ph2 bg-black white": image,
                primary: !image,
              })}
            >
              {title}
            </h1>
          </div>
          <div className="mw7 relative">
            {subtitle && (
              <p
                className={cn("f4 fw5 di lh-title serif", {
                  "ph2 bg-primary white": image,
                  "grey-3": !image,
                })}
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
