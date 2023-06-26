import { useEffect } from "react";

export const useKeyPress = (targetKey, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === targetKey) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, callback]);
};
