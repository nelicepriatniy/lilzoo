"use client";

import { useToast } from "@/components/Toast/ToastProvider";
import styles from "./LandingAdBanner.module.css";

const items = [
  { label: "🍖 Корм PRO", toast: "Переход к партнёру: Корм PRO" },
  { label: "🦴 Лакомства", toast: "Переход к партнёру: Лакомства" },
  {
    label: "🛡️ Страховка",
    toast: "Страховка питомцев — от 1490 руб/год",
  },
  {
    label: "📡 GPS-ошейник",
    toast: "GPS-ошейник AirPet — скидка 20%",
  },
];

export function LandingAdBanner() {
  const { showToast } = useToast();

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div>
          <div className={styles.label}>Реклама</div>
          <div className={styles.text}>
            Партнёрские предложения для владельцев питомцев
          </div>
        </div>
        <div className={styles.items}>
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              className={styles.item}
              onClick={() => showToast(item.toast, "info")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
