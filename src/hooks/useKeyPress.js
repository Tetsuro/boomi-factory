import { useEffect } from "react";

export default function useKeyPress(targetKey, handler) {
  function handleKeyDown({ keyCode }) {
    if (keyCode === targetKey) {
      handler();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
}
