import Link from "next/link";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import styles from "./LandingHero.module.css";

export function LandingHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div>
        <div className={styles.kicker}>Локальная pet-платформа</div>
        <h1 id="hero-title">
          Питомцы, прогулки и проверенные специалисты рядом с домом
        </h1>
        <p className={styles.tagline}>
          Lil Zoo объединяет владельцев собак и кошек, локальные прогулки,
          профили питомцев и каталог pet-специалистов в одном понятном сервисе.
        </p>
        <div className={styles.btns}>
          <Link href="/onboarding?role=owner">
            <Button variant="primary" className={styles.heroCta}>
              Создать профиль питомца
            </Button>
          </Link>
          <Link href="/onboarding?role=specialist">
            <Button variant="accent" className={styles.heroCta}>
              Разместить услуги
            </Button>
          </Link>
        </div>
        <div className={styles.proof}>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>Карта</span>
            <span className={styles.proofLabel}>питомцы и услуги рядом</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>Специалисты</span>
            <span className={styles.proofLabel}>рейтинги, отзывы и цены</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>Безопасность</span>
            <span className={styles.proofLabel}>точный адрес скрыт</span>
          </div>
        </div>
      </div>
      <div className={styles.preview} aria-hidden>
        <div className={styles.previewWindow}>
          <div className={styles.previewTop}>
            <div>
              <div className={styles.previewTitle}>Район: Фестивальный</div>
              <div className={styles.previewSub}>
                Питомцы, прогулки и услуги поблизости
              </div>
            </div>
            <Badge tone="primary">1 км</Badge>
          </div>
          <div className={styles.previewMap}>
            <div className={`${styles.pill} ${styles.pillOne}`}>
              🐕 Рекс <small>гулять</small>
            </div>
            <div className={`${styles.pill} ${styles.pillTwo}`}>
              ✂️ Грумер <small>4.9</small>
            </div>
            <div className={`${styles.pill} ${styles.pillThree}`}>
              🏥 Ветклиника <small>700 ₽</small>
            </div>
            <div className={styles.card}>
              <h4>Анна Козлова</h4>
              <p>Грумер · 87 отзывов · Фестивальный</p>
              <div className={styles.miniActions}>
                <span>Профиль</span>
                <span>Заявка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
