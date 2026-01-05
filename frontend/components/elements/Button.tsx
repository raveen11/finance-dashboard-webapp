"use client";

import { ReactNode } from "react";

type ButtonColor = "emerald" | "gray" | "red" | "blue";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: ButtonColor;
  prefixIcon?: ReactNode;

  /** size control */
  width?: string;   // e.g. "w-full", "w-40"
  height?: string;  // e.g. "h-10", "h-12"

  disabled?: boolean;
  className?: string;
}

const colorClasses: Record<ButtonColor, string> = {
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  gray: "bg-gray-600 hover:bg-gray-700",
  red: "bg-red-600 hover:bg-red-700",
  blue: "bg-blue-600 hover:bg-blue-700",
};

export default function Button({
  text,
  onClick,
  color = "emerald",
  prefixIcon,
  width = "w-auto",
  height = "h-10",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 cursor-pointer
        ${width} ${height}
        px-6 rounded-lg
        text-white font-medium transition
        ${colorClasses[color]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}
      {text}
    </button>
  );
}
