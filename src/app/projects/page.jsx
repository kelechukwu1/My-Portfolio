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
			name: "projectOne",
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
			name: "projectTwo",
			tools: "NextJs, TailwindCss",
			image: "/KC.jpeg",
			github_link: "https://www.github.com/kelechukwu1",
			role: "null",
			description:
				"This web app enables users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
			deployed_link: "https://www.remote-mobile-fix.vercel.app",
		},
	];

	return (
		<div className="mx-4 md:mx-24 md:py-24 md:mb-10 items-center">
			{/* <Navbar /> */}

			<div className="mb-16">
				<div className="justify-start mt-5 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
					<SpringyText text="My Projects" />
				</div>
				<div className="text-start mt-2 md:mt-5 md:mb-10 text-muted-main fluid-lg text-gray-300">
					Each one is unique. Take a look.
				</div>
			</div>
			<ul>
				<li>
					{projects.map((project) => (
						/* large screen design */
						<div>
							<div className="hidden lg:block">
								<div className="grid lg:grid-cols-3 items-center justify-center gap-16">
									<div className="justify-end col-span-2 mb-20">
										<Image
											src={project.image}
											alt={`${project.image} screenshot`}
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
										<div className="text-xl text-gray-300">01</div>
										<div className="text-gray-100 text-3xl noto">
											{project.name}
										</div>
										<div className="text-gray-300 text-muted-main fluid-lg">
											<div>
												This is a web application which allows users to book and
												pay for thier flights seemlessly.
											</div>
											<div>Stack/Tools : {project.tools}</div>
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
										<div className="flex text-xl text-gray-300 items-center gap-2 noto">
											{`0${project.id}`}
											<span className="text-gray-100 text-muted-main fluid-lg noto">
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
		</div>
	);
};

export default Projects;
