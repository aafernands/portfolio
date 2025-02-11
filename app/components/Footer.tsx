"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image"; // Import next/image for image optimization

// Add the icons to the library
library.add(faXTwitter, faInstagram, faLinkedin);

const Footer: React.FC = () => {

	const [currentYear, setCurrentYear] = useState<number | null>(null);

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);



	return (
		<footer className="flex flex-col items-center py-10 bg-custom-light dark:bg-custom-dark">
			<div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-2/3 mb-10">
				<div className="flex items-center space-x-4 mb-4 lg:mb-0">
					<Image width={200}
						height={100} src="/aboutPhoto2.png" alt="Profile" className="w-20 h-20 rounded-full" />
					<div className="flex flex-col">
						<p className="text-black dark:text-white text-lg">Alex Fernandes</p>
						<p className="text-black dark:text-white text-sm">Web Developer</p>
					</div>
				</div>
				<div className="flex flex-col items-center lg:items-start">
					<p className="p=20 text-black dark:text-white text-lg">
						Get in touch
					</p>
					<p className="text-black dark:text-white text-sm">Email me: contact@alxdevlab.com</p>
					<div className="flex justify-center gap-x-8 gap-y-4 py-10 mb-10">
						<a
							href="https://x.com/alxdevlab"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black dark:text-white text-2xl"
						>
							<FontAwesomeIcon icon={faXTwitter} />
						</a>
						<a
							href="https://instagram.com/alxdevlab"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black dark:text-white text-2xl"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://linkedin.com/in/aafernands"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black dark:text-white text-2xl"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
			<p className="text-black dark:text-white text-sm pb-5">
				© {currentYear ?? "Loading..."} Alex Fernandes. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
