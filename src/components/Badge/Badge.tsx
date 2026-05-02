import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

type Tone =
  | "primary"
  | "accent"
  | "pro"
  | "boost"
  | "verified"
  | "gray"
  | "pink";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  children: ReactNode;
};

export function Badge({
  tone = "primary",
  className = "",
  children,
  ...rest
}: BadgeProps) {
  const toneClass =
    tone === "primary"
      ? styles.primary
      : tone === "accent"
        ? styles.accent
        : tone === "pro"
          ? styles.pro
          : tone === "boost"
            ? styles.boost
            : tone === "verified"
              ? styles.verified
              : tone === "pink"
                ? styles.pink
                : styles.gray;

  return (
    <span
      className={[styles.badge, toneClass, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
}
