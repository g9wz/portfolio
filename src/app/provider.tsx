"use client";

import { useEffect } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import AOS from "aos";
import "aos/dist/aos.css";

import { setupRemoveTabIndex } from "@/utils/remove-tabindex";

interface AppProviderProps {
  children: React.ReactNode;
  themeProviderProps?: Omit<ThemeProviderProps, "children">;
}

export function AppProvider({
  children,
  themeProviderProps,
}: AppProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 100,
      once: true,
    });

    const disconnectObserver = setupRemoveTabIndex();

    return () => disconnectObserver();
  }, []);

  return (
    <NextThemesProvider {...themeProviderProps}>{children}</NextThemesProvider>
  );
}
