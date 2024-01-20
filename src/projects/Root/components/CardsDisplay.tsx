import Card from "./Card.tsx";
import CardExternal from "./CardExternal.tsx";
import TindogIMG from "../../../assets/images/root/tindog.png";
import ReactMealImg from "../../../assets/images/root/meals.jpg";
import BookStoreImg from "../../../assets/images/root/BookStore.jpg";
import CopainAppImg from "../../../assets/images/root/CopainApp.png";
import ExpenseTrackerImg from "../../../assets/images/root/ExpenseTrackerApp.jpg";
import InfiniteAnimeViewerIMG from "../../../assets/images/root/AnimeInfiniteviewer.png";
import {
  SiVite,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiDart,
  SiFlutter,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  BookStoreAppDescription,
  FoodOrderingAppDescription,
  InfiniteAnimeViewerDescription,
  TindogAppDescription,
  CopainBakeryQuizDescription,
  VatthanasExpenseTrackerDescription,
} from "../descriptions/AppDescription.tsx";
import Svg from "./Svg.tsx";

const fullStackIcons = [
  SiVite,
  FaReact,
  BiLogoNodejs,
  BiLogoMongodb,
  SiExpress,
  SiTypescript,
];
const CardsDisplay = () => {
  const cardsToDisplay = (
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
      />{" "}
      <CardExternal
        image={ExpenseTrackerImg}
        route="https://vatthana-expense-tracker.web.app/" // Replace with your actual deployment URL
        appName={"Vatthana's Expense Tracker"}
        description="Expense Tracker App made with Dart and Flutter. Theme responsive and Dark Mode. Manage your expenses with ease."
        icons={[SiDart, SiFlutter]}
        modalDescription={<VatthanasExpenseTrackerDescription />}
        githubLink="https://github.com/VatthanaB/Flutter-expense_tracker" // Replace with your actual GitHub repository link
      />
      <CardExternal
        image={InfiniteAnimeViewerIMG}
        route="https://infinite-anime-viewer.vercel.app/" // Replace with your actual deployment URL
        appName={"Infinite Anime Viewer"}
        description="Explore the world of anime with seamless infinite scrolling and captivating animations."
        icons={[FaReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer]}
        modalDescription={<InfiniteAnimeViewerDescription />}
        githubLink="https://github.com/VatthanaB/Anime-Infinite-Scrolling" // Replace with your actual GitHub repository link
      />
      <CardExternal
        image={CopainAppImg}
        route="https://copainquizapp-5b0fe.web.app/" // Replace with your actual deployment URL
        appName={"Copain Bakery Quiz App"}
        description="My First App made with Dart and Flutter. A simple Quiz App for a local bakery."
        icons={[SiDart, SiFlutter]}
        modalDescription={<CopainBakeryQuizDescription />}
        githubLink="https://github.com/VatthanaB/Flutter_Mobile_Quiz_App" // Replace with your actual GitHub repository link
      />
    </div>
  );
  return (
    <div className="flex-col items-center bg-customBlue">
      <h1 className="text-5xl  font-boldmd:text-4xl font-bold  text-customDarkOrange text-center pt-10  ">
        My Projects
      </h1>
      {cardsToDisplay}
      <Svg color="rgb(148 163 184 )" />
    </div>
  );
};

export default CardsDisplay;
