import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khalil Melhem | Portfolio",
  description:
    "Software Engineer with diverse experience in responsive web development, Co-Founder of Erbut, and Google DSC Lead at Yu.",
  applicationName: "My Portfolio",
  keywords: [
    "khalil melhem",
    "software engineer",
    "portfolio",
    "web developer",
    "erbut",
    "gdsc yu",
    "al yamamah university",
  ],
};

import { AppProvider } from "./provider";

import { Header, Footer } from "@/components/global";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={epilogue.className}>
        <AppProvider
          themeProviderProps={{
            attribute: "class",
            defaultTheme: "light",
          }}
        >
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
