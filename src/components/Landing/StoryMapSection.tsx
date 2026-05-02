import Link from "next/link";
import { Button } from "@/components/Button/Button";
import styles from "./StoryMapSection.module.css";

const points = [
  {
    n: "1",
    title: "Питомцы и прогулки рядом",
    text: "Увидеть, кто гуляет неподалёку, и быстро договориться о встрече или совместной прогулке.",
  },
  {
    n: "2",
    title: "Локальный радиус поиска",
    text: "Удобно искать в пределах 1 км, 3 км или 5 км — сервис остаётся полезным именно рядом с домом.",
  },
  {
    n: "3",
    title: "Один экран — понятный сценарий",
    text: "Карта сразу ведёт к профилю, сообщению или заявке — без длинных переходов и путаницы.",
  },
];

const pets = [
  {
    key: "murka",
    emoji: "🐱",
    cls: styles.petOne,
    cover: styles.warm,
    status: "Ищет прогулку",
    name: "🐱 Мурка",
    breed: "Британская",
    meta: ["📍 Фестивальный", "🎂 2 года", "♀ Девочка"],
  },
  {
    key: "bella",
    emoji: "🐕",
    cls: styles.petTwo,
    cover: styles.blue,
    status: "Ищет друзей",
    name: "🐕 Белла",
    breed: "Голден ретривер",
    meta: ["📍 Центральный", "🎂 4 года", "♀ Девочка"],
  },
  {
    key: "vasya",
    emoji: "🐶",
    cls: styles.petThree,
    cover: styles.green,
    status: "Рядом",
    name: "🐶 Вася",
    breed: "Такса",
    meta: ["📍 Фестивальный", "🎂 5 лет", "♂ Мальчик"],
  },
];

export function StoryMapSection() {
  return (
    <section id="landing-map" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.copyCard}>
          <div className={styles.kicker}>Карта рядом</div>
          <h3>Всё нужное для питомца — в понятном радиусе от дома</h3>
          <p>
            Вместо хаотичного поиска по чатам и объявлениям — одна карта, где
            сразу видно питомцев, прогулки и нужные pet-услуги в вашем районе.
            Быстро, локально и без лишнего шума.
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
              <Button variant="primary" className={styles.heroCta}>
                Создать профиль питомца
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.stage} aria-hidden>
          {pets.map((p) => (
            <div key={p.key} className={`${styles.petCard} ${p.cls}`}>
              <div className={`${styles.cover} ${p.cover}`}>
                <div>{p.emoji}</div>
                <div className={styles.status}>{p.status}</div>
              </div>
              <div className={styles.body}>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.breed}>{p.breed}</div>
                <div className={styles.meta}>
                  {p.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className={styles.petActions}>
                  <span className={styles.primaryBtn}>Профиль</span>
                  <span>Написать</span>
                  <span>Гулять</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
