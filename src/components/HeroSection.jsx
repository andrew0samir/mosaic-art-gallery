import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

function HeroSection() {
  const navigate = useNavigate();
  const images = [
    { src: "https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316636/mosiac_3_a472ap.jpg" },
    { src: "https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316634/mosiac_2_woi5c6.jpg" },
    { src: "https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316631/mosiac_1_v4gwwl.jpg" },
  ];

  return (
    <section className="relative h-dvh flex items-center justify-center px-4 py-16  sm:py-0" dir="rtl">
      <div className="text-center max-w-[90%] sm:max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-8">
          {/* Mosaic Art Gallery */}
          معرض أعمال الموزاييك الفنية
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
          <button
            onClick={() => navigate("/gallery")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#1c7181] hover:bg-[#165865]  text-white rounded-lg transition duration-300 cursor-pointer"
          >
            {/* View Gallery &rarr; */}
            شاهد المعرض &larr;
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#1c7181] hover:bg-[#165865] text-white rounded-lg transition duration-300 cursor-pointer"
          >
            {/* Contact Artist */}
            تواصل معي
          </button>
        </div>
        {/* update the images prop with the real images data */}
        <Carousel imagesArr={images} />
      </div>
    </section>
  );
}

export default HeroSection;
