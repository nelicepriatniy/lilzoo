"use client";

import { useState } from "react";
import type { CabinetTab } from "@/data/types";
import { defaultUser, dialogs, pets, specialists } from "@/data/mock";
import { useToast } from "@/components/Toast/ToastProvider";
import { AppBottomNav } from "./AppBottomNav/AppBottomNav";
import { AppHeader } from "./AppHeader/AppHeader";
import { AppSidebar } from "./AppSidebar/AppSidebar";
import styles from "./CabinetShell.module.css";
import { MapTab } from "./MapTab/MapTab";
import { MessagesTab } from "./MessagesTab/MessagesTab";
import { PetsTab } from "./PetsTab/PetsTab";
import { ProfileTab } from "./ProfileTab/ProfileTab";
import { SpecialistsTab } from "./SpecialistsTab/SpecialistsTab";

export function CabinetShell() {
  const { showToast } = useToast();
  const [tab, setTab] = useState<CabinetTab>("map");

  const content =
    tab === "map" ? (
      <MapTab
        pets={pets}
        specialists={specialists}
        onToast={(msg, k) => showToast(msg, k ?? "info")}
      />
    ) : tab === "pets" ? (
      <PetsTab
        pets={pets}
        onToast={(msg, k) => showToast(msg, k ?? "info")}
      />
    ) : tab === "specialists" ? (
      <SpecialistsTab specialists={specialists} />
    ) : tab === "messages" ? (
      <MessagesTab dialogs={dialogs} />
    ) : (
      <ProfileTab
        user={defaultUser}
        onToast={(msg, k) => showToast(msg, k ?? "info")}
      />
    );

  return (
    <div className={styles.root}>
      <AppHeader
        onNotifications={() => showToast("3 новых уведомления", "info")}
        onProfile={() => setTab("profile")}
      />
      <div className={styles.body}>
        <AppSidebar tab={tab} onTab={setTab} />
        <main className={styles.main}>{content}</main>
      </div>
      <AppBottomNav tab={tab} onTab={setTab} />
    </div>
  );
}
