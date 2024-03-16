import React from "react";
import Svg from "./Svg";
import { MacbookScroll } from "./ui/mackbookScroll";
import { TypewriterEffect } from "./ui/typeWriterEffect";

const HeroSection = () => {
  return (
    <section className="  text-white  bg-customBlue  ">
      <div className="max-w-4xl mx-auto text-center px-5 md:p-0 ">
        <TypewriterEffect
          cursorClassName="hidden"
          words={[
            {
              text: "Hi",
              className: "text-white",
            },
            {
              text: "!",
              className: "text-white",
            },
            {
              text: "I'm",
              className: "text-white",
            },
            {
              text: "Vatthana",
              className: "text-white",
            },
            {
              text: " an ",
              className: "text-white",
            },
            {
              text: "enthusiastic",
              className: "text-white",
            },
            {
              text: "full-stack",
              className: "text-customDarkOrange",
            },
            {
              text: "developer",
              className: "text-customDarkOrange",
            },
          ]}
        />
        <p className=" md:text-xl lg:text-3xl my-6 lg:my-16 ">
          🚀 Welcome to my corner of the web! 🚀{" "}
        </p>{" "}
        <p className=" text-sm md:text-lg lg:text-xl pb-16 mt-8  md:mx-16 lg:mx-0 leading-relaxed">
          I'm a <span className="text-customDarkOrange font-medium">MERN </span>
          stack enthusiast with a knack for{" "}
          <span className="text-customDarkOrange font-medium">
            TypeScript{" "}
          </span>{" "}
          and a passion for impactful web solutions. From
          <span className="text-customDarkOrange font-medium">
            {" "}
            MongoDB{" "}
          </span>{" "}
          to <span className="text-customDarkOrange font-medium">Node.js </span>
          , I thrive on crafting seamless experiences. With{" "}
          <span className="text-customDarkOrange font-medium">DevOps</span>{" "}
          chops and{" "}
          <span className="text-customDarkOrange font-medium">Next.js</span>{" "}
          finesse, I'm all about efficiency and performance. Let's build
          something extraordinary together! <br />
          <a
            className="font-semibold text-customDarkOrange text-xl "
            href="https://vatthana-boulom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Personal Page
          </a>{" "}
        </p>
        <div className="hidden md:block ">
          <MacbookScroll />
        </div>
      </div>

      <Svg color="rgb(148 163 184 )" />
    </section>
  );
};

export default HeroSection;
