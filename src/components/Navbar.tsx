import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";
import { navigation } from "../data/navigation";
import { useCallback, useState } from "react";

const Navbar = () => {
  const { activeSection, setManualNavigation, setActiveSection } =
    useActiveSection();

  const [isOpen, setIsOpen] = useState(false);
  
  const linkClasses = (section: string) =>
    `block py-2 hover:text-blue-500 ${
      activeSection === section
        ? "text-blue-500"
        : "text-gray-700 dark:text-gray-200"
    }`;

  const handleNavClick = useCallback(
    (id: string) => {
      setManualNavigation(true);
      setActiveSection(id);
      setIsOpen(false); // close menu on click

      setTimeout(() => {
        setManualNavigation(false);
      }, 800);
    },
    [setActiveSection, setManualNavigation]
  );

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          className="text-lg sm:text-xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Siva Nakka
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;