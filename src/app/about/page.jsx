"use client";
import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { RiArticleFill, RiGithubLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<>
			<div className="h-full px-4 md:px-24 lg:pb-10 lg:pt-5 flex items-center">
				<div className="hidden lg:block">
					<div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-28">
						<div data-aos="fade-right" className="text-gray-300 space-y-10">
							<div className="flex text-center justify-start lg:text-5xl xl:text-6xl font-black">
								<SpringyText text="Kelechukwu I.O" />
							</div>

							<div className="text-gray-300 text-muted-main fluid-lg flex justify-center text-center lg:text-start">
								I'm a creative Frontend Developer passionate about converting
								ideas into standard and scalable products.
							</div>

							<div className="grid grid-cols-2 gap-4 justify-around">
								<Link
									href={
										"https://drive.google.com/file/d/13totF7IsI0a1ZiI80c20sovjmm6mhjCt/view?usp=drivesdk"
									}
									download
								>
									<div className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-8">
										<div className="flex justify-center">
											<RiArticleFill className="w-7 md:w-8 h-7 md:h-8" />
										</div>
										<div>My Resume</div>
									</div>
								</Link>
								<Link href={"https://github.com/kelechukwu1"}>
									<div className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-8">
										<div className="flex justify-center">
											<RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />
										</div>
										<div>My Github</div>
									</div>
								</Link>
							</div>
						</div>

						<div data-aos="fade-left">
							<Image
								src={"/KC.jpeg"}
								width={500}
								height={100}
								alt="kelechukwu's picture"
								className="rounded-xl"
							/>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-4 gap-20">
							<div
								data-aos="fade-up"
								className="col-span-1 mb-10 text-3xl space-y-3"
							>
								<SpringyText text="MY" />
								<SpringyText text="STORY" />
							</div>

							<div className="col-span-3">
								<div
									data-aos="fade-up"
									className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
								>
									Hello! My name is{" "}
									<span className="font-semibold">Kelechukwu</span>, I enjoy
									converting ideas into real life products and building
									solutions that runs on the internet. Over the last 3 years,
									I've developed products for businesses around the world, built
									projects from conceptualization to deployment, providing
									solutions on small business websites to enterprise web
									applications with focus on quality, accessibility and fast
									user experiences.
								</div>

								<div
									data-aos="fade-up"
									className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
								>
									Fast forward to today, having{" "}
									<span className="font-semibold">
										transitioned into tech from repairing mobile phones
									</span>{" "}
									in Owerri computer village (tetlow), I work as the{" "}
									<span className="font-semibold">lead Frontend engineer</span>{" "}
									at <span className="font-semibold">Remote Mobile Fix</span>,
									building accessible digital experience to make people connect
									to <span className="font-semibold"> phone repairers</span>{" "}
									within Owerri, Imo State, Nigeria. And to make phone repairers
									who don't own a physical shop to still meet and retain
									customers who can trust their online portfolio to have thier
									phones fixed and delivered to thier door step.
								</div>

								<div
									data-aos="fade-up"
									className="mb-10 text-muted-main fluid-lg text-gray-300 space-y-2"
								>
									<div className="font-semibold">What I work with:</div>
									<div>
										<span className="font-semibold">Languages:</span> Html,Css,
										Javascript, Typescript
									</div>
									<div>
										<span className="font-semibold">Technologies:</span>{" "}
										React.js, NextJs, Tailwind, Bootstrap, Redux-toolkit,
										Firebase, Git, Vercel, Netlify
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* small screen */}
				<div className="lg:hidden">
					<div className="flex justify-center mb-10 lg:hidden">
						<Image
							src={"/KC.jpeg"}
							width={350}
							height={200}
							alt="kelechukwu's picture"
							className="w-auto h-auto rounded-md"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4 justify-around mb-10">
						<Link
							href={
								"https://drive.google.com/file/d/13totF7IsI0a1ZiI80c20sovjmm6mhjCt/view?usp=drivesdk"
							}
							download
						>
							<div
								data-aos="fade-right"
								className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-6"
							>
								<div className="flex justify-center">
									<RiArticleFill className="w-7 md:w-8 h-7 md:h-8" />
								</div>
								<div>My Resume</div>
							</div>
						</Link>
						<Link href={"https://github.com/kelechukwu1"}>
							<div
								data-aos="fade-left"
								className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-6"
							>
								<div className="flex justify-center">
									<RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />
								</div>
								<div>My Github</div>
							</div>
						</Link>
					</div>

					<div
						data-aos="fade-up"
						className="text-2xl mb-5 md:text-4xl space-y-3"
					>
						<SpringyText text="MY" />
						<SpringyText text="STORY" />
					</div>

					<div
						data-aos="fade-up"
						className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
					>
						Hello! My name is <span className="font-semibold">Kelechukwu</span>,
						I enjoy converting ideas into real life products and building
						solutions that runs on the internet. Over the last 3 years, I've
						developed products for businesses around the world, built projects
						from conceptualization to deployment, providing solutions on small
						business websites to enterprise web applications with focus on
						quality, accessibility and fast user experiences.
					</div>

					<div
						data-aos="fade-up"
						className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
					>
						Fast forward to today, having{" "}
						<span className="font-semibold">
							transitioned into tech from repairing mobile phones
						</span>{" "}
						in Owerri computer village (tetlow), I work as the{" "}
						<span className="font-semibold">lead Frontend engineer</span> at{" "}
						<span className="font-semibold">Remote Mobile Fix</span>, building
						accessible digital experience to make people connect to{" "}
						<span className="font-semibold"> phone repairers</span> within
						Owerri, Imo State, Nigeria. And to make phone repairers who don't
						own a physical shop to still meet and retain customers who can trust
						their online portfolio to have thier phones fixed and delivered to
						thier door step.
					</div>

					<div
						data-aos="fade-up"
						className="mb-10 text-muted-main fluid-lg text-gray-300 space-y-2"
					>
						<div className="font-semibold">What I work with:</div>
						<div>
							<span className="font-semibold">Languages:</span> Html,Css,
							Javascript, Typescript
						</div>
						<div>
							<span className="font-semibold">Technologies:</span> React.js,
							NextJs, Tailwind, Bootstrap, Redux-toolkit, Firebase, Git, Vercel,
							Netlify
						</div>
					</div>
				</div>
				{/* small screens ends here */}
			</div>
		</>
	);
};
export default page;
