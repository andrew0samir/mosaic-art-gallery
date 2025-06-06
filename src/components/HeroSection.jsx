import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Carousel from "./Carousel";

function HeroSection() {
  const navigate = useNavigate();
  const images = [
    { src: "splash1.jpg" },
    { src: "splash2.jpg" },
    { src: "splash3.jpg" },
  ];

  return (
    <section className="relative h-dvh flex items-center justify-center px-4 py-16 my-10 sm:py-0 bg-[url(waves.jpg)] bg-cover bg-center">
      <div className="text-center z-10 max-w-[90%] sm:max-w-2xl mx-auto">
        <Carousel imagesArr={images} />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#14274E] mb-4 sm:mb-8">
          Mosaic Art Gallery
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={() => navigate("/gallery")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-300 bg-opacity-20 backdrop-blur-lg rounded-lg text-black hover:bg-opacity-30 transition duration-300 flex items-center justify-center gap-2"
          >
            View Gallery <ArrowRightIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 bg-opacity-80 backdrop-blur-lg rounded-lg text-white hover:bg-opacity-100 transition duration-300"
          >
            Contact Artist
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
