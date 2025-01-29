"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const drawerRef = useRef<HTMLDivElement>(null); // Updated type

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	// Detect dark mode preference
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDarkMode(mediaQuery.matches);

		const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

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
				// color: "var(--foreground)",
				// color: "white",
				// backgroundColor: "var(--foreground)",
			}}
		>
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo and Brand Name Container */}
				<div className="flex items-center space-x-4">
					{/* Logo */}
					<div>
						<img
							src={isDarkMode ? "./logo-white.png" : "./logo-black.png"}
							alt="Logo"
							className="h-10 w-20"
						/>
						
					</div>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button onClick={toggleDrawer} className="text-white">
						<FontAwesomeIcon
							icon={isOpen ? faTimes : faBars}
							className="text-3xl"
							style={{
								color: "var(--foreground)",
								// color: "white",
							}}
						/>
					</button>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex space-x-4">
					<Link
						href="/"
						className="hover:text-white"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="hover:text-white"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						About
					</Link>
					<Link
						href="/projects"
						className="hover:text-white"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className="hover:text-white"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						Contact
					</Link>
				</div>
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
				className={`fixed top-0 left-0 h-full w-64 transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
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
						href="/about"
						onClick={toggleDrawer}
						className="block"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						About
					</Link>
					<Link
						href="/projects"
						onClick={toggleDrawer}
						className="block"
						style={{
							color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
						}}
					>
						Projects
					</Link>
					<Link
						href="/contact"
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
