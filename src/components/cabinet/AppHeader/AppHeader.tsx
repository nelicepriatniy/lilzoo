"use client";

import { LogoLink } from "@/components/LogoLink/LogoLink";
import styles from "./AppHeader.module.css";

export function AppHeader({
  onNotifications,
  onProfile,
}: {
  onNotifications: () => void;
  onProfile: () => void;
}) {
  return (
    <header className={styles.header}>
      <LogoLink variant="app" href="/" />
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.notifBtn}
          onClick={onNotifications}
          aria-label="Уведомления"
        >
          🔔
          <span className={styles.dot} />
        </button>
        <button
          type="button"
          className={styles.avatar}
          onClick={onProfile}
          aria-label="Профиль"
        >
          🧑
        </button>
      </div>
    </header>
  );
}
