
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icons to the library
library.add(faTwitter, faInstagram, faLinkedin);


const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col items-center p=20 bg-custom-light dark:bg-custom-dark ">
			<div className="flex justify-center gap-x-8 gap-y-4 my-20">
				<a
					href="https://x.com/alxdevlab"
					target="_blank"
					rel="noopener noreferrer"
					className="text-black dark:text-white text-2xl"
				>
					<FontAwesomeIcon icon={faTwitter} />
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
			<p className="text-black dark:text-white text-1xl pb-5">
				© {new Date().getFullYear()} Your Name. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
