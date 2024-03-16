import React from "react";
import Svg from "./Svg";
import { MacbookScroll } from "./ui/mackbookScroll";
import { TypewriterEffect } from "./ui/typeWriterEffect";
import { text } from "stream/consumers";

const HeroSection = () => {
  return (
    <section className="  text-white  bg-customBlue mb-16 md:mb-0">
      <div className="max-w-4xl mx-auto text-center px-5 md:p-0 ">
        <h1 className="text-xl md:text-4xl font-semibold mb-4 md:hidden">
          Welcome to Vatthana's{" "}
          <span className="text-customDarkOrange lg:text-5xl">
            Projects Portfolio!
          </span>
        </h1>

        <p className="lg:text-xl mb-8 mt-8 md:hidden">
          🚀 Welcome to my corner of the web! 🚀 I'm a MERN stack specialist
          with a knack for TypeScript and a passion for impactful web solutions.
          From MongoDB to Node.js, I thrive on crafting seamless experiences.
          With DevOps chops and Next.js finesse, I'm all about efficiency and
          performance. Let's build something extraordinary together!
        </p>
        <TypewriterEffect
          words={[
            {
              text: "Hello",
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
            {
              text: ".",
              className: "text-white",
            },
          ]}
        />
        {/* <p className="lg:text-lg ">
          This site showcases a collection of projects on a single platform for
          easy access. As a junior developer, I'm eager to share my progress and
          invite you to explore my projects below. I'm actively learning and
          adapting to new technologies, and your feedback is highly appreciated!
          For more information about me, you can visit{" "}
          <a
            className="font-bold "
            href="https://vatthana-boulom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Personal Page
          </a>{" "}
          .
        </p> */}
        <div className="hidden md:block">
          <MacbookScroll />
        </div>

        <div className="h-96 mb-96 hidden md:block"></div>
      </div>

      <Svg color="rgb(148 163 184 )" />
    </section>
  );
};

export default HeroSection;
