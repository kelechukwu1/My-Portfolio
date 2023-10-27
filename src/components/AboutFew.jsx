import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutFew = () => {
	return (
		<>
			<div className="mx-4 md:mx-24 h-full md:py-24 flex items-center">
				<div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between items-center">
					<div className="space-y-10">
						<div className="text-3xl md:text-4xl lg:text-5xl font-black text-center md:text-start">
							A Little About Me
						</div>
						<div className="text-center md:text-start md:text-[1.1rem] text-muted-main fluid-lg">
							Focused on building awesome and high-quality websites that are
							also visually appealing and easy to use. I have a strong
							foundation in HTML, CSS, and JavaScript, and I'm proficient in
							using React. I love learning something new and I'm always looking
							to improve my skills and stay up-to-date on the latest front-end
							technologies.
						</div>
						<div className="flex justify-center md:justify-start">
							<Link href={"/about"}>
								<button className="text-center px-12 py-6 rounded-full bg-stone-800 hover:bg-blue-700 transition duration-500">
									More About Me
								</button>
							</Link>
						</div>
					</div>
					<div className="mt-10 md:hidden">
						<Image
							src={"/setup.jpg"}
							width={400}
							height={400}
							alt="setup-image"
							className="w-auto h-auto rounded-3xl"
						/>
					</div>
					<div className="hidden md:block">
						<Image
							src={"/setup.jpg"}
							width={500}
							height={500}
							alt="setup-image"
							className="w-[80rem] h-[20rem] rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutFew;
