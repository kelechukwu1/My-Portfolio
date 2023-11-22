"use client";
import React, { useEffect } from "react";
// import { Chip } from "../../components";
// import { useCursorContext } from "../../hooks";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SpringyText from "./springy-text/SpringyText";
import PrimaryButton from "./PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

// interface ProjectCardProps {
// 	proj: ProjectProps;
// }

const ProjectCard = () => {
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
			name: "GetLinkedAI",
			tools: "NextJs, TailwindCss, GSAP, AOS.js",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/getlinkedAI",
			live_link: "https://www.getlinked-ai-psi.vercel.app",
			description:
				"A 5-days hackathon project I participated, built and completed together with Ayoola my good friend, we ensured maximum responsiveness and built beautiful components and pages, also played around with getLinkedAI API",
		},

		{
			id: 2,
			name: "Remote Mobile Fix",
			tools: "NextJs, TailwindCss",
			image: "/remotefix.png",
			github_link: "https://github.com/kelechukwu1/remote-mobile-fix",
			description:
				"This web app enables users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
			live_link: "https://www.remote-mobile-fix.vercel.app",
		},
	];

	return (
		<div className="mx-4 md:mx-24 mb-10 md:py-24 items-center">
			<div className="mb-10">
				<div className="font flex mt-16 text-3xl md:text-4xl lg:text-5xl text-center justify-center lg:text-start lg:justify-start font-black">
					<SpringyText text="My Projects" />
				</div>
				<div className="flex mt-2 md:mt-5 md:mb-10 text-muted-main fluid-lg text-center justify-center lg:text-start lg:justify-start text-gray-300  ">
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
							width={500}
							height={500}
						/>
					</div>
					<div data-aos="fade-left" className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="font text-xl text-gray-300 mb-5">01</div>
							<div className="text-gray-100 font-bold text-3xl font">
								GetLinkedAI
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								A 5-days hackathon project I participated, built and completed
								together with Ayoola my good friend, we ensured maximum
								responsiveness and built beautiful components and pages, also
								played around with getLinkedAI API.
							</div>
							<div>Stack/Tools : NextJs, TailwindCss, GSAP, AOS.js</div>
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
									href={"https://www.getlinked-ai-psi.vercel.app"}
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
							<div className="font text-xl text-gray-300 text-end mb-5">02</div>
							<div className="font text-gray-100 font-bold text-3xl text-end">
								RemoteMobile Fix
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg text-end">
							<div>
								This is a web application which allows users to book and pay for
								thier flights seemlessly.
							</div>
							<div>Stack/Tools : NextJs, TailwindCss</div>
						</div>
						<div className="flex gap-5 items-center justify-end">
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
									href={"https://www.remote-mobile-fix.vercel.app"}
								>
									<HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div data-aos="fade-left" className="justify-end col-span-2">
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
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>

			<div>
				{projects.map((project) => (
					<div key={project.name}>
						{/* mobile design */}
						<div className="lg:hidden mb-16">
							<div className="items-center justify-center">
								<div data-aos="fade-down">
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
								<div data-aos="fade-up" className="space-y-3 col-span-1 mt-5">
									<div className="font flex text-md text-gray-300 items-center gap-1">
										{`0${project.id}`}
										<span className="font text-gray-100 text-xl font-semibold">
											{project.name}
										</span>
									</div>
									<div className="text-gray-300 text-muted-main fluid-lg">
										<div className=" ">{project.description}</div>
										<div className=" ">Stack/Tools : {project.tools}</div>
									</div>
									<div className="flex gap-5 items-center">
										<div>
											<Link
												// onMouseEnter={() => githubProjectCursor()}
												// onMouseLeave={() => projectCursor()}
												rel="noopener noreferrer"
												target="_blank"
												href={project.github_link}
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
												href={project.live_link}
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

			<div data-aos="fade-up" className="flex justify-center mt-10 md:mt-20">
				<Link className="mx-auto" href={"/projects"}>
					<PrimaryButton
						name="Projects Archive"
						type="solid"
						className="font mx-auto md:mx-0 md:ml-auto"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
