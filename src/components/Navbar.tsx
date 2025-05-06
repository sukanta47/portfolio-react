import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code } from "lucide-react";
import { Transition } from "@headlessui/react";
import { aboutMe } from "../data/data-me";
import { navItems } from "../data";
import { useTheme } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "../app/hooks";
import Badge from "./Badge";
import { useBreakpoint } from "../hooks/useBreakpoints";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledToShowTitle, setScrolledToShowTitle] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const dispatch = useAppDispatch();
  const breakpoint = useBreakpoint();
  const x_initial = breakpoint === "xs" ? 26 : breakpoint === "sm" ? 56 : breakpoint === "md" ? 24 : breakpoint === "lg" ? 44  : breakpoint === "xl" ? 44 : 10;
  const x_animate = breakpoint === "xs" ? 26 : breakpoint === "sm" ? 56 : breakpoint === "md" ? 24 : breakpoint === "lg" ? 44  : breakpoint === "xl" ? 44 : 10;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setScrolledToShowTitle(window.scrollY > 42);
      dispatch({
        type: "SET_SCROLLED_TO_SHOW_TITLE",
        payload: window.scrollY > 42,
      });
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 80; // Offset for navbar height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: topOffset - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-20">
            <div className="flex flex-col justify-center gap-1 h-[78px]">
              <motion.div
                className="ease-in-out hero-content max-w-2xl"
                animate={{
                  y: scrolledToShowTitle ? 2 : 0,
                  x: scrolledToShowTitle ? (breakpoint === "xs" ? 12 : breakpoint === "sm" ? 8 : breakpoint === "md" ? -4  : breakpoint === "lg" ? -10  : breakpoint === "xl" ? -12 : -14): 0,
                  scale: scrolledToShowTitle ? 1.3 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <a
                  href="#home"
                  className="ease-in-out flex items-center gap-2 text-primary-500 font-bold text-xl"
                >
                  <Code className="h-6 w-6" />
                  <span className="dark:text-white">{aboutMe.name}</span>
                </a>
              </motion.div>
              <AnimatePresence initial={false}>
                {scrolledToShowTitle && (
                  <motion.div
                    key="hero-badge"
                    className="ease-in-out hero-content max-w-2xl flex items-center"
                    initial={{ y: 10, opacity: 0, scale: 1.2, x: x_initial}}
                    animate={{ y: 0, opacity: 1, scale: 1, x:x_animate }} // shift left
                    exit={{ y: 10, opacity: 0, scale: 1.2, x:x_initial }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      scale: { type: "tween", duration: 0.4, bounce: 0.2 },
                    }}
                  >
                    <motion.span>
                      <Badge text={aboutMe.title} />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.href);
                    }}
                    className={`${
                      activeSection === item.href.substring(1)
                        ? "nav-link-active"
                        : "nav-link"
                    }`}
                    aria-current={
                      activeSection === item.href.substring(1)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div
          className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-md shadow-lg"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.href);
                }}
                className={`${
                  activeSection === item.href.substring(1)
                    ? "bg-primary-50 dark:bg-primary-900 text-primary-500 dark:text-primary-400"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700"
                } block px-3 py-2 rounded-md text-base font-medium`}
                aria-current={
                  activeSection === item.href.substring(1) ? "page" : undefined
                }
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
