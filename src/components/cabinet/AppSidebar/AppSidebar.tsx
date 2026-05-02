"use client";

import type { CabinetTab } from "@/data/types";
import styles from "./AppSidebar.module.css";

const nav: { id: CabinetTab; icon: string; label: string }[] = [
  { id: "map", icon: "🗺️", label: "Карта" },
  { id: "pets", icon: "🐾", label: "Питомцы" },
  { id: "specialists", icon: "📋", label: "Услуги" },
  { id: "messages", icon: "💬", label: "Чаты" },
  { id: "profile", icon: "👤", label: "Профиль" },
];

export function AppSidebar({
  tab,
  onTab,
}: {
  tab: CabinetTab;
  onTab: (t: CabinetTab) => void;
}) {
  return (
    <aside className={styles.sidebar} aria-label="Навигация">
      <div className={styles.main}>
        {nav.map((n) => (
          <button
            key={n.id}
            type="button"
            className={`${styles.item} ${tab === n.id ? styles.active : ""}`}
            onClick={() => onTab(n.id)}
          >
            <span className={styles.icon}>{n.icon}</span>
            <span className={styles.label}>{n.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.hint}>
          <div className={styles.hintIcon}>📍</div>
          <div className={styles.divider} />
          <strong>1 км</strong>
          <span>рядом</span>
        </div>
      </div>
    </aside>
  );
}
