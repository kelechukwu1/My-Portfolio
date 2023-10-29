import Head from "next/head";
import AboutFew from "@/components/AboutFew";
import Greeting from "@/components/Greeting";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kelechukwu Ikechukwu - Frontend Developer</title>
				<meta
					name="description"
					content="Kelechukwu Ikechukwu - Front-End Developer specializing in creating visually stunning web applications."
				/>
				<meta
					name="keywords"
					content="front-end developer, web developer, HTML, CSS, JavaScript, React, portfolio, kelechukwu, Kelechukwu Ikechukwu, kelechukwuikechukwu"
				/>
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
			<main className="mx-4 md:mx-24">
				<Greeting />
				<AboutFew />
				<ContactForm />
			</main>
		</>
	);
}
