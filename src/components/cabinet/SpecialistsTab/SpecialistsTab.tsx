"use client";

import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import type { Specialist } from "@/data/types";
import styles from "./SpecialistsTab.module.css";

export function SpecialistsTab({
  specialists,
}: {
  specialists: Specialist[];
}) {
  return (
    <>
      <div className={styles.sectionHeader}>
        <h2>Специалисты</h2>
        <p>Каталог услуг для питомцев в вашем районе.</p>
      </div>
      <div className={styles.grid}>
        {specialists.map((s) => (
          <article key={s.id} className={styles.card}>
            <div className={styles.head}>
              <div className={styles.avatar}>{s.emoji}</div>
              <div className={styles.info}>
                <div className={styles.name}>{s.name}</div>
                <div className={styles.cat}>{s.category}</div>
                <div className={styles.rating}>
                  <span className={styles.stars}>★</span>
                  <strong>{s.rating}</strong>
                  <span style={{ color: "var(--text-light)" }}>
                    ({s.reviews} отзывов)
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.price}>
                от <strong>{s.priceFrom} руб</strong> · 📍 {s.district}
              </div>
              <div className={styles.badges}>
                {s.badges.includes("verified") && (
                  <Badge tone="verified">✅ Проверенный</Badge>
                )}
                {s.badges.includes("pro") && (
                  <Badge tone="pro">⭐ PRO</Badge>
                )}
                {s.badges.includes("boost") && (
                  <Badge tone="boost">🚀 Буст</Badge>
                )}
              </div>
              <div className={styles.actions}>
                <Button variant="primary" size="xs">
                  Профиль
                </Button>
                <Button variant="accent" size="xs">
                  Заявка
                </Button>
                <Button variant="ghost" size="xs">
                  Написать
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
