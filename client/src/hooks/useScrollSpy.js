import { useEffect, useState } from "react";

// Replaces the inline scroll script from the original index.html
export default function useScrollSpy(ids, offset = 150) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id;
        }
      });

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}
