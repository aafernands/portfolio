
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

const footerStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	backgroundColor: "var(--foreground)", // Use foreground for the background
	color: "var(--background)", // Use background for the text
};

const iconContainerStyle: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	gap: "20px",
	marginBottom: "10px",
};

const iconStyle: React.CSSProperties = {
	color: "var(--background)", // Use background for the icon color
	fontSize: "24px",
	textDecoration: "none",
};

const textStyle: React.CSSProperties = {
	fontSize: "14px",
	color: "var(--background)", // Use background for the text color
};

const Footer: React.FC = () => {
	return (
		<footer style={footerStyle}>
			<div style={iconContainerStyle}>
				<a
					href="https://x.com/alxdevlab"
					target="_blank"
					rel="noopener noreferrer"
					style={iconStyle}
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href="https://instagram.com/alxdevlab"
					target="_blank"
					rel="noopener noreferrer"
					style={iconStyle}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://linkedin.com/in/aafernands"
					target="_blank"
					rel="noopener noreferrer"
					style={iconStyle}
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
			<p style={textStyle}>
				© {new Date().getFullYear()} Your Name. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
