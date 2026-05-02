"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { useToast } from "@/components/Toast/ToastProvider";
import styles from "./OnboardingFlow.module.css";

type Role = "owner" | "specialist";

export function OnboardingFlow({
  initialRole,
}: {
  initialRole: Role | null;
}) {
  const router = useRouter();
  const { showToast } = useToast();
  const [role, setRole] = useState<Role | null>(initialRole);
  const [step, setStep] = useState(1);

  const [ownerName, setOwnerName] = useState("Алексей Петров");
  const [city, setCity] = useState("Краснодар");
  const [district, setDistrict] = useState("Фестивальный");
  const [petName, setPetName] = useState("Рекс");
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [breed, setBreed] = useState("Лабрадор ретривер");
  const [age, setAge] = useState("3");
  const [gender, setGender] = useState("Мальчик");

  const [specName, setSpecName] = useState("Анна Козлова");
  const [category, setCategory] = useState("Грумер");
  const [priceFrom, setPriceFrom] = useState("1200");

  const title = useMemo(() => {
    if (!role) return "Создание профиля";
    return role === "owner" ? "Профиль владельца" : "Профиль специалиста";
  }, [role]);

  const finish = () => {
    showToast("Профиль создан! Добро пожаловать в Lil Zoo 🎉", "success");
    router.push("/cabinet");
  };

  const renderSteps = () => {
    if (!role) return null;
    if (role === "owner") {
      if (step === 1) {
        return (
          <>
            <div className={styles.stepRow}>
              {[1, 2, 3].map((n) => (
                <span key={n} style={{ display: "contents" }}>
                  <div
                    className={`${styles.stepDot} ${step === n ? styles.stepActive : step > n ? styles.stepDone : styles.stepInactive}`}
                  >
                    {n}
                  </div>
                  {n < 3 && (
                    <div
                      className={`${styles.stepLine} ${step > n ? styles.stepLineDone : ""}`}
                    />
                  )}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
              <Badge tone="primary">Шаг 1</Badge>
              <Badge tone="gray">Владелец и питомец</Badge>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Ваше имя</label>
              <input
                className={styles.input}
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Город</label>
                <input
                  className={styles.input}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Район</label>
                <input
                  className={styles.input}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
            </div>
            <hr className={styles.hr} />
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              🐾 Данные питомца
            </p>
            <button
              type="button"
              className={styles.photoPlaceholder}
              onClick={() =>
                showToast("Функция загрузки фото в разработке", "info")
              }
            >
              📷
            </button>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Кличка питомца</label>
                <input
                  className={styles.input}
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Тип</label>
                <select
                  className={styles.select}
                  value={petType}
                  onChange={(e) =>
                    setPetType(e.target.value as "dog" | "cat")
                  }
                >
                  <option value="dog">🐕 Собака</option>
                  <option value="cat">🐱 Кошка</option>
                </select>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Порода</label>
                <input
                  className={styles.input}
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Возраст (лет)</label>
                <input
                  className={styles.input}
                  type="number"
                  min={0}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Пол</label>
              <select
                className={styles.select}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Мальчик</option>
                <option>Девочка</option>
              </select>
            </div>
          </>
        );
      }
      if (step === 2) {
        return (
          <>
            <div className={styles.stepRow}>
              {[1, 2, 3].map((n) => (
                <span key={n} style={{ display: "contents" }}>
                  <div
                    className={`${styles.stepDot} ${step === n ? styles.stepActive : step > n ? styles.stepDone : styles.stepInactive}`}
                  >
                    {n}
                  </div>
                  {n < 3 && (
                    <div
                      className={`${styles.stepLine} ${step > n ? styles.stepLineDone : ""}`}
                    />
                  )}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
              <Badge tone="primary">Шаг 2</Badge>
              <Badge tone="gray">Оформление профиля</Badge>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Коротко о питомце</label>
              <textarea
                className={styles.textarea}
                rows={4}
                defaultValue="Дружелюбный, спокойный и любит долгие прогулки."
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Радиус поиска рядом</label>
              <select className={styles.select} defaultValue="1 км">
                <option>1 км</option>
                <option>3 км</option>
                <option>5 км</option>
              </select>
            </div>
          </>
        );
      }
      return (
        <>
          <div className={styles.stepRow}>
            {[1, 2, 3].map((n) => (
              <span key={n} style={{ display: "contents" }}>
                <div
                  className={`${styles.stepDot} ${step === n ? styles.stepActive : step > n ? styles.stepDone : styles.stepInactive}`}
                >
                  {n}
                </div>
                {n < 3 && (
                  <div
                    className={`${styles.stepLine} ${step > n ? styles.stepLineDone : ""}`}
                  />
                )}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
            <Badge tone="primary">Шаг 3</Badge>
            <Badge tone="gray">Публикация</Badge>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Видимость на карте</label>
            <select className={styles.select} defaultValue="district_only">
              <option value="district_only">Показывать только район</option>
              <option value="visible">Показывать район и статус</option>
              <option value="hidden">Не показывать на карте</option>
            </select>
          </div>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: 16,
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Предпросмотр</div>
            <div style={{ fontSize: "0.9rem" }}>
              <strong>
                {petType === "cat" ? "🐱" : "🐕"} {petName}
              </strong>{" "}
              · {breed}
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginTop: 6,
              }}
            >
              {city}, {district}
            </div>
          </div>
        </>
      );
    }

    /* specialist simplified 2 steps */
    if (step === 1) {
      return (
        <>
          <div className={styles.stepRow}>
            {[1, 2].map((n) => (
              <span key={n} style={{ display: "contents" }}>
                <div
                  className={`${styles.stepDot} ${step === n ? styles.stepActive : step > n ? styles.stepDone : styles.stepInactive}`}
                >
                  {n}
                </div>
                {n < 2 && (
                  <div
                    className={`${styles.stepLine} ${step > n ? styles.stepLineDone : ""}`}
                  />
                )}
              </span>
            ))}
          </div>
          <button
            type="button"
            className={styles.photoPlaceholder}
            onClick={() => showToast("Загрузите фото или логотип", "info")}
          >
            📷
          </button>
          <div className={styles.formGroup}>
            <label className={styles.label}>Имя / название</label>
            <input
              className={styles.input}
              value={specName}
              onChange={(e) => setSpecName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Категория</label>
            <input
              className={styles.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Район</label>
              <input
                className={styles.input}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Цена от (руб)</label>
              <input
                className={styles.input}
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={styles.stepRow}>
          {[1, 2].map((n) => (
            <span key={n} style={{ display: "contents" }}>
              <div
                className={`${styles.stepDot} ${step === n ? styles.stepActive : step > n ? styles.stepDone : styles.stepInactive}`}
              >
                {n}
              </div>
              {n < 2 && (
                <div
                  className={`${styles.stepLine} ${step > n ? styles.stepLineDone : ""}`}
                />
              )}
            </span>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Описание услуг</label>
          <textarea
            className={styles.textarea}
            rows={4}
            defaultValue="Профессиональный сервис для питомцев в вашем районе."
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Тариф</label>
          <select className={styles.select} defaultValue="free">
            <option value="free">Бесплатный профиль</option>
            <option value="pro">PRO</option>
          </select>
        </div>
      </>
    );
  };

  const maxStep = role === "owner" ? 3 : 2;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Link href="/" className={styles.brand}>
            Lil Zoo
          </Link>
          <h2>{title}</h2>
          <p>Выберите сценарий и заполните поля демо</p>
        </div>
        <div className={styles.body}>
          <Link href="/" className={styles.backLink}>
            ← На главную
          </Link>
          {!role ? (
            <>
              <div className={styles.roleGrid}>
                <button
                  type="button"
                  className={`${styles.roleCard} ${role === "owner" ? styles.roleSelected : ""}`}
                  onClick={() => setRole("owner")}
                >
                  <div className={styles.roleIcon}>🐾</div>
                  <h4>Владелец</h4>
                  <p>Профиль питомца и прогулки</p>
                </button>
                <button
                  type="button"
                  className={`${styles.roleCard} ${role === "specialist" ? styles.roleSelected : ""}`}
                  onClick={() => setRole("specialist")}
                >
                  <div className={styles.roleIcon}>✂️</div>
                  <h4>Специалист</h4>
                  <p>Услуги для pet-аудитории</p>
                </button>
              </div>
              <div className={styles.actions}>
                <Button
                  variant="primary"
                  fullWidth
                  disabled={!role}
                  onClick={() => role && setStep(1)}
                >
                  Продолжить
                </Button>
              </div>
            </>
          ) : (
            <>
              {renderSteps()}
              <div className={styles.actions}>
                <Button
                  variant="ghost"
                  className={styles.full}
                  onClick={() => {
                    if (step <= 1) {
                      setRole(null);
                      setStep(1);
                    } else setStep((s) => s - 1);
                  }}
                >
                  ← Назад
                </Button>
                {step < maxStep ? (
                  <Button
                    variant="primary"
                    className={styles.full}
                    onClick={() => setStep((s) => s + 1)}
                  >
                    Далее →
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className={styles.full}
                    onClick={finish}
                  >
                    Готово →
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
