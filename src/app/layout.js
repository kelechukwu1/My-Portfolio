import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
// import { ProjectsSection, AboutSection, ContactSection } from "../sections";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Create Next App",
	description: "Kelechukwu Ikechukwu's Portfolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}

				<Footer />
			</body>
		</html>
	);
}
