import cardArray from "../descriptions/cardArray.tsx";
import React from "react";
import { Carousel } from "react-responsive-carousel";
const CardCarrousel = () => {
  const carrouselItems = cardArray.map((card) => (
    <div className="w-full flex justify-center">
      {React.cloneElement(card, { cardCarrousel: true })}
    </div>
  ));
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
      {carrouselItems}
      {/* <div className="  w-full flex justify-center">
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
      </div> */}
    </Carousel>
  );
};

export default CardCarrousel;
