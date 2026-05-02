"use client";

import type { ComponentProps } from "react";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import type { Pet } from "@/data/types";
import styles from "./PetsTab.module.css";

const coverClass: Record<string, string> = {
  "pet-cover-dog": styles.dog,
  "pet-cover-cat": styles.cat,
  "pet-cover-2": styles.c2,
  "pet-cover-3": styles.c3,
  "pet-cover-4": styles.c4,
};

const statusTone: Record<string, ComponentProps<typeof Badge>["tone"]> =
  {
    walk: "primary",
    friends: "primary",
    mating: "pink",
    specialist: "accent",
    profile: "gray",
  };

export function PetsTab({
  pets,
  onToast,
}: {
  pets: Pet[];
  onToast: (msg: string, kind?: "success" | "info") => void;
}) {
  return (
    <>
      <div className={styles.sectionHeader}>
        <h2>Питомцы рядом</h2>
        <p>Карточки из демо-данных — как в макете приложения.</p>
      </div>
      <div className={styles.grid}>
        {pets.map((p) => (
          <div key={p.id} className={styles.card}>
            <div
              className={`${styles.cover} ${coverClass[p.cover] ?? styles.dog}`}
            >
              <span>{p.emoji}</span>
              <div className={styles.badgeWrap}>
                <Badge tone={statusTone[p.statusKey] ?? "gray"}>
                  {p.status}
                </Badge>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.titleRow}>
                <div>
                  <div className={styles.name}>
                    {p.emoji} {p.name}
                  </div>
                  <div className={styles.breed}>{p.breed}</div>
                </div>
                <span className={styles.typeTag}>
                  {p.type === "cat" ? "Кошка" : "Собака"}
                </span>
              </div>
              <div className={styles.meta}>
                <span>📍 {p.district}</span>
                <span>
                  🎂 {p.age}{" "}
                  {p.age === 1 ? "год" : p.age < 5 ? "года" : "лет"}
                </span>
                <span>
                  {p.gender === "Девочка" ? "♀" : "♂"} {p.gender}
                </span>
              </div>
              <div className={styles.actions}>
                <Button variant="primary" size="xs">
                  Профиль
                </Button>
                <Button variant="outline" size="xs">
                  Написать
                </Button>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() =>
                    onToast("Приглашение на прогулку отправлено 🦮", "success")
                  }
                >
                  Гулять
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
