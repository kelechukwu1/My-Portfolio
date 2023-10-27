import React from "react";
import SpringyText from "./springy-text/SpringyText";

const Greeting = () => {
	return (
		<div className="mx-4 md:mx-24 my-5 md:my-10 text-gray-300">
			<div className="text-2xl md:text-4xl font-black">
				<SpringyText
					className="justify-center"
					text="I'm Kelechukwu Ikechukwu"
				/>
			</div>
			<div className="text-xl flex justify-center md:justify-start">
				A Frontend Engineer
			</div>
		</div>
	);
};

export default Greeting;
