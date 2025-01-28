import React from "react";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div
					className="text-4xl font-thin font-roboto text-center sm:text-left"
					style={{ color: "var(--foreground)" }}
				>
					<span className="text-8xl font-thin font-roboto text-center sm:text-left">
						ALEX
					</span>
					<br></br>
					FERNANDES
				</div>
				<p className="text-[14px]">THE JOURNEY OF A FRONT-END WEB DEVELOPER</p>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Image
						// className="dark:invert"
						src="/aboutPhoto.png"
						alt="Next.js logo"
						width={180}
						height={38}
						priority
					/>
				</div>
				<p className="text-[14px]">Welcome to my portfolio.</p>
				<p className="text-[12px]">
					Hi I am Alex Fernandes, a skilled web developer with expertise in
					React, Next.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js,
					MySQL, and MongoDB. I specialize in creating high-performance,
					scalable web applications, delivering responsive and efficient
					solutions. I also have experience in Salesforce development,
					optimizing workflows with customized solutions. Fluent in Portuguese
					and English, I thrive in collaborative environments and stay updated
					with the latest industry trends to deliver cutting-edge web solutions.
				</p>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
};

export default HeroSection;
