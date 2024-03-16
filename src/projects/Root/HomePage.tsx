import Svg from "./components/Svg.tsx";
import CardsDisplay from "./components/CardsDisplay.tsx";
import CardCarrousel from "./components/CardCarrousel.tsx";
import HeroSection from "./components/HeroSection.tsx";
function HomePage() {
  return (
    <div className="bg-slate-400 flex-col items-center justify-center pb-16   z-10">
      <HeroSection />
      <div>
        <div className="z-50">
          <CardCarrousel />
        </div>
        <Svg color="rgb(1 19 48 )" />
      </div>
      <CardsDisplay />
    </div>
  );
}

export default HomePage;
