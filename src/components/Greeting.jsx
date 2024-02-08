import React from "react";
import SpringyText from "./springy-text/SpringyText";

const Greeting = () => {
  return (
    <div className="my-5 md:my-10 text-gray-300 lg:hidden">
      <div className="flex font text-center justify-center text-[1.3rem] md:text-4xl font-bold">
        <SpringyText text="Kelechukwu Ikechukwu O." />
      </div>
      <div className="text-muted-main fluid-lg flex mt-5 justify-center text-center md:px-20 text-gray-300  ">
        I'm a creative Frontend Developer passionate about converting ideas into
        standard, visually appealing and scalable product.
      </div>
    </div>
  );
};

export default Greeting;
