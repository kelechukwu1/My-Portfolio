// import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React from "react";
import Link from "next/link";
import SpringyText from "@/components/springy-text/SpringyText";
// import supabase from "../../config/supabaseClient";

const Projects = () => {
	// const [projects, setProjects] = useState<ProjectProps[]>([]);

	// useEffect(() => {
	//   const fetchProjects = async () => {
	//     const { data } = await supabase.from("projects").select();

	//     data && setProjects(data as any);
	//   };
	//   fetchProjects();
	// }, []);
	const projects = [
		{
			name: "projectOne",
			tools: "react",
			image: "/setup.jpg",
			github_link: "github_link",
			role: "role",
			description: "description",
			deployed_link: "deployed_link",
		},
		{
			name: "projectTwo",
			tools: "NextJs",
			image: "/KC.jpeg",
			github_link: "null",
			role: "null",
			description: "null",
			deployed_link: "null",
		},
	];

	// const featuredProjects = projects.map((proj) => (
	// 	<li key={proj.name}>
	// 		<ProjectCard proj={proj} />
	// 	</li>
	// ));

	return (
		<div className="mx-4 md:mx-24 md:py-24 md:mb-10 items-center">
			{/* <Navbar /> */}

			<div className="">
				<div className="justify-start mt-16 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
					<SpringyText text="My Projects" />
				</div>
				<div className="text-start mt-2 md:mt-5 md:mb-10 text-xl text-gray-400">
					Each one is unique. Take a look.
				</div>
			</div>
			<ul
			// className="
			//   grid
			//   grid-cols-1
			//   md:gap-16
			//   md:grid-cols-2
			// "
			>
				<div className="text-6xl">Coming Soon...</div>
			</ul>
		</div>
	);
};

export default Projects;
