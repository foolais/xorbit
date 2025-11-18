"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      key={resolvedTheme}
      variant="outline"
      size="icon-lg"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer rounded-full relative"
    >
      <Sun className="size-6 absolute scale-0 rotate-100 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0" />
      <Moon className="size-6 scale-100 rotate-0 transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90" />
    </Button>
  );
};

export default ThemeButton;
