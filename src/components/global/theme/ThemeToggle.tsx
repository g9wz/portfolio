"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import InitialMoonIcon from "~icons/line-md/moon-loop";
import MoonIcon from "~icons/line-md/sunny-outline-to-moon-alt-loop-transition";

import InitialSunIcon from "~icons/line-md/sunny-outline-loop";
import SunIcon from "~icons/line-md/moon-alt-to-sunny-outline-loop-transition";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [key, setKey] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (!hasBeenClicked) {
      setHasBeenClicked(true);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex rounded-2xl p-2 hover:bg-foreground hover:text-background"
    >
      {theme === "dark" ? (
        hasBeenClicked ? (
          <SunIcon key={`sun-${key}`} className="size-6" />
        ) : (
          <InitialSunIcon key={`initial-sun-${key}`} className="size-6" />
        )
      ) : hasBeenClicked ? (
        <MoonIcon key={`moon-${key}`} className="size-6" />
      ) : (
        <InitialMoonIcon key={`initial-moon-${key}`} className="size-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
