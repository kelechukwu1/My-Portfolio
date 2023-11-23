import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Head from "next/head";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Kelechukwu Ikechukwu - Frontend Developer",
	description:
		"Kelechukwu Ikechukwu's Portfolio Website - Front-End Developer specializing in creating visually stunning web applications.",
	keywords:
		"front-end developer, web developer, HTML, CSS, JavaScript, React, portfolio, kelechukwu, Kelechukwu Ikechukwu, kelechukwuikechukwu",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" description={metadata.description} />
				<link rel="icon" href="/public/KC.jpeg" />
				<link rel="apple-touch-icon" href="/public/KC.jpeg" />
			</Head>
			<body className={poppins.className}>
				<Navbar />
				{children}

				<Footer />
			</body>
		</html>
	);
}
