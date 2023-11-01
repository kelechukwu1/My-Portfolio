// import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
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
			images: "/setup.jpg",
			github_link: "github_link",
			role: "role",
			description: "description",
			deployed_link: "deployed_link",
		},
		{
			name: "projectTwo",
			tools: "NextJs",
			images: "/setup.jpg",
			github_link: "null",
			role: "null",
			description: "null",
			deployed_link: "null",
		},
	];

	const featuredProjects = projects.map((proj) => (
		<li key={proj.name}>
			<ProjectCard proj={proj} />
		</li>
	));

	return (
		<section className="flex flex-col gap-16">
			{/* <Navbar /> */}

			<main
				className="
          flex 
          flex-col 
          gap-8 
        "
			>
				<ul
					className="
            grid 
            grid-cols-1 
            gap-16 
            md:grid-cols-2 
          "
				>
					{featuredProjects}
				</ul>
				<Link className="mx-auto mt-8" href={"/projects"}>
					{" "}
					{/* <PrimaryButton name="Projects Archive" /> */}
				</Link>
			</main>
		</section>
	);
};

export default Projects;
