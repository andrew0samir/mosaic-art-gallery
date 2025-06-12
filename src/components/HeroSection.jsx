import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

function HeroSection() {
  const navigate = useNavigate();
  const images = [
    { src: "splash1.jpg" },
    { src: "splash2.jpg" },
    { src: "splash3.jpg" },
    { src: "splash4.jpg" },
  ];

  return (
    <section className="relative h-dvh flex items-center justify-center px-4 py-16 my-10 sm:py-0">
      <div className="text-center z-10 max-w-[90%] sm:max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#14274E] mb-4 sm:mb-8">
          Mosaic Art Gallery
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pb-6">
          <button
            onClick={() => navigate("/gallery")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#14274E] hover:bg-[#374b74]  text-white rounded-lg transition duration-300 cursor-pointer"
          >
            View Gallery &rarr;
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#14274E] hover:bg-[#374b74] text-white rounded-lg transition duration-300 cursor-pointer"
          >
            Contact Artist
          </button>
        </div>
        {/* update the images prop with the real images data */}
        <Carousel imagesArr={images} />
      </div>
    </section>
  );
}

export default HeroSection;
