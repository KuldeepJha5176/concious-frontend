import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
}

export default function TypewriterEffect({ 
  text, 
  delay = 3 
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  // Use span instead of div to avoid invalid nesting in a <p> element
  return <span>{displayText}</span>;
}