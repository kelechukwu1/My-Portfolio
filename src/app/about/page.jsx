import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArticleFill, RiGithubLine } from "react-icons/ri";

const page = () => {
	return (
		<>
			<div className="h-full px-4 md:px-24 lg:pb-10 lg:pt-5 flex items-center">
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-between">
					<div className="lg:mt-[9rem] xl:mt-0 xl:flex xl:items-center">
						<div className="text-gray-300 hidden lg:block">
							<div className="flex font text-center justify-center lg:justify-start lg:text-5xl xl:text-6xl text-2xl font-black">
								<SpringyText text="Kelechukwu I.O" />
							</div>
							<div className="text-gray-300 text-muted-main fluid-lg flex mt-5 justify-center text-center lg:text-start font">
								I'm a creative Frontend Developer passionate about converting
								ideas into standard and scalable products.
							</div>
						</div>

						{/* small screen */}
						<div className="lg:hidden">
							<div className="flex justify-center mb-10 lg:hidden">
								<Image
									src={"/KC.jpeg"}
									width={350}
									height={200}
									alt="setup-image"
									className="w-auto h-auto rounded-md"
								/>
							</div>

							<div className="grid grid-cols-2 gap-4 justify-around mb-10">
								<div className="flex justify-center text-center border border-blue-500 rounded-xl">
									<Link
										href={"https://github.com/kelechukwu1"}
										className="space-y-1 p-4"
									>
										<div className="flex justify-center">
											<RiArticleFill className="w-7 md:w-8 h-7 md:h-8" />
										</div>
										<div>Resume</div>
									</Link>
								</div>
								<div className="flex justify-center text-center border border-blue-500 rounded-xl">
									<Link
										href={"https://github.com/kelechukwu1"}
										className="space-y-1 p-4"
									>
										<div className="flex justify-center">
											<RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />
										</div>
										<div>My Github</div>
									</Link>
								</div>
							</div>

							<div className="text-2xl mb-5 md:text-4xl space-y-3">
								<SpringyText text="MY" />
								<SpringyText text="STORY" />
							</div>

							<div className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300">
								Hello! My name is{" "}
								<span className="font-semibold">Kelechukwu</span>, I enjoy
								converting ideas into real life productsand building solutions
								that runs on the internet. Over the last 3 years, I've developed
								products for businesses around the world, providing solutions on
								small business websites to enterprise web applications with
								focus on quality, accessibility and fast user experiences.
							</div>

							<div className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300">
								Fast forward to today, having{" "}
								<span className="font-semibold">
									transitioned into tech from repairing mobile phones
								</span>{" "}
								in Owerri computer village (tetlow), I work as the{" "}
								<span className="font-semibold">lead Frontend engineer</span> at{" "}
								<span className="font-semibold">Remote Mobile Fix</span>,
								building accessible digital experience to make people connect to{" "}
								<span className="font-semibold"> phone repairers</span> within
								Owerri, Imo State, Nigeria. And to make phone repairers who
								don't own a physical shop to still meet and retain customers who
								can trust their online portfolio to have thier phones fixed and
								delivered to thier door step.
							</div>

							<div className="mb-10 text-muted-main fluid-lg text-gray-300 space-y-2">
								<div className="font-semibold">What I work with:</div>
								<div>
									<span className="font-semibold">Languages:</span> Html,Css,
									Javascript, Typescript
								</div>
								<div>
									<span className="font-semibold">Technologies:</span> React.js,
									NextJs, Tailwind, Bootstrap, Redux-toolkit, Firebase, Git,
									Vercel, Netlify
								</div>
							</div>
						</div>
					</div>

					<div className="hidden lg:block">
						<Image
							src={"/KC.jpeg"}
							width={500}
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
export default page;
