import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import TwLink from "@/components/tw-link/TwLink";
import Section from "@/components/section/Section";
import SpringyText from "@/components/springy-text/SpringyText";
import {
	RiPhoneLine,
	RiInbox2Line,
	RiUserLocationLine,
	RiMailLine,
} from "react-icons/ri";
import Link from "next/link";

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
		<Section className="py-20 mx-4 md:mx-24 md:py-24 flex items-center lg:text-start lg:justify-start lg:items-start">
			<main className="flex gap-16">
				<div className="flex w-full flex-col md:gap-12 lg:text-start lg:justify-start lg:items-start">
					<header
						className="flex flex-col 
            gap-2
            text-center justify-center items-center lg:text-start lg:justify-start lg:items-start"
					>
						<SpringyText
							className="text-3xl md:text-4xl lg:text-5xl lg:text-start lg:justify-start lg:items-start font-semibold"
							text="Get In Touch!"
						/>
						<h1 className="text-center lg:text-start lg:justify-start text-gray-300 md:px-0 lg:pr-20 xl:pr-44 text-muted-main fluid-lg">
							I’m currently open to joining a new team of creative developers.
							Also, if you have a question, proposal, idea or just want to say
							hi, Go ahead.
						</h1>
					</header>

					<div className="space-y-3 mt-20 text-gray-300">
						<div className="flex gap-4 items-center">
							<div>
								<RiUserLocationLine className="w-7 md:w-8 h-7 md:h-8" />
							</div>
							<div className="font">Lagos, Nigeria</div>
						</div>
						<div className="flex gap-4 items-center">
							<div>
								<RiPhoneLine className="w-7 md:w-8 h-7 md:h-8" />
							</div>
							<Link href={"+2349063646331"}>+2349063646331</Link>
						</div>
						<div className="flex gap-4 items-center">
							<div>
								<RiMailLine className="w-7 md:w-8 h-7 md:h-8" />
							</div>
							<Link href="mailto:obiefunakelechukwu@gmail.com">
								obiefunakelechukwu@gmail.com
							</Link>
						</div>
					</div>

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
