import Svg from "./components/Svg.tsx";
import CardsDisplay from "./components/CardsDisplay.tsx";
import CardCarrousel from "./components/CardCarrousel.tsx";
function HomePage() {
  return (
    <div className="bg-slate-400 flex-col items-center justify-center ">
      <section className=" pt-16  text-white  bg-customBlue">
        <div className="max-w-4xl mx-auto text-center px-5 md:p-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
            Welcome to Vatthana's{" "}
            <span className="text-customDarkOrange">Projects Portfolio !</span>
          </h1>
          <p className="lg:text-lg  mb-8 mt-8">
            Hey there! 👋 I'm Vatthana, a junior full-stack developer passionate
            about crafting innovative web solutions. Explore my projects below!
          </p>
          <p className="lg:text-lg ">
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
      <div>
        <CardCarrousel />
        <Svg color="rgb(1 19 48 )" />
      </div>
      <CardsDisplay />
    </div>
  );
}

export default HomePage;
