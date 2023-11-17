import Head from "next/head";
import AboutFew from "@/components/AboutFew";
import Greeting from "@/components/Greeting";
import Contact from "./contact/page";
import ProjectCard from "@/components/ProjectCard";
// import Projects from "./projects/page";

export default function Home() {
	return (
		<>
			<Head>
				<meta
					property="og:title"
					content="Kelechukwu Ikechukwu - Frontend Developer"
				/>
				<meta
					property="og:description"
					content="Kelechukwu Ikechukwu - Front-End Developer specializing in creating visually stunning web applications."
				/>
				<meta property="og:url" content="https://kelechukwu.vercel.app" />
				<meta property="og:type" content="website" />
			</Head>

			<Greeting />
			<AboutFew />
			<ProjectCard />
			<Contact />
		</>
	);
}
