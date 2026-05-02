import Image from "next/image";
import Link from "next/link";
import styles from "./LogoLink.module.css";

type Variant = "landing" | "app" | "onboarding";

export function LogoLink({
  variant = "landing",
  href = "/",
}: {
  variant?: Variant;
  href?: string;
}) {
  const sizeClass =
    variant === "app"
      ? styles.appSize
      : variant === "onboarding"
        ? styles.onboardSize
        : styles.landingSize;

  return (
    <Link href={href} className={styles.logo} title="На главный экран">
      <Image
        src="/images/logo.png"
        alt="Lil Zoo"
        width={304}
        height={80}
        className={`${styles.logoImg} ${sizeClass}`}
        priority
      />
    </Link>
  );
}
