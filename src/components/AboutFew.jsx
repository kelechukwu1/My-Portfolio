"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import SpringyText from "./springy-text/SpringyText";
import PrimaryButton from "./PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
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
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<>
			<div className="h-full px-4 md:px-24 lg:pb-10 lg:pt-5 flex items-center">
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-between">
					<div className="flex justify-center mt-10 md:mt-0 lg:hidden">
						<Image
							src={"/KC.jpeg"}
							width={350}
							height={200}
							alt="kelechukwu's picture"
							className="w-auto h-auto rounded-md"
						/>
					</div>
					<div className="lg:mt-[9rem] xl:mt-0 xl:flex xl:items-center">
						<div data-aos="fade-up" className="text-gray-300 hidden lg:block">
							<div className="flex font text-center justify-center lg:justify-start lg:text-5xl xl:text-6xl text-2xl font-black">
								<SpringyText text="Kelechukwu I.O" />
							</div>
							<div
								data-aos="fade-up"
								className="text-gray-300 text-muted-main fluid-lg flex mt-5 justify-center text-center lg:text-start"
							>
								I'm a creative Frontend Developer passionate about converting
								ideas into standard and scalable products.
							</div>

							<div data-aos="fade-up" className="flex justify-center md:mt-20">
								<Link className="mx-auto" href={"/about"}>
									<PrimaryButton
										name="More About Me"
										type="solid"
										className="font mx-auto md:mx-0 md:ml-auto"
									/>
								</Link>
							</div>
						</div>

						{/* small screen */}
						<div className="lg:hidden mt-20 justify-center">
							<div
								data-aos="fade-down"
								className="font flex text-3xl mb-5 md:text-4xl font-black justify-center text-center"
							>
								<SpringyText text="A Little About Me" />
							</div>

							<div
								data-aos="fade-up"
								className="flex mb-10 text-muted-main fluid-lg md:text-[1.1rem] text-center text-muted-main fluid-lg text-gray-300  "
							>
								Focused on building awesome and high-quality websites that are
								also visually appealing and easy to use. I have a strong
								foundation in HTML, CSS, and JavaScript, and I'm proficient in
								using React. I love learning something new and I'm always
								looking to improve my skills and stay up-to-date on the latest
								front-end technologies.
							</div>

							<div data-aos="fade-up" className="flex justify-center md:mt-20">
								<Link className="mx-auto" href={"/about"}>
									<PrimaryButton
										name="More About Me"
										type="solid"
										className="font mx-auto md:mx-0 md:ml-auto"
									/>
								</Link>
							</div>
						</div>
					</div>

					<div data-aos="fade-left" className="hidden lg:block">
						<Image
							src={"/KC.jpeg"}
							width={500}
							height={100}
							alt="kelechukwu's picture"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutFew;
