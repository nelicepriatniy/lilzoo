"use client";

import type { CabinetTab } from "@/data/types";
import styles from "./AppBottomNav.module.css";

const nav: { id: CabinetTab; icon: string; label: string }[] = [
  { id: "map", icon: "🗺️", label: "Карта" },
  { id: "pets", icon: "🐾", label: "Питомцы" },
  { id: "specialists", icon: "🏥", label: "Специалисты" },
  { id: "messages", icon: "💬", label: "Сообщения" },
  { id: "profile", icon: "👤", label: "Профиль" },
];

export function AppBottomNav({
  tab,
  onTab,
}: {
  tab: CabinetTab;
  onTab: (t: CabinetTab) => void;
}) {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}
