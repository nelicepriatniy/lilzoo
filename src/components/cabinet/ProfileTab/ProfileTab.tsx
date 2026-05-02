"use client";

import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import type { CurrentUser } from "@/data/types";
import styles from "./ProfileTab.module.css";

export function ProfileTab({
  user,
  onToast,
}: {
  user: CurrentUser;
  onToast: (msg: string, kind?: "success" | "info") => void;
}) {
  const p = user.pet;
  const posts = p.posts ?? [];

  return (
    <div className={styles.shell}>
      <div className={styles.heroCard}>
        <div className={styles.cover} />
        <div className={styles.heroBody}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>{p.emoji}</div>
          </div>
          <div className={styles.main}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  Личный кабинет владельца
                </div>
                <h2>{user.name}</h2>
              </div>
              <Badge tone="primary">🐾 Профиль активен</Badge>
            </div>
            <div className={styles.sub}>
              📍 {user.city}, {p.district} · питомец {p.name}
            </div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <strong>{p.name}</strong>
                <span>
                  {p.breed} · {p.age} лет · {p.gender}
                </span>
              </div>
              <div className={styles.metric}>
                <strong>{posts.length}</strong>
                <span>записей в ленте</span>
              </div>
              <div className={styles.metric}>
                <strong>{(p.goals ?? []).length || 1}</strong>
                <span>активных статусов</span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToast("Редактирование профиля", "info")}
            >
              ✏️ Редактировать
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onToast("Настройки", "info")}
            >
              ⚙️ Настройки
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.feed}>
        <h3>Лента {p.name}</h3>
        {posts.map((post, i) => (
          <div key={i} className={styles.post}>
            <div className={styles.postText}>
              {post.emoji} {post.text}
            </div>
            <div className={styles.postMeta}>
              ❤️ {post.likes} · 💬 {post.comments}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
