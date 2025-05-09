import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "./Button";

// Define the props type
interface DarkModeToggleProps {
  themeText: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ themeText }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    console.log(
      "DarkModeToggle: Theme changed to",
      darkMode ? "dark" : "light"
    );

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Trigger a custom event that DropDown can listen for
    window.dispatchEvent(new Event("themechange"));
  }, [darkMode]);

  const handleToggle = () => {
    console.log(
      "DarkModeToggle: Button clicked, toggling from",
      darkMode ? "dark" : "light"
    );
    setDarkMode(!darkMode);
  };

  return (
    <Button
      variant="drop"
      startIcon={
        darkMode ? (
          <DarkMode style={{ fontSize: "16px" }} />
        ) : (
          <LightMode style={{ fontSize: "16px" }} />
        )
      }
      size="sm"
      onClick={handleToggle}
    >
      {themeText}
    </Button>
  );
};

export default DarkModeToggle;
