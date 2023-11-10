"use client";
import React from "react";
// import { Chip } from "../../components";
// import { useCursorContext } from "../../hooks";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { PiArrowSquareOutBold } from "react-icons/pi";
import SpringyText from "./springy-text/SpringyText";
import PrimaryButton from "./PrimaryButton";

// interface ProjectCardProps {
// 	proj: ProjectProps;
// }

const ProjectCard = () => {
	const projects = [
		{
			id: 1,
			name: "Fly ASAP",
			tools: "NextJs, TailwindCss",
			image: "/setup.jpg",
			github_link: "https://www.github.com/kelechukwu1",
			live_link: "https://www.flight-reservation-project.vercel.app",
			role: "role",
			description:
				"This is a web application which allows users to book and pay for thier flights seemlessly.",
			deployed_link: "deployed_link",
		},
		{
			id: 2,
			name: "Remote Mobile Fix",
			tools: "NextJs, TailwindCss",
			image: "/setup.jpg",
			github_link: "https://www.github.com/kelechukwu1",
			role: "null",
			description:
				"This web app enables users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
			deployed_link: "https://www.remote-mobile-fix.vercel.app",
		},
	];

	return (
		<div className="mx-4 md:mx-24 md:py-24 md:mb-10 items-center">
			<div className="mb-20">
				<div className=" flex mt-16 text-3xl md:text-4xl lg:text-5xl text-center justify-center lg:text-start lg:justify-start font-black">
					<SpringyText text="My Projects" />
				</div>
				<div className="flex mt-2 md:mt-5 md:mb-10 text-xl text-center justify-center lg:text-start lg:justify-start text-gray-300  ">
					Each one is unique. Take a look.
				</div>
			</div>

			{/* large screen design */}
			<div className="hidden lg:block">
				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div className="justify-end col-span-2">
						<Image
							src={"/setup.jpg"}
							alt={"setup screenshot"}
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
					<div className="space-y-5 col-span-1">
						<div className="flex lg:gap-3 items-center">
							<div className="text-xl text-gray-300">01</div>
							<div className="text-gray-100 font-bold text-3xl">Fly ASAP</div>
						</div>

						<div className="text-gray-300 text-xl  ">
							<div>
								This is a web application which allows users to book and pay for
								thier flights seemlessly.
							</div>
							<div>Stack/Tools : NextJs, TailwindCss</div>
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
									href={"https://www.flight-reservation-system.vercel.app"}
								>
									<PiArrowSquareOutBold className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div className="space-y-5 col-span-1">
						<div className="flex lg:gap-3 items-center">
							<div className="text-xl text-gray-300">02</div>
							<div className="text-gray-100 font-bold text-3xl">
								RemoteMobile Fix
							</div>
						</div>

						<div className="text-gray-300 text-xl  ">
							<div>
								This is a web application which allows users to book and pay for
								thier flights seemlessly.
							</div>
							<div>Stack/Tools : NextJs, TailwindCss</div>
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
									href={"https://www.flight-reservation-system.vercel.app"}
								>
									<PiArrowSquareOutBold className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div className="justify-end col-span-2">
						<Image
							src={"/setup.jpg"}
							alt={"setup screenshot"}
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

			<ul>
				<li>
					{projects.map((project) => (
						<div>
							{/* mobile design */}
							<div className="lg:hidden mb-20">
								<div className="items-center justify-center">
									<div>
										<Image
											src={project.image}
											alt={`${project.name} screenshot`}
											className="
                        pointer-events-none
                        rounded-sm
                        duration-400
                        ease-in-out
                        group-hover:scale-105
                        w-full h-[15rem]"
											width={900}
											height={10}
										/>
									</div>
									<div className="space-y-5 col-span-1 mt-10">
										<div className="flex text-xl text-gray-300 items-center gap-2">
											{`0${project.id}`}
											<span className="text-gray-100 text-2xl font-semibold">
												{project.name}
											</span>
										</div>
										<div className="text-gray-300 text-xl">
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
													<PiArrowSquareOutBold className="text-3xl text-gray-200" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</li>
			</ul>

			<div className="flex justify-center mt-10 md:mt-20">
				<Link className="mx-auto" href={"/projects"}>
					<PrimaryButton
						name="Projects Archive"
						type="solid"
						className="mx-auto md:mx-0 md:ml-auto"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
