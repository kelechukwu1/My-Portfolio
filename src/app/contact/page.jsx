import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import TwLink from "@/components/tw-link/TwLink";
import Section from "@/components/section/Section";
import SpringyText from "@/components/springy-text/SpringyText";

const socialsArr = [
	{
		name: "LinkedIn",
		link: "https://linkedin.com/in/kelechukwu-ikechukwu-9b7615225",
	},
	{ name: "Twitter", link: "https://twitter.com/Kelechukwu_1" },
	{ name: "Github", link: "https://github.com/kelechukwu1" },
];

const Contact = () => {
	const socials = socialsArr.map((social) => (
		<li key={social.name}>
			<TwLink className="text-lg text-white" href={social.link}>
				{social.name}
			</TwLink>
		</li>
	));

	return (
		<Section className="py-20 mx-4 md:mx-24 md:py-24 flex items-center">
			<main className="flex gap-16">
				<div className="flex w-full flex-col md:gap-12">
					<header
						className="flex flex-col items-center
            gap-2
            text-center
            md:items-start
            md:text-left"
					>
						<SpringyText
							className="justify-center text-3xl md:text-4xl lg:text-5xl"
							text="Get In Touch!"
						/>
						<h1 className="px-5 md:px-0 text-muted-main fluid-lg ">
							I’m currently open to joining a new team of creative developers.
							Also, if you have a question, proposal, idea or just want to say
							hi, Go ahead.
						</h1>
					</header>
					<ContactForm />
				</div>
				<div className="hidden w-1/2 flex-col gap-4 lg:flex">
					<Image
						src="/KC.jpeg"
						width={150}
						height={150}
						className="h-[150px] w-[150px] rounded-[100%]"
						alt={"Kelechukwu Ikechukwu's Profile Picture"}
					/>
					<div>
						<h3 className="fluid-md text-gray-300">Email</h3>
						<TwLink
							className="text-lg text-white"
							href="mailto:obiefunakelechukwu@gmail.com"
						>
							obiefunakelechukwu@gmail.com
						</TwLink>
					</div>
					<div>
						<h3 className="fluid-md text-gray-300">Socials</h3>

						<ul className="flex flex-col">{socials}</ul>
					</div>
				</div>
			</main>
		</Section>
	);
};

export default Contact;
