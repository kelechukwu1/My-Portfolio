import React from "react";
import SpringyText from "./springy-text/SpringyText";

const Greeting = () => {
	return (
		<div className="px-4 md:px-24 my-5 md:my-10 text-gray-300 lg:hidden">
			<div className="flex text-center justify-center lg:justify-start text-[1.4rem] md:text-4xl font-black">
				<SpringyText text="Kelechukwu Ikechukwu O." />
			</div>
			<div className="text-xl flex mt-5 justify-center text-center md:px-20 text-gray-300 comic">
				I'm a creative Frontend Developer passionate about converting ideas into
				standard and scalable products.
			</div>
		</div>
	);
};

export default Greeting;
