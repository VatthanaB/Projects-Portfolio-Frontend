import React from "react";
import Card from "./components/card";
import ReactMealImg from "../../assets/images/root/meals.jpg";
import BookStoreImg from "../../assets/images/root/BookStore.jpg";
import { SiVite, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
function HomePage() {
  const fullStackIcons = [
    SiVite,
    FaReact,
    BiLogoNodejs,
    BiLogoMongodb,
    SiExpress,
    SiTypescript,
  ];
  return (
    <div>
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Welcome to Vatthana's Projects Portfolio!
          </h1>
          <p className="text-lg text-gray-800 mb-8 mt-8">
            Hey there! 👋 I'm Vatthana, a junior full-stack developer passionate
            about crafting innovative web solutions. Explore my projects below!
          </p>
          <p className="text-lg text-gray-800">
            This site showcases a collection of projects on a single platform
            for easy access. Check out my work, for more information about me go
            on{" "}
            <a
              className="font-bold "
              href="https://vatthana-portfolio-a20e88488316.herokuapp.com/"
            >
              {" "}
              My Personal Page
            </a>{" "}
            .
          </p>
        </div>
      </section>
      <div
        className=" flex flex-col justify-center content-center lg:flex-row  flex-wrap gap-4 lg:gap-8 mx-auto max-w-7xl px-4 sm:px-2 lg:px-8 py-16 
       "
      >
        <Card
          image={BookStoreImg}
          route={"/book-store"}
          appName={" Book Store App"}
          description="This is a book store app that allows users to add, edit, and delete books."
          icons={[...fullStackIcons]}
        />
        <Card
          image={ReactMealImg}
          route={"/food-app"}
          appName={"Food Ordering App"}
          description="This is a food ordering app that allows users to order food from a menu."
          icons={[...fullStackIcons, SiTailwindcss]}
        />
      </div>
    </div>
  );
}

export default HomePage;
