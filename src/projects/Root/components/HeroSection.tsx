import React from "react";
import Svg from "./Svg";

const HeroSection = () => {
  return (
    <section className=" pt-16  text-white  bg-customBlue">
      <div className="max-w-4xl mx-auto text-center px-5 md:p-0">
        <h1 className="text-xl md:text-4xl font-semibold mb-4 ">
          Welcome to Vatthana's{" "}
          <span className="text-customDarkOrange lg:text-5xl">
            Projects Portfolio!
          </span>
        </h1>
        <p className="lg:text-xl mb-8 mt-8">
          Hello! 👋 I'm Vatthana, an enthusiastic junior full-stack developer
          excited about the world of web development. I specialize in the MERN
          (MongoDB, Express.js, React.js, Node.js) stack and have a growing
          proficiency in TypeScript. My journey involves continuous learning,
          and I'm passionate about creating meaningful and impactful web
          solutions.
        </p>
        <p className="lg:text-lg ">
          This site showcases a collection of projects on a single platform for
          easy access. As a junior developer, I'm eager to share my progress and
          invite you to explore my projects below. I'm actively learning and
          adapting to new technologies, and your feedback is highly appreciated!
          For more information about me, you can visit{" "}
          <a
            className="font-bold "
            href="https://vatthana-portfolio-a20e88488316.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Personal Page
          </a>{" "}
          .
        </p>
      </div>

      <Svg color="rgb(148 163 184 )" />
    </section>
  );
};

export default HeroSection;
