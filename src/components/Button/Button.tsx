import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "md" | "sm" | "xs";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? styles.primary
      : variant === "accent"
        ? styles.accent
        : variant === "outline"
          ? styles.outline
          : styles.ghost;

  const sizeClass = size === "sm" ? styles.sm : size === "xs" ? styles.xs : "";

  return (
    <button
      type={type}
      className={[
        styles.button,
        variantClass,
        sizeClass,
        fullWidth ? styles.fullWidth : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
