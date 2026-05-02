import type { Metadata } from "next";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lil Zoo — питомцы и специалисты рядом",
  description:
    "Локальная pet-платформа: карта, прогулки, профили питомцев и каталог специалистов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
