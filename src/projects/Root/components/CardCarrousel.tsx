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
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  BookStoreAppDescription,
  CopainBakeryQuizDescription,
  FoodOrderingAppDescription,
  InfiniteAnimeViewerDescription,
  TindogAppDescription,
  VatthanasExpenseTrackerDescription,
} from "../descriptions/AppDescription.tsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const fullStackIcons = [
  SiVite,
  FaReact,
  BiLogoNodejs,
  BiLogoMongodb,
  SiExpress,
  SiTypescript,
];

const CardCarrousel = () => {
  const cardClass = "w-full flex justify-center";
  return (
    // <div className=" carousel w-full rounded-box mt-20   ">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      swipeable
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      className="my-20 hidden lg:block"
      emulateTouch={true}
      stopOnHover={true}
      transitionTime={1500}
    >
      <div className={cardClass}>
        <Card
          image={BookStoreImg}
          route={"/book-store"}
          appName={" Book Store App"}
          description="This is a book store app that allows users to add, edit, and delete books."
          icons={[...fullStackIcons, SiTailwindcss]}
          modalDescription={<BookStoreAppDescription />}
          githubLink="https://github.com/VatthanaB/Projects-Portfolio-Frontend/tree/main/src/projects/BookStoreProject"
          cardCarrousel={true}
        />
      </div>
      <div className={cardClass}>
        <CardExternal
          image={ExpenseTrackerImg}
          route="https://vatthana-expense-tracker.web.app/" // Replace with your actual deployment URL
          appName={"Vatthana's Expense Tracker"}
          description="Expense Tracker App made with Dart and Flutter. Theme responsive and Dark Mode. Manage your expenses with ease."
          icons={[SiDart, SiFlutter]}
          modalDescription={<VatthanasExpenseTrackerDescription />}
          githubLink="https://github.com/VatthanaB/Flutter-expense_tracker" // Replace with your actual GitHub repository link
          cardCarrousel={true}
        />
      </div>
      <div className={cardClass}>
        <CardExternal
          image={InfiniteAnimeViewerIMG}
          cardCarrousel={true}
          route="https://infinite-anime-viewer.vercel.app/" // Replace with your actual deployment URL
          appName={"Infinite Anime Viewer"}
          description="Explore the world of anime with seamless infinite scrolling."
          icons={[FaReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer]}
          modalDescription={<InfiniteAnimeViewerDescription />}
          githubLink="https://github.com/VatthanaB/Anime-Infinite-Scrolling" // Replace with your actual GitHub repository link
        />
      </div>
      <div className={cardClass}>
        <Card
          image={ReactMealImg}
          route={"/food-app"}
          appName={"Food Ordering App"}
          description="This is a food ordering app that allows users to order food from a menu."
          icons={[...fullStackIcons]}
          modalDescription={<FoodOrderingAppDescription />}
          cardCarrousel={true}
          githubLink="https://github.com/VatthanaB/Projects-Portfolio-Frontend/tree/main/src/projects/FoodOrderingApp"
        />
      </div>
      <div className={cardClass}>
        <CardExternal
          image={CopainAppImg}
          route="https://copainquizapp-5b0fe.web.app/" // Replace with your actual deployment URL
          appName={"Copain Bakery Quiz App"}
          description="My First App made with Dart and Flutter. A simple Quiz App for a local bakery."
          icons={[SiDart, SiFlutter]}
          modalDescription={<CopainBakeryQuizDescription />}
          githubLink="https://github.com/VatthanaB/Flutter_Mobile_Quiz_App" // Replace with your actual GitHub repository link
          cardCarrousel={true}
        />
      </div>
      <div className={cardClass}>
        <CardExternal
          image={TindogIMG}
          route="https://vatthanab.github.io/TindogWebsite/"
          appName={"Tindog Website"}
          description="This is a simple Frontend website for a fictional app called Tindog."
          icons={[FaHtml5, FaBootstrap, FaCss3Alt]}
          modalDescription={<TindogAppDescription />}
          cardCarrousel={true}
          githubLink="https://github.com/VatthanaB/TindogWebsite"
        />
      </div>
    </Carousel>
  );
};

export default CardCarrousel;
