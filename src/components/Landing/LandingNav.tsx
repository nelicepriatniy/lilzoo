"use client";

import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { LogoLink } from "@/components/LogoLink/LogoLink";
import styles from "./LandingNav.module.css";

export function LandingNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={styles.nav}>
      <LogoLink variant="landing" />
      <div className={styles.navLinks}>
        <button
          type="button"
          className={styles.navLinkBtn}
          onClick={() => scrollTo("landing-map")}
        >
          Карта
        </button>
        <button
          type="button"
          className={styles.navLinkBtn}
          onClick={() => scrollTo("landing-specialists")}
        >
          Специалисты
        </button>
        <button
          type="button"
          className={styles.navLinkBtn}
          onClick={() => scrollTo("landing-safety")}
        >
          Безопасность
        </button>
      </div>
      <div className={styles.actions}>
        <Link href="/onboarding?role=specialist">
          <Button variant="outline" size="sm" className={styles.outlineHideMobile}>
            Разместить услуги
          </Button>
        </Link>
        <Link href="/onboarding?role=owner">
          <Button variant="primary" size="sm">
            Войти
          </Button>
        </Link>
      </div>
    </nav>
  );
}
