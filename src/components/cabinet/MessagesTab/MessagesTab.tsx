"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import type { Dialog } from "@/data/types";
import styles from "./MessagesTab.module.css";

export function MessagesTab({ dialogs }: { dialogs: Dialog[] }) {
  const [activeId, setActiveId] = useState(dialogs[0]?.id ?? 0);
  const active = dialogs.find((d) => d.id === activeId) ?? dialogs[0];

  if (!active) {
    return <p style={{ padding: 24 }}>Нет диалогов</p>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.dialogs}>
        {dialogs.map((d) => (
          <button
            key={d.id}
            type="button"
            className={`${styles.dialog} ${d.id === active.id ? styles.active : ""}`}
            onClick={() => setActiveId(d.id)}
          >
            <div className={styles.dAvatar}>{d.emoji}</div>
            <div className={styles.dInfo}>
              <div className={styles.dName}>{d.name}</div>
              <div className={styles.preview}>{d.preview}</div>
            </div>
            <div className={styles.time}>{d.time}</div>
          </button>
        ))}
      </div>
      <div className={styles.chat}>
        <div className={styles.chatHeader}>{active.name}</div>
        <div className={styles.messages}>
          {active.messages.map((m, i) => (
            <div
              key={`${active.id}-${i}`}
              className={`${styles.msg} ${m.out ? styles.out : ""}`}
            >
              <div
                className={m.out ? styles.bubbleOut : styles.bubbleIn}
              >
                {m.text}
              </div>
              <span className={styles.timeLbl}>{m.time}</span>
            </div>
          ))}
        </div>
        <div className={styles.inputBar}>
          <input
            className={styles.input}
            placeholder="Сообщение..."
            aria-label="Сообщение"
          />
          <Button variant="primary" size="sm">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
}
