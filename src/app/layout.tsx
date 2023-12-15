import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hey, I'm Khalil 👋🏻",
  description: "Khalil Melhem's personal website & portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
