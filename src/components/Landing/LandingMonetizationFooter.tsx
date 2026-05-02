"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { MonetizationModal } from "./MonetizationModal";
import styles from "./LandingMonetizationFooter.module.css";

export function LandingMonetizationFooter() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        📊 Бизнес-модель и MVP
      </Button>
      <MonetizationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
