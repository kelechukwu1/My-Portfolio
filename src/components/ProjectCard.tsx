"use client";
import React from "react";
// import { Chip } from "../../components";
// import { useCursorContext } from "../../hooks";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

interface ProjectCardProps {
	proj: ProjectProps;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
	// const { projectCursor, defaultCursor, githubProjectCursor } =
	// 	useCursorContext();

	// const projectMouseEnter = () => projectCursor();

	// const projectMouseLeave = () => defaultCursor();

	return (
		<Link
			// onClick={() => projectMouseLeave()}
			// onMouseEnter={projectMouseEnter}
			// onMouseLeave={projectMouseLeave}
			rel="noopener noreferrer"
			target="_blank"
			className="group flex flex-col gap-4 "
			href={proj.deployed_link}
		>
			<div
				className="
            flex
            w-full
            flex-col
            gap-8
          "
			>
				<div
					className="
              relative
              inline-block
              h-72 w-full
              rounded-3xl
              bg-bg-secondary
              sm:h-96
            "
				>
					<Image
						unoptimized
						src={"/setup.jpg"}
						alt={`${proj.name} screenshot`}
						// layout="fill"
						objectFit="contain"
						className="
                  rounded-2xl
                  px-6 py-12
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                  lg:py-12
                  lg:px-8
                "
						width={500}
						height={500}
					/>
					<div
						className="
                pointer-events-none
                absolute
                inset-0
                z-10
                h-full
                w-full
                opacity-20
                duration-400
                bg-bg-main
                group-hover:opacity-0
              "
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex items-start">
						<div className="flex flex-col">
							{" "}
							<span
								className="
                text-sm
                text-muted-secondary
              "
							>
								{proj.description}
							</span>
							<h2
								className="
                  break-all
                  text-4xl
                  font-bold
                  text-text-main
                  "
							>
								{proj.name}
							</h2>
						</div>
						<div className="ml-auto"></div>
						<Link
							// onMouseEnter={() => githubProjectCursor()}
							// onMouseLeave={() => projectCursor()}
							rel="noopener noreferrer"
							target="_blank"
							href={proj.github_link}
						>
							<AiOutlineGithub className="text-4xl text-white" />
						</Link>
					</div>

					<p className="mt-4 text-lg text-muted-main">{proj.description}</p>
				</div>
			</div>
			<div>{proj.tools}</div>
			{/* <Chip texts={proj.tools} /> */}
		</Link>
	);
};

export default ProjectCard;
