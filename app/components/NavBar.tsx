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
  const drawerRef = useRef<HTMLDivElement>(null); // Updated type

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode manually
  const handleToggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode); // Update dark mode state
  };



  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="p-4"
      style={{
        color: isDarkMode ? "var(--background)" : "var(--foreground)",
        backgroundColor: isDarkMode ? "var(--background)" : "var(--foreground)",
        position: "fixed", // Fix navbar to the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50, // Ensure navbar stays on top
        margin: "10px", // Add margin around the navbar
        borderRadius: "15px", // Rounded borders
        boxShadow: isDarkMode
          ? "0 4px 8px rgba(6, 28, 28, 0.5), 0 0 10px rgba(29, 54, 54, 0.7)" // Glowing turquoise shadow in dark mode
          : "0 4px 8px rgba(0, 0, 0, 0.2)", // Regular shadow in light mode
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div>
            <Link href="/">
              <Image
                src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"}
                alt="Logo"
                className="h-10 w-20"
                width={100} // Specify the width
                height={50} // Specify the height
              />
            </Link>
          </div>
        </div>

        {/* Dark Mode Toggle and Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={handleToggleDarkMode}
            className="text-white"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                style={{ color: "var(--foreground)" }} // Sun icon for light mode
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "var(--background)" }} // Moon icon for dark mode
              />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleDrawer} className="text-white">
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className="text-3xl"
                style={{
                  color: "var(--foreground)",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars} // Menu light mode
                className="text-3xl"
                style={{
                  color: "var(--background)",
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
