import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";
import { navigation } from "../data/navigation";
import { useCallback } from "react";

const Navbar = () => {
  const { activeSection, setManualNavigation, setActiveSection } =
    useActiveSection();

  const linkClasses = (section: string) =>
    `hover:text-blue-500 ${
      activeSection === section
        ? "text-blue-500"
        : "text-gray-700 dark:text-gray-200"
    }`;

  const handleNavClick = useCallback((id: string) => {
    setManualNavigation(true);
    setActiveSection(id);

    setTimeout(() => {
      setManualNavigation(false);
    }, 800);
  }, [setActiveSection, setManualNavigation]);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Siva Nakka
        </h1>

        <div className="flex items-center gap-6">
          <ul className="flex gap-8 text-sm font-medium">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClasses(id)}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;