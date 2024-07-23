import { useEffect } from "react";

// https://medium.com/@paulohfev/problem-solving-custom-react-hook-for-keydown-events-e68c8b0a371
// Paul Evangelista's function + Leo's TS annotations
export function useKeyDown(callback: () => void, keys: string[]) {
  const onKeyDown = (e: KeyboardEvent) => {
    const wasAnyKeyPressed = keys.some((key) => e.key === key);
    if (wasAnyKeyPressed) {
      e.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
}
