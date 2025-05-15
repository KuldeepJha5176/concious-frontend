import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "./Button";

const DarkModeToggle = () => {
  // Initialize state from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    if (localStorage.getItem("theme") === "dark") {
      return true;
    }
    // Fall back to system preference
    if (localStorage.getItem("theme") === "light") {
      return false;
    }
    // If nothing in localStorage, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme effect
  useEffect(() => {
    // Update DOM
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <Button
      variant="drop"
      startIcon={
        isDark ? (
          <DarkMode style={{ fontSize: "medium" }} />
        ) : (
          <LightMode style={{ fontSize: "medium" }} />
        )
      }
      size="sm"
      onClick={toggleTheme}
    >
      {isDark ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default DarkModeToggle;