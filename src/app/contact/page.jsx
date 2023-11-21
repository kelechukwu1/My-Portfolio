"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import TwLink from "@/components/tw-link/TwLink";
import Section from "@/components/section/Section";
import SpringyText from "@/components/springy-text/SpringyText";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const socialsArr = [
	{
		name: "LinkedIn",
		link: "https://linkedin.com/in/kelechukwu-ikechukwu-9b7615225",
	},
	{ name: "Twitter", link: "https://twitter.com/Kelechukwu_1" },
	{ name: "Github", link: "https://github.com/kelechukwu1" },
];

const Contact = () => {
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	const socials = socialsArr.map((social) => (
		<li key={social.name}>
			<TwLink className="text-lg text-white" href={social.link}>
				{social.name}
			</TwLink>
		</li>
	));

	return (
		<Section className="pb-20 md:pb-0 mx-4 md:mx-24 md:py-24 flex items-center lg:text-start lg:justify-start lg:items-start">
			<main className="flex gap-16">
				<div
					data-aos="fade-right"
					className="flex w-full flex-col md:gap-12 lg:text-start lg:justify-start lg:items-start"
				>
					<header
						className="flex flex-col 
            gap-2
            text-center justify-center items-center lg:text-start lg:justify-start lg:items-start"
					>
						<SpringyText
							className="font text-3xl md:text-4xl lg:text-5xl lg:text-start lg:justify-start lg:items-start font-semibold"
							text="Get In Touch!"
						/>
						<h1 className="text-center lg:text-start lg:justify-start text-gray-300 md:px-0 lg:pr-20 xl:pr-44 text-muted-main fluid-lg">
							I’m currently open to joining a new team of creative developers.
							Also, if you have a question, proposal, idea or just want to say
							hi, Go ahead.
						</h1>
					</header>

					<div className="space-y-3 mt-20 text-gray-300">
						<div className="flex gap-3 items-center">
							<div>
								<CiLocationOn className="w-6 md:w-7 h-6 md:h-7" />
							</div>
							<div className="">Lagos, Nigeria</div>
						</div>
						<div className="flex gap-4 items-center">
							<div>
								<CiPhone className="w-6 md:w-7 h-6 md:h-7" />
							</div>
							<Link href="tel:+2349063646331">+2349063646331</Link>{" "}
						</div>
						<div className="flex gap-4 items-center">
							<div>
								<CiMail className="w-6 md:w-7 h-6 md:h-7" />
							</div>
							<Link href="mailto:obiefunakelechukwu@gmail.com">
								obiefunakelechukwu@gmail.com
							</Link>
						</div>
					</div>

					<ContactForm />
				</div>
				<div
					data-aos="fade-left"
					className="hidden w-1/2 flex-col gap-4 lg:flex"
				>
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
