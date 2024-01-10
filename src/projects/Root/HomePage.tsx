import Card from "./components/Card.tsx";
import ReactMealImg from "../../assets/images/root/meals.jpg";
import BookStoreImg from "../../assets/images/root/BookStore.jpg";
import { SiVite, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  BookStoreAppDescription,
  FoodOrderingAppDescription,
} from "./descriptions/AppDescription.tsx";
import Svg from "./components/Svg.tsx";
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
    <div className="bg-slate-400">
      <section className=" pt-16  text-white  bg-customBlue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
            Welcome to Vatthana's{" "}
            <span className="text-customDarkOrange">Projects Portfolio !</span>
          </h1>
          <p className="text-lg  mb-8 mt-8">
            Hey there! 👋 I'm Vatthana, a junior full-stack developer passionate
            about crafting innovative web solutions. Explore my projects below!
          </p>
          <p className="text-lg ">
            This site showcases a collection of projects on a single platform
            for easy access. Check out my work, for more information about me go
            on{" "}
            <a
              className="font-bold "
              href="https://vatthana-portfolio-a20e88488316.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              My Personal Page
            </a>{" "}
            .
          </p>
        </div>
        <Svg color="rgb(148 163 184 )" />
      </section>

      <div className=" flex flex-col justify-center content-center lg:flex-row  flex-wrap gap-4 lg:gap-8 mx-auto max-w-7xl px-4 sm:px-2 lg:px-8 py-16  ">
        <Card
          image={BookStoreImg}
          route={"/book-store"}
          appName={" Book Store App"}
          description="This is a book store app that allows users to add, edit, and delete books."
          icons={[...fullStackIcons, SiTailwindcss]}
          modalDescription={<BookStoreAppDescription />}
          githubLink="https://github.com/VatthanaB/Projects-Portfolio-Frontend/tree/main/src/projects/BookStoreProject"
        />
        <Card
          image={ReactMealImg}
          route={"/food-app"}
          appName={"Food Ordering App"}
          description="This is a food ordering app that allows users to order food from a menu."
          icons={[...fullStackIcons]}
          modalDescription={<FoodOrderingAppDescription />}
          githubLink="https://github.com/VatthanaB/Projects-Portfolio-Frontend/tree/main/src/projects/FoodOrderingApp"
        />
      </div>
    </div>
  );
}

export default HomePage;
