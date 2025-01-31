"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"; // Import sun and moon icons
import Image from "next/image"; // Import next/image for image optimization

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(false); // To track if the system theme is used
  const drawerRef = useRef<HTMLDivElement>(null); // Updated type

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Handle manual toggle for dark mode
  const handleToggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (isSystemTheme) {
      // If system theme is active, toggle to manual dark mode
      setIsSystemTheme(false);
    } else {
      // Toggle dark mode manually
      htmlElement.classList.toggle("dark");
      setIsDarkMode(!isDarkMode);
      // Save the preference in localStorage
      if (!isDarkMode) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  };


 // Listen to changes in the system theme preference
 useEffect(() => {
  // Check system preference on initial load
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
    setIsSystemTheme(false); // Manual theme
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
    setIsSystemTheme(false); // Manual theme
  } else {
    // Respect system theme if no manual preference is set
    document.documentElement.classList.toggle("dark", systemPrefersDark);
    setIsDarkMode(systemPrefersDark);
    setIsSystemTheme(true);
  }
}, []);

  // Detect system theme preference changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!isSystemTheme) {
        // If system theme is active, update manually
        document.documentElement.classList.toggle("dark", e.matches);
        setIsDarkMode(e.matches);
      }
    };

    mediaQueryList.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleSystemThemeChange);
    };
  }, [isSystemTheme]);

  return (
    <nav className="p-6 bg-custom-light dark:bg-custom-dark backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 fixed top-0 left-0 right-0 z-50 shadow-lg"
    // <nav className="p-4 bg-custom-light dark:bg-custom-dark backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 fixed top-0 left-0 right-0 z-50 rounded-lg shadow-lg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        // margin: "10px",
        // borderRadius: "15px",
        boxShadow: isDarkMode
          ? "0 4px 8px rgb(0, 28, 75), 0 0 10px rgb(0, 28, 75)" // Glowing turquoise shadow
          : "0 4px 8px rgba(0, 0, 0, 0.5)", // Light mode shadow
      }}

    >
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo Section */}
        <div className=" flex items-center space-x-4">
          <div>
            <Link href="/">
              <Image
                src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
                alt="Logo"
                className="h-10 w-20"
                width={200} // Specify the width
                height={100} // Specify the height
              />
            </Link>
          </div>
        </div>

        {/* Dark Mode Toggle and Menu Icon */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={handleToggleDarkMode}
            className="text-white text-2xl"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px"
            }}
          >
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                style={{ color: "white" }} 
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "black" }}
              />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleDrawer} className="text-white">
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className="text-3xl "
                style={{
                  color: "",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars} // Menu light mode
                className="text-3xl"
                style={{
                  color: "black",
                }} // Menu dark mode
              />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <Link
          href="/"
          className="hover:text-white"
          style={{
            color: isDarkMode ? "var(--background)" : "var(--foreground)",
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="hover:text-white"
          style={{
            color: isDarkMode ? "var(--background)" : "var(--foreground)",
          }}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-white"
          style={{
            color: isDarkMode ? "var(--background)" : "var(--foreground)",
          }}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-white"
          style={{
            color: isDarkMode ? "var(--background)" : "var(--foreground)",
          }}
        >
          Contact
        </Link>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"
          onClick={toggleDrawer} // Close drawer when overlay is clicked
        />
      )}

      {/* Sliding Drawer */}
      <div
        ref={drawerRef} // Drawer ref
        className={`fixed top-0 left-0 h-full w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`} // Drawer z-index higher than overlay
        style={{
          backgroundColor: isDarkMode
            ? "var(--background)"
            : "var(--background)", // Tray background color
          color: isDarkMode ? "var(--foreground)" : "var(--foreground)", // Tray text color
        }}
      >
        <button
          onClick={toggleDrawer}
          className="p-4 absolute top-4 right-4"
          style={{
            color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="p-4 space-y-4">
          <Link
            href="/"
            onClick={toggleDrawer}
            className="block"
            style={{
              color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
            }}
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={toggleDrawer}
            className="block"
            style={{
              color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={toggleDrawer}
            className="block"
            style={{
              color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
            }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={toggleDrawer}
            className="block"
            style={{
              color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
