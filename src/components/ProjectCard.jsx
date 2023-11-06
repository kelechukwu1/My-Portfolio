"use client";
import React from "react";
// import { Chip } from "../../components";
// import { useCursorContext } from "../../hooks";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowUp, AiOutlineGithub } from "react-icons/ai";
import SpringyText from "./springy-text/SpringyText";
import PrimaryButton from "./PrimaryButton";

// interface ProjectCardProps {
// 	proj: ProjectProps;
// }

// const ProjectCard = ({ proj }: ProjectCardProps) => {
const ProjectCard = () => {
	// const { projectCursor, defaultCursor, githubProjectCursor } =
	// 	useCursorContext();

	// const projectMouseEnter = () => projectCursor();

	// const projectMouseLeave = () => defaultCursor();

	return (
		<div className="mx-4 md:mx-24 md:py-24 md:mb-10 items-center">
			<div className="mb-20">
				<div className="justify-start mt-16 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
					<SpringyText text="My Projects" />
				</div>
				<div className="text-start mt-2 md:mt-5 md:mb-10 text-xl text-gray-400">
					Each one is unique. Take a look.
				</div>
			</div>
			{/* large screen design */}
			<div className="hidden lg:block">
				<div className="grid lg:grid-cols-3 items-center justify-center gap-16">
					<div className="justify-end col-span-2">
						<Image
							src={"/setup.jpg"}
							alt={` screenshot`}
							className="
              pointer-events-none
                  rounded-md
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                  w-full h-[20rem]
                "
							width={900}
							height={10}
						/>
					</div>
					<div className="space-y-5 col-span-1">
						<div className="text-xl text-gray-400">01</div>
						<div className="text-gray-100 text-3xl">Flight Reservation</div>
						<div className="text-gray-400 text-xl">
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
									<AiOutlineArrowUp className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="text-white">
					<div className="grid md:grid-cols-3 items-center justify-center gap-10">
						<div className="space-y-5 col-span-1">
							<div className="text-xl text-gray-400">02</div>
							<div className="text-gray-100 text-3xl">Remote Mobile Fix</div>
							<div className="text-gray-400 col-span-1 text-xl">
								<div>
									This web app enables users in Owerri (capital of Imo State,
									Nigeria) to locate phone repairers close to thier location.
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
										href={"https://www.remote-mobile-fix.vercel.app"}
									>
										<AiOutlineArrowUp className="text-3xl text-gray-200" />
									</Link>
								</div>
							</div>
						</div>

						<div data-aos="fade-right" className="col-span-2">
							<Image
								src={"/setup.jpg"}
								alt={`screenshot`}
								className="
                pointer-events-none
                  rounded-md
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                w-full h-[20rem]
                "
								width={900}
								height={10}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* mobile design */}
			<div className="lg:hidden">
				<div className="items-center justify-center">
					<div>
						<Image
							src={"/setup.jpg"}
							alt={` screenshot`}
							className="
              pointer-events-none
                  rounded-sm
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                  w-full h-[15rem]
                "
							width={900}
							height={10}
						/>
					</div>
					<div className="space-y-5 col-span-1 mt-10">
						<div className="flex text-xl text-gray-400 items-center gap-2">
							01{" "}
							<span className="text-gray-100 text-3xl">Flight Reservation</span>
						</div>
						<div className="text-gray-400 text-xl">
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
									<AiOutlineArrowUp className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="items-center justify-center mt-20">
					<div className="space-y-5 col-span-1 mt-10">
						<div>
							<Image
								src={"/setup.jpg"}
								alt={`screenshot`}
								className="
                pointer-events-none
                  rounded-md
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                w-full h-[15rem]
                "
								width={900}
								height={10}
							/>
						</div>
						<div className="flex text-xl text-gray-400 items-center gap-2">
							02{" "}
							<span className="text-gray-100 text-3xl">Remote Mobile Fix</span>
						</div>
						<div className="text-gray-400 col-span-1 text-xl">
							<div>
								This web app enables users in Owerri (capital of Imo State,
								Nigeria) to locate phone repairers close to thier location.
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
									href={"https://www.remote-mobile-fix.vercel.app"}
								>
									<AiOutlineArrowUp className="text-3xl text-gray-200" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
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

// {
// 	/* <Link
// 				onClick={() => projectMouseLeave()}
// 				onMouseEnter={projectMouseEnter}
// 				onMouseLeave={projectMouseLeave}
// 				rel="noopener noreferrer"
// 				target="_blank"
// 				className="group flex flex-col gap-4 "
// 				href={proj.deployed_link}
// 			> */
// }

// {
// 	/* <div
// 				className="
//             flex
//             w-full
//             flex-col
//             gap-8
//           "
// 			>
// 				<div
// 					className="
//               relative
//               inline-block
//               h-72 w-full
//               rounded-3xl
//               bg-bg-secondary
//               sm:h-96
//             "
// 				>
// 					<Image
// 						unoptimized
// 						src={"/setup.jpg"}
// 						alt={`${proj.name} screenshot`}
// 						layout="fill"
// 						objectFit="contain"
// 						className="
//                   rounded-2xl
//                   px-6 py-12 md:py-0
//                   duration-400
//                   ease-in-out
//                   group-hover:scale-105
//                   lg:py-12
//                   lg:px-8
//                 "
// 						// width={500}
// 						// height={500}
// 					/>
// 					<div
// 						className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 z-10
//                 h-full
//                 w-full
//                 opacity-20
//                 duration-400
//                 bg-bg-main
//                 group-hover:opacity-0
//               "
// 					/>
// 				</div>
// 				<div className="flex flex-col">
// 					<div className="flex items-start">
// 						<div className="flex flex-col">
// 							{" "}
// 							<span
// 								className="
//                 text-sm
//                 text-muted-secondary
//               "
// 							>
// 								{proj.description}
// 							</span>
// 							<h2
// 								className="
//                   break-all
//                   text-4xl
//                   font-bold
//                   text-text-main
//                   "
// 							>
// 								{proj.name}
// 							</h2>
// 						</div>
// 						<div className="ml-auto"></div>
// 						<Link
// 							// onMouseEnter={() => githubProjectCursor()}
// 							// onMouseLeave={() => projectCursor()}
// 							rel="noopener noreferrer"
// 							target="_blank"
// 							href={proj.github_link}
// 						>
// 							<AiOutlineGithub className="text-4xl text-white" />
// 						</Link>
// 					</div>

// 					<p className="mt-4 text-lg text-muted-main">{proj.description}</p>
// 				</div>
// 			</div> */
// }
// {
// 	/* <div>{proj.tools}</div> */
// }
// {
// 	/* <Chip texts={proj.tools} /> */
// }
// {
// 	/* </Link> */
// }
