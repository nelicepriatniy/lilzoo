"use client";

import { Button } from "@/components/Button/Button";
import styles from "./MonetizationModal.module.css";

export function MonetizationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal
      aria-labelledby="mono-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 id="mono-title">📊 Монетизация Lil Zoo</h3>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        <div className={styles.body}>
          <p className={styles.intro}>
            Как сервис зарабатывает на pet-аудитории
          </p>
          <div className={styles.grid}>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>💳</div>
              <h4>Подписка специалистов</h4>
              <p>PRO-профиль: 1 490 — 3 490 руб/мес</p>
            </div>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>🚀</div>
              <h4>Платный буст</h4>
              <p>Подъём в поиске и закрепление на карте</p>
            </div>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>📢</div>
              <h4>Баннерная реклама</h4>
              <p>Pet-бренды: корм, аксессуары, страховка</p>
            </div>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>🤝</div>
              <h4>Партнёрки</h4>
              <p>CPA с зоомагазинов, ветклиник, страховщиков</p>
            </div>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>📋</div>
              <h4>Платные заявки</h4>
              <p>Лиды на специалистов с гарантированным результатом</p>
            </div>
            <div className={styles.monoCard}>
              <div className={styles.mIcon}>⭐</div>
              <h4>PRO-профили</h4>
              <p>Расширенный профиль с фото, видео, аналитикой</p>
            </div>
          </div>
          <div className={styles.mvp}>
            <h4>🔬 Что проверить в MVP</h4>
            <ul className={styles.mvpList}>
              <li>
                <span className={styles.qIcon}>❓</span>
                Будут ли владельцы искать прогулки с питомцами рядом?
              </li>
              <li>
                <span className={styles.qIcon}>❓</span>
                Будут ли специалисты получать реальные заявки через сервис?
              </li>
              <li>
                <span className={styles.qIcon}>❓</span>
                Готовы ли специалисты платить за буст и PRO-профиль?
              </li>
              <li>
                <span className={styles.qIcon}>❓</span>
                Какие категории услуг самые востребованные в вашем городе?
              </li>
              <li>
                <span className={styles.qIcon}>❓</span>
                Насколько важна функция вязки как мотивация регистрации?
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
          <Button variant="primary" onClick={onClose}>
            Понятно
          </Button>
        </div>
      </div>
    </div>
  );
}
