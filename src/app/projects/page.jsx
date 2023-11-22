"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	const projects = [
		{
			id: 1,
			name: "Fly Asap",
			tools: "NextJs, TailwindCss, Redux Toolkit, Firebase",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/flight-reservation-website",
			live_link: "https://flight-reservation-project.vercel.app",
			description:
				"This is a web application which allows users to book and pay for thier flights seemlessly.",
		},
		{
			id: 2,
			name: "GetLinkedAI",
			tools: "NextJs, TailwindCss, GSAP, AOS.js",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/getlinkedAI",
			live_link: "https://getlinked-ai-psi.vercel.app",
			description:
				"A 5-days hackathon project I participated, built and completed together with Ayoola my good friend, we ensured maximum responsiveness and built beautiful components and pages, also played around with getLinkedAI API",
		},
		{
			id: 3,
			name: "Remote Mobile Fix",
			tools: "NextJs, TailwindCss, Redux Toolkit, Firebase",
			image: "/remotefix.png",
			github_link: "https://github.com/kelechukwu1/remote-mobile-fix",
			description:
				"This web app enables users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
			live_link: "https://remote-mobile-fix.vercel.app",
		},

		{
			id: 4,
			name: "Abeg Help",
			tools: "NextJs, TailwindCss",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/abeg-help",
			live_link: "https://github.com/abeg-help",
			description:
				"This is a community project I'm participating actively on currently, we are solving issues with fund raising in Nigeria",
		},
	];

	return (
		<div className="mx-4 md:mx-24 md:pb-24 md:mb-10 items-center">
			<div data-aos="fade-down" className="mb-16">
				<div className="font justify-start mt-5 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
					<SpringyText text="My Projects" />
				</div>
				<div className="text-start mt-2 md:mt-5 md:mb-10 text-muted-main fluid-lg text-gray-300">
					Each one is unique. Take a look.
				</div>
			</div>

			{/* large screen design */}
			<div className="hidden lg:block">
				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div data-aos="fade-right" className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
							alt={"project screenshot"}
							className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem]"
							width={900}
							height={10}
						/>
					</div>
					<div data-aos="fade-left" className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5 font">01</div>
							<div className="text-gray-100 font-bold text-3xl font">
								Fly ASAP
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This is a web application which allows users to book and pay for
								their flights seamlessly.
							</div>
							<div>
								<span className="font-semibold font">Stack/Tools:</span> NextJs,
								TailwindCss, Redux Toolkit, Firebase
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={
										"https://github.com/kelechukwu1/flight-reservation-website"
									}
								>
									<AiOutlineGithub className="text-3xl text-gray-200" />
								</Link>
							</div>
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://flight-reservation-system.vercel.app"}
								>
									<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div>
						<div data-aos="fade-right" className="space-y-5 col-span-1">
							<div className="lg:gap-3 items-center">
								<div className="text-xl text-gray-300 mb-5 font">02</div>
								<div className="text-gray-100 font-bold text-3xl font">
									GetLinkedAI
								</div>
							</div>

							<div className="text-gray-300 text-muted-main fluid-lg">
								<div>
									A 5-days hackathon project I participated, built and completed
									with Ayoola my good friend, we ensured maximum responsiveness
									and built beautiful components and pages, also played around
									with getLinkedAI API.
								</div>
								<span className="font-semibold font">Stack/Tools:</span> NextJs,
								TailwindCss, GSAP, AOS.js
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://github.com/kelechukwu1/getlinkedAI"}
								>
									<AiOutlineGithub className="text-3xl text-gray-200" />
								</Link>
							</div>
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://getlinked-ai-psi.vercel.app"}
								>
									<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div data-aos="fade-left" className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
							alt={"project screenshot"}
							className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem]"
							width={900}
							height={10}
						/>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div data-aos="fade-right" className="justify-end col-span-2">
						<Image
							src={"/remotefix.png"}
							alt={"project screenshot"}
							className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[full]"
							width={900}
							height={10}
						/>
					</div>
					<div data-aos="fade-left" className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5 font">03</div>
							<div className="text-gray-100 font-bold text-3xl font">
								Remote Mobile Fix
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This web app enables users in Owerri (capital of Imo State,
								Nigeria) to locate phone repairers close to thier location.
							</div>
							<div>
								<span className="font-semibold font">Stack/Tools:</span> NextJs,
								TailwindCss, Redux Toolkit, Firebase
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://github.com/kelechukwu1/remote-mobile-fix"}
								>
									<AiOutlineGithub className="text-3xl text-gray-200" />
								</Link>
							</div>
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://remote-mobile-fix.vercel.app"}
								>
									<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div data-aos="fade-right" className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5 font">04</div>
							<div className="text-gray-100 font-bold text-3xl font">
								Abeg Help
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This is a community project I'm participating actively on
								currently to solve issues with fund raising in Nigeria.
							</div>
							<div>
								<span className="font-semibold font">Stack/Tools:</span> NextJs,
								TailwindCss
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://github.com/kelechukwu1/abeg-help"}
								>
									<AiOutlineGithub className="text-3xl text-gray-200" />
								</Link>
							</div>
							<div>
								<Link
									// onMouseEnter={() => githubProjectCursor()}
									// onMouseLeave={() => projectCursor()}
									rel="noopener noreferrer"
									target="_blank"
									href={"https://www.abeg-help.vercel.app"}
								>
									<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div data-aos="fade-right" className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
							alt={"project screenshot"}
							className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem]"
							width={900}
							height={10}
						/>
					</div>
				</div>
			</div>

			<div>
				{projects.map((project) => (
					<div key={project.id}>
						{/* mobile design */}
						<div className="lg:hidden mb-20">
							<div className="items-center justify-center">
								<div data-aos="fade-right">
									<Image
										src={project.image}
										alt={`${project.name} screenshot`}
										className="
                        pointer-events-none
                        rounded-sm
                        duration-400
                        ease-in-out
                        group-hover:scale-105
                        w-full h-[100%]"
										width={900}
										height={10}
									/>
								</div>
								<div data-aos="fade-left" className="space-y-3 col-span-1 mt-5">
									<div className="flex text-md font text-gray-300 items-center gap-1">
										{`0${project.id}`}
										<span className="text-gray-100 font text-xl font-semibold">
											{project.name}
										</span>
									</div>
									<div className="text-gray-300 text-muted-main fluid-lg">
										<div>{project.description}</div>
										<div>
											<span className="font-semibold font">Stack/Tools:</span>{" "}
											{project.tools}
										</div>
									</div>
									<div className="flex gap-5 items-center">
										<div>
											<Link
												// onMouseEnter={() => githubProjectCursor()}
												// onMouseLeave={() => projectCursor()}
												rel="noopener noreferrer"
												target="_blank"
												href={"https://www.github.com/kelechukwu1"}
											>
												<AiOutlineGithub className="text-3xl text-gray-200" />
											</Link>
										</div>
										<div>
											<Link
												// onMouseEnter={() => githubProjectCursor()}
												// onMouseLeave={() => projectCursor()}
												rel="noopener noreferrer"
												target="_blank"
												href={
													"https://www.flight-reservation-system.vercel.app"
												}
											>
												<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
