import Svg from "./components/Svg.tsx";
import CardsDisplay from "./components/CardsDisplay.tsx";
import CardCarrousel from "./components/CardCarrousel.tsx";
import HeroSection from "./components/HeroSection.tsx";
function HomePage() {
  return (
    <div className="bg-slate-400 flex-col items-center justify-center ">
      <HeroSection />
      <div>
        <CardCarrousel />
        <Svg color="rgb(1 19 48 )" />
      </div>
      <CardsDisplay />
    </div>
  );
}

export default HomePage;
