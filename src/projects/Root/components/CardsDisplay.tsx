import Card from "./Card.tsx";
import CardExternal from "./CardExternal.tsx";
import TindogIMG from "../../../assets/images/root/tindog.png";
import ReactMealImg from "../../../assets/images/root/meals.jpg";
import BookStoreImg from "../../../assets/images/root/BookStore.jpg";
import { SiVite, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  BookStoreAppDescription,
  FoodOrderingAppDescription,
  TindogAppDescription,
} from "../descriptions/AppDescription.tsx";

const fullStackIcons = [
  SiVite,
  FaReact,
  BiLogoNodejs,
  BiLogoMongodb,
  SiExpress,
  SiTypescript,
];
const CardsDisplay = () => {
  return (
    <div className=" flex flex-col justify-center content-center lg:flex-row  flex-wrap gap-4 lg:gap-8 mx-auto max-w-full px-4 sm:px-2 lg:px-8 py-16  ">
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
      <CardExternal
        image={TindogIMG}
        route="https://vatthanab.github.io/TindogWebsite/"
        appName={"Tindog Website"}
        description="This is a simple Frontend website for a fictional app called Tindog."
        icons={[FaHtml5, FaBootstrap, FaCss3Alt]}
        modalDescription={<TindogAppDescription />}
        githubLink="https://github.com/VatthanaB/TindogWebsite"
      />
    </div>
  );
};

export default CardsDisplay;
