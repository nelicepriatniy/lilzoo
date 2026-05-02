"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import type { Pet, Specialist } from "@/data/types";
import styles from "./MapTab.module.css";

type Popup =
  | { kind: "pet"; pet: Pet }
  | { kind: "spec"; spec: Specialist }
  | null;

export function MapTab({
  pets,
  specialists,
  onToast,
}: {
  pets: Pet[];
  specialists: Specialist[];
  onToast: (msg: string, kind?: "success" | "info") => void;
}) {
  const [popup, setPopup] = useState<Popup>(null);

  return (
    <div className={styles.container}>
      <div className={styles.fakeMap}>
        <div className={styles.filters}>
          <div className={styles.chips}>
            {[
              "🐾 Питомцы",
              "🏥 Специалисты",
              "🐕 Только собаки",
              "📍 1 км",
            ].map((label) => (
              <button
                key={label}
                type="button"
                className={`${styles.chip} ${styles.chipActive}`}
                onClick={() => onToast("Фильтр обновлён", "info")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {pets.map((p) => (
          <button
            key={p.id}
            type="button"
            className={styles.marker}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onClick={() => setPopup({ kind: "pet", pet: p })}
          >
            <span className={styles.bubble}>
              {p.emoji} {p.name}
            </span>
          </button>
        ))}

        {specialists.map((s) => (
          <button
            key={s.id}
            type="button"
            className={styles.marker}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            onClick={() => setPopup({ kind: "spec", spec: s })}
          >
            <span className={`${styles.bubble} ${styles.bubbleSpec}`}>
              {s.emoji} {s.name.split(" ")[0]}
            </span>
          </button>
        ))}

        <div
          className={`${styles.popup} ${popup ? styles.popupOpen : ""}`}
          aria-hidden={!popup}
        >
          {popup?.kind === "pet" && (
            <>
              <div className={styles.popupHeader}>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-light)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Питомец
                  </div>
                  <strong>
                    {popup.pet.emoji} {popup.pet.name}
                  </strong>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {popup.pet.breed}, {popup.pet.age} года, {popup.pet.gender}
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>
              </div>
              <div className={styles.popupBody}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "3.5rem",
                    marginBottom: 12,
                    padding: 16,
                    background: "var(--primary-lighter)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {popup.pet.emoji}
                </div>
                <Badge tone="primary">📍 {popup.pet.district}</Badge>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    margin: "12px 0 16px",
                  }}
                >
                  {popup.pet.status}
                </div>
                <div className={styles.stack}>
                  <Button variant="primary" size="sm" fullWidth>
                    Открыть профиль
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    Написать владельцу
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    fullWidth
                    onClick={() =>
                      onToast("Приглашение на прогулку отправлено! 🦮", "success")
                    }
                  >
                    Позвать гулять
                  </Button>
                </div>
              </div>
            </>
          )}
          {popup?.kind === "spec" && (
            <>
              <div className={styles.popupHeader}>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-light)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {popup.spec.category}
                  </div>
                  <strong>
                    {popup.spec.emoji} {popup.spec.name}
                  </strong>
                  <div style={{ fontSize: "0.78rem" }}>
                    <span style={{ color: "#f59e0b" }}>★</span>{" "}
                    {popup.spec.rating} ({popup.spec.reviews} отзывов)
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>
              </div>
              <div className={styles.popupBody}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "3.5rem",
                    marginBottom: 12,
                    padding: 16,
                    background: "linear-gradient(135deg,#FFF7ED,#FFF0E6)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {popup.spec.emoji}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <Badge tone="accent">📍 {popup.spec.district}</Badge>
                  <Badge tone="gray">от {popup.spec.priceFrom} руб</Badge>
                </div>
                <div className={styles.stack} style={{ marginTop: 12 }}>
                  <Button variant="primary" size="sm" fullWidth>
                    Открыть профиль
                  </Button>
                  <Button variant="accent" size="sm" fullWidth>
                    Оставить заявку
                  </Button>
                  <Button variant="ghost" size="sm" fullWidth>
                    Написать
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.safety}>
          🔒{" "}
          <span>
            Точная геолокация скрыта. На карте отображается примерный район, а не
            адрес владельца.
          </span>
        </div>
      </div>
    </div>
  );
}
