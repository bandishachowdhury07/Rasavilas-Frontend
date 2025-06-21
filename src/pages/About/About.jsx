import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe, FaFileAlt } from "react-icons/fa";

const socialLinks = [
	{
		href: "mailto:bandishachowdhury07@gmail.com",
		icon: <FaEnvelope className="text-orange-600" />,
		label: "Email",
		text: "Email",
	},
	{
		href: "https://drive.google.com/drive/folders/102GjWGmyDGAOZz2w0rD0LeOvHjmTCvIQ",
		icon: <FaFileAlt className="text-orange-600" />,
		label: "Resume",
		text: "Resume",
	},
	{
		href: "https://github.com/bandishachowdhury07",
		icon: <FaGithub className="text-orange-600" />,
		label: "GitHub",
		text: "GitHub",
	},
	{
		href: "https://www.linkedin.com/in/bandishachowdhury07/",
		icon: <FaLinkedin className="text-orange-600" />,
		label: "LinkedIn",
		text: "LinkedIn",
	},
	{
		href: "https://bento.me/bandishachowdhury07",
		icon: <FaGlobe className="text-orange-600" />,
		label: "Portfolio",
		text: "Portfolio",
	},
];

const About = () => {
	return (
		<section className="min-h-screen bg-white flex flex-col items-center py-16 px-4">
			<div className="w-full max-w-3xl flex flex-col items-center justify-center text-center mb-12 mx-auto">
				<h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
					Hi, I'm Bandisha Chowdhury
				</h1>
				<p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
					I'm a passionate Computer Science Engineering student. I love building
					beautiful, functional web applications and exploring new technologies.
					Rasavilas is my project where I combine creativity and code to deliver
					delightful digital experiences.
				</p>
				<div className="flex flex-wrap gap-4 justify-center">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-100 bg-white shadow-sm hover:bg-orange-50 transition-colors text-orange-700 font-medium text-base"
							title={link.label}
						>
							{link.icon}
							<span className="hidden sm:inline">{link.text}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
