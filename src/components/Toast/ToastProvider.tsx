"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./Toast.module.css";

type ToastKind = "success" | "info";

type ToastContextValue = {
  showToast: (message: string, kind?: ToastKind) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [kind, setKind] = useState<ToastKind>("info");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string, k: ToastKind = "info") => {
    if (timer.current) clearTimeout(timer.current);
    setMessage(msg);
    setKind(k);
    setOpen(true);
    timer.current = setTimeout(() => setOpen(false), 3200);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        id="toast"
        className={`${styles.toast} ${open ? styles.show : ""} ${kind === "success" ? styles.success : styles.info}`}
        role="status"
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}
