"use client";
import SpringyText from "@/components/springy-text/SpringyText";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { RiArticleFill, RiGithubLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <div className="h-full lg:pb-10 lg:pt-5 flex items-center overflow-x-hidden">
        <div className="hidden lg:block">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-28 w-full justify-between">
            <div data-aos="fade-right" className="text-gray-300 space-y-10">
              <div className="font flex text-center justify-start lg:text-5xl xl:text-6xl font-black">
                <SpringyText text="Kelechukwu I.O" />
              </div>

              <div className="text-gray-300 text-muted-main fluid-lg flex justify-center text-center lg:text-start">
                I'm a creative Frontend Developer passionate about converting
                ideas into standard, visually appealing and scalable product.
              </div>

              <div className="grid grid-cols-2 gap-4 justify-around">
                <Link
                  href={
                    "https://docs.google.com/document/d/1TBV8IbC8wgMMTmp7_FV_SlJdZ1zNiZZpjAlxJSO98yY/edit?usp=drive_link"
                  }
                  download
                >
                  <div className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-8">
                    <div className="flex justify-center">
                      <RiArticleFill className="w-7 md:w-8 h-7 md:h-8" />
                    </div>
                    <div>My Resume</div>
                  </div>
                </Link>
                <Link href={"https://github.com/kelechukwu1"}>
                  <div className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-8">
                    <div className="flex justify-center">
                      <RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />
                    </div>
                    <div>My Github</div>
                  </div>
                </Link>
              </div>
            </div>

            <div data-aos="fade-left" className="flex justify-center items-end">
              <Image
                src={"/KC.jpeg"}
                width={500}
                height={100}
                alt="kelechukwu's picture"
                className="rounded-xl grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-4 gap-20">
              <div
                data-aos="fade-up"
                className="font col-span-1 mb-10 text-3xl space-y-3"
              >
                <SpringyText text="MY" />
                <SpringyText text="STORY" />
              </div>

              <div className="col-span-3">
                <div
                  data-aos="fade-up"
                  className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
                >
                  Hello! My name is{" "}
                  <span className="font font-semibold">Kelechukwu</span>, I
                  enjoy converting ideas into real life products and building
                  solutions that runs on the internet. Over the last 3 years,
                  I've developed products for businesses around the world, built
                  projects from conceptualization to deployment, providing
                  solutions on small business websites to enterprise web
                  applications with focus on quality, accessibility and fast
                  user experiences.
                </div>

                <div
                  data-aos="fade-up"
                  className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
                >
                  Fast forward to today, having{" "}
                  <span className="font-semibold">
                    transitioned into tech from repairing mobile phones
                  </span>{" "}
                  in Owerri computer village (tetlow), I work as the{" "}
                  <span className="font-semibold">lead Frontend engineer</span>{" "}
                  at <span className="font-semibold">Remote Mobile Fix</span>,
                  building accessible digital experience to make people connect
                  to <span className="font-semibold"> phone repairers</span>{" "}
                  within Owerri, Imo State, Nigeria. And to make phone repairers
                  who don't own a physical shop to still meet and retain
                  customers who can trust their online portfolio to have their
                  phones fixed and delivered to their door step.
                </div>

                <div
                  data-aos="fade-up"
                  className="mb-10 text-muted-main fluid-lg text-gray-300 space-y-2"
                >
                  <div className="font font-semibold">What I work with:</div>
                  <div>
                    <span className="font font-semibold">Languages:</span> Html,
                    Css, Javascript, Typescript
                  </div>
                  <div>
                    <span className="font font-semibold">Technologies:</span>{" "}
                    ReactJs, NextJs, Tailwindcss, Bootstrap, Redux-toolkit,
                    Firebase, Postman, Jest, Git, Vercel, Netlify
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small screen */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-10 lg:hidden">
            <Image
              src={"/KC.jpeg"}
              width={350}
              height={200}
              alt="kelechukwu's picture"
              className="w-auto h-auto rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 justify-around mb-10">
            <Link
              href={
                "https://docs.google.com/document/d/1TBV8IbC8wgMMTmp7_FV_SlJdZ1zNiZZpjAlxJSO98yY/edit?usp=drive_link"
              }
              download
            >
              <div
                data-aos="fade-right"
                className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-6"
              >
                <div className="flex justify-center">
                  <RiArticleFill className="w-7 md:w-8 h-7 md:h-8" />
                </div>
                <div>My Resume</div>
              </div>
            </Link>
            <Link href={"https://github.com/kelechukwu1"}>
              <div
                data-aos="fade-left"
                className="flex justify-center text-center border border-blue-500 rounded-xl space-y-1 py-6"
              >
                <div className="flex justify-center">
                  <RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />
                </div>
                <div>My Github</div>
              </div>
            </Link>
          </div>

          <div
            data-aos="fade-up"
            className="font text-2xl mb-5 md:text-4xl space-y-3"
          >
            <SpringyText text="MY" />
            <SpringyText text="STORY" />
          </div>

          <div
            data-aos="fade-up"
            className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
          >
            Hello! My name is{" "}
            <span className="font font-semibold">Kelechukwu</span>, I enjoy
            converting ideas into real life products and building solutions that
            runs on the internet. Over the last 3 years, I've developed products
            for businesses around the world, built projects from
            conceptualization to deployment, providing solutions on small
            business websites to enterprise web applications with focus on
            quality, accessibility and fast user experiences.
          </div>

          <div
            data-aos="fade-up"
            className="mb-10 md:text-[1.1rem] text-muted-main fluid-lg text-gray-300"
          >
            Fast forward to today, having{" "}
            <span className="font-semibold">
              transitioned into tech from repairing mobile phones
            </span>{" "}
            in Owerri computer village (tetlow), I work as the{" "}
            <span className="font-semibold">lead Frontend engineer</span> at{" "}
            <span className="font-semibold">Remote Mobile Fix</span>, building
            accessible digital experience to make people connect to{" "}
            <span className="font-semibold"> phone repairers</span> within
            Owerri, Imo State, Nigeria. And to make phone repairers who don't
            own a physical shop to still meet and retain customers who can trust
            their online portfolio to have their phones fixed and delivered to
            their door step.
          </div>

          <div
            data-aos="fade-up"
            className="mb-10 text-muted-main fluid-lg text-gray-300 space-y-2"
          >
            <div className="font-semibold font">What I work with:</div>
            <div>
              <span className="font font-semibold">Languages:</span> Html,Css,
              Javascript, Typescript
            </div>
            <div>
              <span className="font font-semibold">Technologies:</span>{" "}
              React.js, NextJs, Tailwind, Bootstrap, Redux-toolkit, Firebase,
              Git, Vercel, Netlify
            </div>
          </div>
        </div>
        {/* small screens ends here */}
      </div>
    </>
  );
};
export default About;
