"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Moon from "~icons/line-md/moon-alt-to-sunny-outline-loop-transition";
import Sun from "~icons/line-md/sunny-outline-to-moon-alt-loop-transition";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className="inline-flex rounded-2xl p-2 hover:bg-foreground hover:text-background"
      onClick={toggleTheme}
    >
      <Sun key={`sun-${key}`} className="size-6 scale-100 dark:scale-0" />
      <Moon
        key={`moon-${key}`}
        className="absolute size-6 scale-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
