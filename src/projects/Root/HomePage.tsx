import Svg from "./components/Svg.tsx";
import CardsDisplay from "./components/CardsDisplay.tsx";
import CardCarrousel from "./components/CardCarrousel.tsx";
import HeroSection from "./components/HeroSection.tsx";
function HomePage() {
  return (
    <div className="bg-slate-400 dark:bg-slate-500 flex-col items-center justify-center pb-16  ">
      <HeroSection />

      <CardCarrousel />

      <Svg color="rgb(1 19 48 )" />

      <CardsDisplay />
    </div>
  );
}

export default HomePage;
