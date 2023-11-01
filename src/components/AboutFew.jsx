import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpringyText from "./springy-text/SpringyText";
// import { motion } from "framer-motion";
// import Lottie from "react-lottie";
// import codingBoy from "../../public/lottie/95348-coding-boy.json";

// const defaultOptions = {
// 	loop: true,
// 	autoplay: true,
// 	animationData: codingBoy,
// 	rendererSettings: {
// 		preserveAspectRatio: "xMidYMid slice",
// 	},
// };

const AboutFew = () => {
	return (
		<>
			<div className="h-full px-4 md:px-24 md:pb-24 lg:py-2 flex items-center">
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-between">
					<div className="flex justify-center mt-10 md:mt-0 lg:hidden">
						<Image
							src={"/KC.jpeg"}
							width={350}
							height={200}
							alt="setup-image"
							className="w-auto h-auto rounded-md"
						/>
					</div>
					<div className="lg:mt-[9rem] xl:mt-[15rem]">
						<div className="text-gray-300 hidden lg:block">
							<div className="flex text-center justify-center lg:justify-start lg:text-5xl xl:text-6xl text-2xl font-black">
								<SpringyText text="Kelechukwu I.O" />
							</div>
							<div className="text-xl flex mt-5 justify-center text-center lg:text-start">
								I'm a creative Frontend Developer passionate about converting
								ideas into standard and scalable products.
							</div>

							<div className="hidden lg:block mt-8 lg:justify-start">
								<Link href={"/about"}>
									<button className="text-center px-12 py-6 rounded-full bg-stone-800 hover:bg-blue-700 transition duration-500">
										More About Me
									</button>
								</Link>
							</div>
						</div>

						<div className="lg:hidden mt-20 lg:mt-0 justify-center lg:justify-start">
							<div className="flex justify-center mb-8 text-3xl md:text-4xl lg:text-5xl font-black text-center lg:text-start">
								<SpringyText text="A Little About Me" />
							</div>

							<div className="text-center mb-8 lg:text-start md:text-[1.1rem] text-muted-main fluid-lg">
								Focused on building awesome and high-quality websites that are
								also visually appealing and easy to use. I have a strong
								foundation in HTML, CSS, and JavaScript, and I'm proficient in
								using React. I love learning something new and I'm always
								looking to improve my skills and stay up-to-date on the latest
								front-end technologies.
							</div>
							<div className="flex justify-center mb-8 lg:justify-start">
								<Link href={"/about"}>
									<button className="text-center px-12 py-6 rounded-full bg-stone-800 hover:bg-blue-700 transition duration-500">
										More About Me
									</button>
								</Link>
							</div>
						</div>
					</div>

					<div className="hidden lg:block">
						<Image
							src={"/KC.jpeg"}
							width={600}
							height={100}
							alt="setup-image"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutFew;
