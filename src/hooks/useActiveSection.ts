import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/navigation";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isManualNavigation = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isManualNavigation.current) return;
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        navigation.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (!element) return;

          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);

            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    activeSection,
    setActiveSection,
    setManualNavigation: (v: boolean) => {
      isManualNavigation.current = v;
    },
  };
};