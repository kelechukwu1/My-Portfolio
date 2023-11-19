import React from "react";
import SpringyText from "./springy-text/SpringyText";

const Greeting = () => {
	return (
		<div className="px-4 md:px-24 my-5 md:my-10 text-gray-300 lg:hidden">
			<div className="flex font text-center justify-center text-[1.5rem] md:text-4xl font-bold">
				<SpringyText text="Kelechukwu Ikechukwu O." />
			</div>
			<div className="text-muted-main fluid-lg flex mt-5 justify-center text-center md:px-20 text-gray-300  ">
				I'm a creative Frontend Developer passionate about converting ideas into
				standard and scalable products.
			</div>
		</div>
	);
};

export default Greeting;
