"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  //aos useEffect hook
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const projects = [
    {
      id: 1,
      name: "GetLinkedAI",
      tools: "NextJs, TailwindCss, GSAP, AOS.js",
      image: "/getlinked.png",
      github_link: "https://github.com/kelechukwu1/getlinkedAI",
      live_link: "https://getlinked-ai-psi.vercel.app",
      description:
        "A 5-days hackathon project I participated, built and completed together with Ayoola my good friend, we ensured maximum responsiveness and built beautiful components and pages, also played around with getLinkedAI API",
    },

    {
      id: 2,
      name: "Geegpay Dashboard",
      tools: " NextJs, TailwindCss, Framer Motion, AOS, Recharts",
      image: "/geegpay.png",
      github_link: "https://github.com/thejuggernaut01/geegpay-challenge",
      live_link: "https://geegpay-analytics-ui.vercel.app/",
      description: ` <div>
                This is a hackathon project I participated, built and completed
                together with Ayoola my good friend, it was hosted by
                <span>
                  <a href="https://twitter.com/geegpay_hq">
                  Geegpay
                </a>
                </span>
                and
                <span>
                  <a
                    href="https://twitter.com/DaveyHert"
                  >
                    David Herbert,
                  </a>
                </span>
                we ensured a maximum responsiveness.
              </div>`,
    },
    {
      id: 3,
      name: "Remote Mobile Fix",
      tools: "NextJs, TailwindCss, Redux Toolkit, Firebase, Vercel",
      image: "/remotefix.png",
      github_link: "https://github.com/kelechukwu1/remote-mobile-fix",
      description:
        "This web app I'm building will enable users in Owerri (capital of Imo State, Nigeria) to locate phone repairers close to thier location.",
      live_link: "https://remote-mobile-fix.vercel.app",
    },
    {
      id: 4,
      name: "Fly Asap",
      tools: "NextJs, TailwindCss, Redux Toolkit, Firebase, Vercel",
      image: "/getlinked.png",
      github_link: "https://github.com/kelechukwu1/flight-reservation-website",
      live_link: "https://flight-reservation-project.vercel.app",
      description:
        "This is a web application I'm building will allow users to book and pay for thier flights seemlessly.",
    },
  ];

  return (
    <div className="md:mb-10 items-center overflow-x-hidden">
      <div data-aos="fade-down" className="mb-16">
        <div className="font justify-start mt-5 text-3xl md:text-4xl lg:text-5xl font-black md:text-start">
          <SpringyText text="My Projects" />
        </div>
        <div className="text-start mt-2 md:mt-5 md:mb-10 text-muted-main fluid-lg text-gray-300">
          Each one is unique. Take a look.
        </div>
      </div>

      {/* large screen design */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2 items-center justify-center gap-16 mb-20">
          <div data-aos="fade-right" className="justify-end ">
            <Image
              src={"/getlinked.png"}
              alt={"project screenshot"}
              className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem] object-contain"
              width={500}
              height={500}
            />
          </div>
          <div data-aos="fade-left" className="space-y-3">
            <div className="lg:gap-3 items-center">
              <div className="text-xl text-gray-300 mb-1 font">
                <SpringyText text="01" />
              </div>
              <div className="text-gray-100 font-bold text-3xl font">
                <SpringyText text="GetLinkedAI" />
              </div>
            </div>

            <div className="text-gray-300 text-muted-main fluid-lg">
              <div>
                A 5-days hackathon project I participated, built and completed
                with Ayoola my good friend, we ensured maximum responsiveness
                and it consist of three pages, also played around with
                getLinkedAI API.
              </div>
              <span className="font-semibold font">Stack/Tools:</span> NextJs,
              TailwindCss, GSAP, AOS.js
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://github.com/kelechukwu1/getlinkedAI"}
                >
                  <AiOutlineGithub className="text-3xl text-gray-200" />
                </Link>
              </div>
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://getlinked-ai-psi.vercel.app"}
                >
                  <HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 items-center justify-center gap-16 mb-20">
          <div data-aos="fade-right" className="space-y-3">
            <div className="lg:gap-3 items-center">
              <div className="text-xl text-gray-300 font">
                <SpringyText text="02" />
              </div>
              <div className="text-gray-100 font-bold text-[28px] font">
                <SpringyText text="Geegpay Dashboard" />
              </div>
            </div>

            <div className="text-gray-300 text-muted-main fluid-lg">
              <div>
                This is a hackathon project I participated, built and completed
                together with Ayoola my good friend, it was hosted by{" "}
                <span>
                  <Link
                    href="https://twitter.com/geegpay_hq"
                    className="text-blue-300"
                  >
                    Geegpay
                  </Link>
                </span>{" "}
                and{" "}
                <span>
                  <Link
                    href="https://twitter.com/DaveyHert"
                    className="text-blue-300"
                  >
                    David Herbert,
                  </Link>
                </span>{" "}
                we ensured a maximum responsiveness.
              </div>
              <div>
                <span className="font-semibold font">Stack/Tools:</span> NextJs,
                TailwindCss, Framer Motion, AOS, Recharts
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://github.com/thejuggernaut01/geegpay-challenge"}
                >
                  <AiOutlineGithub className="text-3xl text-gray-200" />
                </Link>
              </div>
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://geegpay-analytics-ui.vercel.app/"}
                >
                  <HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="justify-end">
            <Image
              src={"/geegpay.png"}
              alt={"project screenshot"}
              className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem] object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="grid lg:grid md:grid-cols-2 items-center justify-center gap-16 mb-20">
          <div data-aos="fade-right" className="justify-end">
            <Image
              src={"/remotefix.png"}
              alt={"project screenshot"}
              className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem] object-contain"
              width={500}
              height={500}
            />
          </div>
          <div data-aos="fade-left" className="space-y-1">
            <div className="lg:gap-3 items-center">
              <div className="text-xl text-gray-300 mb-0 font">
                <SpringyText text="03" />
              </div>
              <div className="text-gray-100 font-bold text-3xl font">
                <SpringyText text="Remote Mobile Fix" />
              </div>
            </div>

            <div className="text-gray-300 text-muted-main fluid-lg">
              <div>
                This web app I am building to enable users in Owerri (capital of
                Imo State, Nigeria) to locate phone repairers close to thier
                location.
              </div>
              <div>
                <span className="font-semibold font">Stack/Tools:</span> NextJs,
                TailwindCss, Redux Toolkit, Firebase, Vercel.
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://github.com/kelechukwu1/remote-mobile-fix"}
                >
                  <AiOutlineGithub className="text-3xl text-gray-200" />
                </Link>
              </div>
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://remote-mobile-fix.vercel.app"}
                >
                  <HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 items-center justify-center gap-16">
          <div>
            <div data-aos="fade-right" className="space-y-3">
              <div className="lg:gap-3 items-center">
                <div className="text-xl text-gray-300 mb-3 font">
                  <SpringyText text="04" />
                </div>
                <div className="text-gray-100 font-bold text-3xl font">
                  <SpringyText text="Fly Asap" />
                </div>
              </div>

              <div className="text-gray-300 text-muted-main fluid-lg">
                <div>
                  This is a web application which allows users to book and pay
                  for thier flights seemlessly.
                </div>
                <span className="font-semibold font">Stack/Tools:</span> NextJs,
                TailwindCss, Redux Toolkit, Firebase, Vercel
              </div>
            </div>

            <div className="flex gap-5 items-center mt-5">
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    "https://github.com/kelechukwu1/flight-reservation-website"
                  }
                >
                  <AiOutlineGithub className="text-3xl text-gray-200" />
                </Link>
              </div>
              <div>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://flight-reservation-project.vercel.app"}
                >
                  <HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="justify-end">
            <Image
              src={"/getlinked.png"}
              alt={"project screenshot"}
              className="
                pointer-events-none
                rounded-md
                duration-400
                ease-in-out
                group-hover:scale-105
                w-full h-[20rem] object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* mobile design */}
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="lg:hidden mb-20">
              <div className="items-center justify-center">
                <div data-aos="fade-right">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="
                        pointer-events-none
                        rounded-sm
                        duration-400
                        ease-in-out
                        group-hover:scale-105
                        w-full h-[100%]"
                    width={900}
                    height={10}
                  />
                </div>
                <div data-aos="fade-left" className="space-y-3 col-span-1 mt-5">
                  <div className="flex text-md font text-gray-300 items-center gap-1">
                    {`0${project.id}`}
                    <span className="text-gray-100 font text-xl font-semibold">
                      {project.name}
                    </span>
                  </div>
                  <div className="text-gray-300 text-muted-main fluid-lg">
                    <div>
                      {React.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: project.description,
                        },
                      })}
                    </div>
                    <div>
                      <span className="font-semibold font">Stack/Tools:</span>{" "}
                      {project.tools}
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div>
                      <Link
                        // onMouseEnter={() => githubProjectCursor()}
                        // onMouseLeave={() => projectCursor()}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.github_link}
                      >
                        <AiOutlineGithub className="text-3xl text-gray-200" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        // onMouseEnter={() => githubProjectCursor()}
                        // onMouseLeave={() => projectCursor()}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.live_link}
                      >
                        <HiArrowTopRightOnSquare className="text-3xl text-gray-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
