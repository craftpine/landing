import React from "react";

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useClickOutSide(
  ref: React.RefObject<ValidRefTarget>,
  handler: () => void
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
