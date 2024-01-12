import Card from "./Card.tsx";
import CardExternal from "./CardExternal.tsx";
import TindogIMG from "../../../assets/images/root/tindog.png";
import ReactMealImg from "../../../assets/images/root/meals.jpg";
import BookStoreImg from "../../../assets/images/root/BookStore.jpg";
import InfiniteAnimeViewerIMG from "../../../assets/images/root/AnimeInfiniteviewer.png";
import {
  SiVite,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  BookStoreAppDescription,
  FoodOrderingAppDescription,
  InfiniteAnimeViewerDescription,
  TindogAppDescription,
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
  return (
    // <div className=" carousel w-full rounded-box mt-20   ">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={2500}
      swipeable
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      className="mt-20"
      emulateTouch={true}
      stopOnHover={true}
      transitionTime={1000}
    >
      <div className="  w-full flex justify-center">
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
      <div className="w-full flex justify-center">
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
      <div className=" w-full flex justify-center">
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
      <div className=" w-full flex justify-center">
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
    </Carousel>
  );
};

export default CardCarrousel;
