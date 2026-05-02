import type { ReactNode } from "react";
import styles from "./LandingStorySections.module.css";

export function LandingStorySections({ children }: { children: ReactNode }) {
  return <div className={styles.wrap}>{children}</div>;
}
