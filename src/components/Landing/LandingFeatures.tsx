import styles from "./LandingFeatures.module.css";

const icons = {
  map: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        className={styles.stroke}
        d="M16 28s-7-6.1-7-12.2a7 7 0 1 1 14 0C23 21.9 16 28 16 28Z"
      />
      <circle className={styles.fillAccent} cx="12.3" cy="14.1" r="1.35" />
      <circle className={styles.fillAccent} cx="15.1" cy="12.3" r="1.25" />
      <circle className={styles.fillAccent} cx="17.9" cy="12.3" r="1.25" />
      <circle className={styles.fillAccent} cx="20.7" cy="14.1" r="1.35" />
      <path
        className={styles.fillPrimary}
        d="M16 15.7c-1.9 0-3.4 1.6-3.4 3.5 0 1.8 1.4 2.9 3.4 2.9s3.4-1.1 3.4-2.9c0-1.9-1.5-3.5-3.4-3.5Z"
      />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        className={styles.stroke}
        d="M9 10.5h6.5a4.5 4.5 0 0 1 4.5 4.5v.4A4.6 4.6 0 0 1 15.4 20H13l-3.5 2.6.7-2.6H9A4 4 0 0 1 5 16V14.5A4 4 0 0 1 9 10.5Z"
      />
      <path
        className={styles.stroke}
        d="M22.2 7.5h1.8A3.9 3.9 0 0 1 28 11.4v1.8A3.9 3.9 0 0 1 24.1 17H23l.5 2L20.8 17h-1.1"
      />
      <circle className={styles.fillAccent} cx="12" cy="15.2" r="1.1" />
      <circle className={styles.fillAccent} cx="16" cy="15.2" r="1.1" />
      <circle className={styles.fillAccent} cx="22.8" cy="12.3" r="1" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <rect
        className={styles.stroke}
        x="5"
        y="6"
        width="22"
        height="20"
        rx="4"
      />
      <path className={styles.stroke} d="M11 12h10M11 17h10M11 22h6" />
      <circle className={styles.fillAccent} cx="24" cy="22" r="2.2" />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        className={styles.stroke}
        d="M16 27s8-3.8 8-10.2V9.8L16 6 8 9.8v7C8 23.2 16 27 16 27Z"
      />
      <path
        className={styles.fillAccent}
        d="m16 11.2 1.4 2.9 3.2.4-2.3 2.2.6 3.2-2.9-1.6-2.9 1.6.6-3.2-2.3-2.2 3.2-.4L16 11.2Z"
      />
    </svg>
  ),
  privacy: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        className={styles.stroke}
        d="M14 25s-5.5-4.7-5.5-9.4a5.5 5.5 0 1 1 11 0C19.5 20.3 14 25 14 25Z"
      />
      <path
        className={styles.stroke}
        d="M20.8 16.7 25 14.8l4.5 2v3.8c0 3.1-2.4 5.1-4.5 6.1-2.1-1-4.5-3-4.5-6.1v-3.9Z"
      />
      <circle className={styles.fillAccent} cx="14" cy="15.5" r="1.8" />
      <path className={styles.stroke} d="M25 19.4v2.7" />
      <circle className={styles.fillPrimary} cx="25" cy="24.2" r="1.1" />
    </svg>
  ),
  business: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path className={styles.stroke} d="M7 22.5h18" />
      <path className={styles.stroke} d="M9.5 20V14.5M16 20v-8M22.5 20v-5" />
      <path className={styles.stroke} d="M10 10.2 14.5 14 19 11l4 3" />
      <path className={styles.stroke} d="m21 8 2 .1-.1 2" />
      <circle className={styles.fillAccent} cx="22.5" cy="20" r="2.2" />
    </svg>
  ),
};

const items = [
  {
    key: "nearby",
    icon: icons.map,
    title: "Найдите своих рядом",
    text: "Смотрите питомцев, прогулки и полезные услуги поблизости — без долгого поиска по чатам и объявлениям.",
  },
  {
    key: "walk",
    icon: icons.chat,
    title: "Гуляйте вместе",
    text: "Находите компанию для прогулок, знакомьтесь с владельцами рядом и договаривайтесь в пару сообщений.",
  },
  {
    key: "svc",
    icon: icons.services,
    title: "Услуги для питомца",
    text: "Грумеры, ветеринары, кинологи, выгульщики и передержка собраны в одном удобном каталоге.",
  },
  {
    key: "trust",
    icon: icons.trust,
    title: "Выбирайте с доверием",
    text: "Смотрите рейтинги, отзывы, цены и отметки проверки, чтобы спокойнее выбрать специалиста.",
  },
  {
    key: "privacy",
    icon: icons.privacy,
    title: "Адрес скрыт",
    text: "На карте отображается примерная зона рядом с вами, а не точный домашний адрес.",
  },
  {
    key: "biz",
    icon: icons.business,
    title: "Разместите услуги",
    text: "Специалисты могут создать профиль, показать цены и получать обращения от владельцев питомцев рядом.",
  },
] as const;

export function LandingFeatures() {
  return (
    <div className={styles.features}>
      {items.map((item) => (
        <div key={item.key} className={styles.card}>
          <div className={styles.top}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
