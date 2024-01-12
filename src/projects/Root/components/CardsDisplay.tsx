import cardArray from "../descriptions/cardArray.tsx";
import Svg from "./Svg.tsx";

const CardsDisplay = () => {
  return (
    <div className="flex-col items-center bg-customBlue">
      <h1 className="text-5xl  font-boldmd:text-4xl font-bold  text-customDarkOrange text-center pt-10  ">
        My Projects
      </h1>
      <div className=" flex flex-col justify-center content-center lg:flex-row  flex-wrap gap-4 lg:gap-8 mx-auto max-w-full px-4 sm:px-2 lg:px-8 py-16  ">
        {cardArray.map((card) => card)}
      </div>
      <Svg color="rgb(148 163 184 )" />
    </div>
  );
};

export default CardsDisplay;
