"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  text,
  icon,
  bgColor,
  ForColor,
  hoverBgColor,
  borderColor,
  borderWidth,
  link,
  linkMode,
  onPress,
}: {
  text: string;
  icon: ReactNode;
  bgColor: string;
  ForColor: string;
  hoverBgColor: string;
  borderColor?: string;
  borderWidth?: string | number;
  link?: string;
  linkMode?: string;
  onPress?: () => void;
}) {
  const button = (
    <button
      className={`cursor-pointer transition-all duration-200 font-[500] text-md rounded-lg py-2 px-4 flex items-center gap-x-2 focus-visible:scale-[1] active:scale-[0.92] `}
      style={{
        backgroundColor: bgColor,
        color: ForColor,
        border: `${borderWidth} solid ${borderColor || "transparent"}`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBgColor)
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {icon}
      {text}
    </button>
  );
  return linkMode === "a" ? (
    <a href={`${link!}`} target="_blank" rel="noopener noreferrer">
      {button}
    </a>
  ) : linkMode === "next" ? (
    <Link href={`${link!}`}>{button}</Link>
  ) : (
    <button
      onClick={onPress}
      className={`cursor-pointer transition-all duration-200 font-[500] text-md rounded-lg py-2 px-4 flex items-center gap-x-2 focus-visible:scale-[1] active:scale-[0.92] `}
      style={{
        backgroundColor: bgColor,
        color: ForColor,
        border: `${borderWidth} solid ${borderColor || "transparent"}`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBgColor)
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {icon}
      {text}
    </button>
  );
}
