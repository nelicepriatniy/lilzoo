import Link from "next/link";
import { Button } from "@/components/Button/Button";
import styles from "./StorySafetySection.module.css";

const pinIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M12 21c4-4.2 6-6.9 6-9.8a6 6 0 1 0-12 0c0 2.9 2 5.6 6 9.8Z" />
    <circle cx="12" cy="11" r="2.3" />
  </svg>
);

const shieldIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M12 3 18 5.5v5.8c0 4.1-2.2 7.1-6 9.2-3.8-2.1-6-5.1-6-9.2V5.5L12 3Z" />
    <path d="m9.1 11.8 1.7 1.8 4.1-4.3" />
  </svg>
);

const chatIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M7 8.5A3.5 3.5 0 0 1 10.5 5h3A3.5 3.5 0 0 1 17 8.5v3A3.5 3.5 0 0 1 13.5 15H11l-3 2.5V15h-.5A3.5 3.5 0 0 1 4 11.5v-3A3.5 3.5 0 0 1 7.5 5" />
    <path d="m9.6 10.8 1.6 1.5 3.2-3" />
  </svg>
);

const points = [
  {
    n: "1",
    title: "Точная точка скрыта",
    text: "У частных профилей отображается только район или примерная зона, без лишней детализации.",
  },
  {
    n: "2",
    title: "Гибкая видимость",
    text: "Можно скрыть профиль с карты, ограничить сообщения или показывать район только нужным людям.",
  },
  {
    n: "3",
    title: "Спокойное общение",
    text: "Жалобы, блокировка и базовые правила платформы помогают пользоваться сервисом безопаснее.",
  },
];

export function StorySafetySection() {
  return (
    <section id="landing-safety" className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kicker}>Безопасность</div>
          <h3>Пользователь сам решает, что показывать на карте</h3>
          <p>
            Сервис учитывает приватность владельцев питомцев: для личных
            профилей показывается примерная зона, а не точный адрес. При этом у
            ветклиник и салонов адрес остаётся открытым — там это действительно
            важно.
          </p>
          <div className={styles.points}>
            {points.map((p) => (
              <div key={p.n} className={styles.point}>
                <div className={styles.pointMark}>{p.n}</div>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <Link href="/onboarding?role=owner">
              <Button variant="primary">Попробовать сервис</Button>
            </Link>
          </div>
        </div>
        <div className={styles.visual} aria-hidden>
          <div className={styles.layout}>
            <div className={styles.previewCard}>
              <div className={styles.previewHead}>
                <div>
                  <strong>Район: Фестивальный</strong>
                  <span>Показывается только примерная зона</span>
                </div>
                <div className={styles.radiusBadge}>1 км</div>
              </div>
              <div className={styles.previewGrid}>
                <div className={`${styles.chip} ${styles.chipOne}`}>
                  <span className={styles.chipIcon}>{pinIcon}</span>
                  <span>Только район</span>
                </div>
                <div className={`${styles.chip} ${styles.chipTwo}`}>
                  <span className={styles.chipIcon}>{shieldIcon}</span>
                  <span>Проверенный профиль</span>
                </div>
                <div className={`${styles.chip} ${styles.chipThree}`}>
                  <span className={styles.chipIcon}>{chatIcon}</span>
                  <span>Надёжный контакт</span>
                </div>
              </div>
            </div>
            <div className={styles.controlsCard}>
              <h4>Настройки приватности</h4>
              <div className={styles.controlList}>
                <div className={styles.controlRow}>
                  <div className={styles.controlIcon}>◦</div>
                  <div>
                    <strong>Показывать только район</strong>
                    <span>
                      На карте видна примерная зона вместо домашнего адреса.
                    </span>
                  </div>
                  <div className={styles.toggle} />
                </div>
                <div className={styles.controlRow}>
                  <div className={styles.controlIcon}>◦</div>
                  <div>
                    <strong>Скрыть профиль с карты</strong>
                    <span>
                      Профиль остаётся доступен, но не участвует в локальном
                      поиске.
                    </span>
                  </div>
                  <div className={styles.toggle} />
                </div>
                <div className={styles.controlRow}>
                  <div className={styles.controlIcon}>◦</div>
                  <div>
                    <strong>Сообщения по запросу</strong>
                    <span>
                      Входящие можно ограничить только пользователями с
                      профилем питомца.
                    </span>
                  </div>
                  <div className={styles.toggle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
