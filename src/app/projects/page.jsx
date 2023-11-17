import React from "react";
import Link from "next/link";
import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { PiArrowSquareOutBold } from "react-icons/pi";
// import supabase from "../../config/supabaseClient";

const Projects = () => {
	const projects = [
		{
			id: 1,
			name: "Fly Asap",
			tools: "NextJs, TailwindCss, Redux Toolkit, Firebase",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/flight-reservation-website",
			live_link: "https://www.flight-reservation-project.vercel.app",
			description:
				"This is a web application which allows users to book and pay for thier flights seemlessly.",
		},
		{
			id: 2,
			name: "GetLinkedAI",
			tools: "NextJs, TailwindCss, GSAP, AOS.js",
			image: "/getlinked.png",
			github_link: "https://github.com/kelechukwu1/getlinkedAI",
			live_link: "https://www.getlinked-ai-psi.vercel.app",
			description:
				"A 5-days hackathon project I participated, built and completed with Ayoola my good friend, we ensured maximum responsiveness and built beautiful components and pages, also played around with getLinkedAI API",
		},
		{
			id: 3,
			name: "Remote Mobile Fix",
			tools: "NextJs, TailwindCss, Redux Toolkit, Firebase",
			image: "/remotefix.png",
			github_link: "https://github.com/kelechukwu1/remote-mobile-fix",
			description:
				"This web app enables users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
			live_link: "https://www.remote-mobile-fix.vercel.app",
		},

		{
			id: 4,
			name: "Abeg Help",
			tools: "NextJs, TailwindCss",
			image: "/getlinked.png",
			github_link: "https://www.github.com/kelechukwu1/abeg-help",
			live_link: "https://www.abeg-help.vercel.app",
			description:
				"This is a community project I'm participating actively on currently to solve issues with fund raising in Nigeria",
		},
	];

	const user = process.env.EMAIL_ADDRESS;
	console.log(user);
	return (
		<div className="mx-4 md:mx-24 md:pb-24 md:mb-10 items-center">
			{/* <Navbar /> */}

			<div className="mb-16">
				<div className="justify-start mt-5 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
					<SpringyText text="My Projects" />
				</div>
				<div className="text-start mt-2 md:mt-5 md:mb-10 text-muted-main fluid-lg text-gray-300">
					Each one is unique. Take a look.
				</div>
			</div>

			{/* large screen design */}
			<div className="hidden lg:block">
				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
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
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5">01</div>
							<div className="text-gray-100 font-bold text-3xl">Fly ASAP</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This is a web application which allows users to book and pay for
								thier flights seemlessly.
							</div>
							<div>
								Stack/Tools : NextJs, TailwindCss, Redux Toolkit, Firebase
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
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5">02</div>
							<div className="text-gray-100 font-bold text-3xl">
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
									<PiArrowSquareOutBold className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
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

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div className="justify-end col-span-2">
						<Image
							src={"/remotefix.png"}
							alt={"setup screenshot"}
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
					<div className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5">03</div>
							<div className="text-gray-100 font-bold text-3xl">
								Remote Mobile Fix
							</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This web app enables users in Owerri (capital of Imo State,
								Nigeria) to locate phone repairers close to thier location.
							</div>
							<div>
								Stack/Tools : NextJs, TailwindCss, Redux Toolkit, Firebase
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
									href={"https://www.remote-mobile-fix.vercel.app"}
								>
									<PiArrowSquareOutBold className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
					<div className="space-y-5 col-span-1">
						<div className="lg:gap-3 items-center">
							<div className="text-xl text-gray-300 mb-5">04</div>
							<div className="text-gray-100 font-bold text-3xl">Abeg Help</div>
						</div>

						<div className="text-gray-300 text-muted-main fluid-lg">
							<div>
								This is a community project I'm participating actively on
								currently to solve issues with fund raising in Nigeria.
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
									href={"https://www.github.com/kelechukwu1/abeg-help"}
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
									<PiArrowSquareOutBold className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
					<div className="justify-end col-span-2">
						<Image
							src={"/getlinked.png"}
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
                        w-full h-[100%]"
											width={900}
											height={10}
										/>
									</div>
									<div className="space-y-3 col-span-1 mt-5">
										<div className="flex text-md text-gray-300 items-center gap-1">
											{`0${project.id}`}
											<span className="text-gray-100 text-xl font-semibold">
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
		</div>
	);
};

export default Projects;

{
	/* {projects.map((project) => (
				<ul className="hidden lg:block">
					<li id={project.id}>
						<div className="grid lg:grid-cols-3 items-center justify-center gap-16 mb-20">
							<div className="justify-end col-span-2">
								<Image
									src={project.image}
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
									<div className="text-gray-100 font-bold text-3xl">
										{project.name}
									</div>
								</div>

								<div className="text-gray-300 text-muted-main fluid-lg">
									<div>{project.description}</div>
									<div>Stack/Tools : {project.tools}</div>
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
											<PiArrowSquareOutBold className="text-3xl text-gray-200" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			))} */
}
