import Link from "next/link";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import styles from "./StorySpecialistsSection.module.css";

const specialists = [
  {
    key: "1",
    cls: styles.cardOne,
    emoji: "✂️",
    name: "Анна Козлова",
    cat: "Грумер",
    rating: "4.9",
    reviews: "(87 отзывов)",
    price: "1200 руб",
    district: "Фестивальный",
    badges: (
      <>
        <Badge tone="verified">✅ Проверенный</Badge>
        <Badge tone="pro">⭐ PRO</Badge>
      </>
    ),
  },
  {
    key: "2",
    cls: styles.cardTwo,
    emoji: "🏥",
    name: "Ветклиника «ЗооДом»",
    cat: "Ветеринар",
    rating: "4.7",
    reviews: "(234 отзывов)",
    price: "700 руб",
    district: "Центральный",
    badges: (
      <>
        <Badge tone="verified">✅ Проверенный</Badge>
        <Badge tone="boost">🚀 Буст</Badge>
      </>
    ),
  },
  {
    key: "3",
    cls: styles.cardThree,
    emoji: "🎓",
    name: "Игорь Степанов",
    cat: "Кинолог",
    rating: "5",
    reviews: "(56 отзывов)",
    price: "2500 руб",
    district: "Юбилейный",
    badges: (
      <>
        <Badge tone="verified">✅ Проверенный</Badge>
        <Badge tone="pro">⭐ PRO</Badge>
        <Badge tone="boost">🚀 Буст</Badge>
      </>
    ),
  },
];

const points = [
  {
    n: "1",
    title: "Понятные карточки",
    text: "Категория, отзывы, цена и район — всё видно сразу, без лишнего шума.",
  },
  {
    n: "2",
    title: "Доверие до первого контакта",
    text: "Отзывы, бейджи проверки и прозрачные цены помогают выбрать специалиста увереннее.",
  },
  {
    n: "3",
    title: "Прямая заявка",
    text: "Можно перейти к профилю, написать или сразу оставить заявку на услугу.",
  },
];

export function StorySpecialistsSection() {
  return (
    <section id="landing-specialists" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.stage} aria-hidden>
          {specialists.map((s) => (
            <div key={s.key} className={`${styles.slideCard} ${s.cls}`}>
              <div className={styles.specHeader}>
                <div className={styles.avatar}>{s.emoji}</div>
                <div className={styles.specInfo}>
                  <div className={styles.specName}>{s.name}</div>
                  <div className={styles.specCat}>{s.cat}</div>
                  <div className={styles.rating}>
                    <span className={styles.stars}>★</span>
                    <strong>{s.rating}</strong>
                    <span className={styles.light}>{s.reviews}</span>
                  </div>
                </div>
              </div>
              <div className={styles.specBody}>
                <div className={styles.price}>
                  от <strong>{s.price}</strong> · 📍 {s.district}
                </div>
                <div className={styles.badges}>{s.badges}</div>
                <div className={styles.specActions}>
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
            </div>
          ))}
        </div>
        <div className={styles.copyCard}>
          <div className={styles.kicker}>Специалисты</div>
          <h3>
            Найдите нужного специалиста без поиска по чатам и объявлениям
          </h3>
          <p>
            Lil Zoo собирает грумеров, ветеринаров, кинологов, выгульщиков и
            передержку в одном аккуратном каталоге. Пользователь сразу видит
            рейтинг, цены, район и формат работы.
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
            <Link href="/onboarding?role=specialist">
              <Button variant="accent" className={styles.heroCta}>
                Разместить услуги
              </Button>
            </Link>
            <Link href="/cabinet">
              <Button variant="primary" className={styles.heroCta}>
                Посмотреть каталог
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
