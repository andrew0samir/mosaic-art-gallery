import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-20 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-[#F1F6F9] rounded-xl transform -rotate-4"></div>
          <img
            src="splash4.jpg"
            alt="Artist at work"
            className="relative rounded-xl w-full h-[400px] sm:h-[600px] object-cover"
          />
        </div>
        <div className=" backdrop-blur-2xl rounded-xl p-8 sm:p-8 order-1 lg:order-2 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            About the Artist
          </h2>
          <p className="text-sm sm:text-base text-white mb-6">
            Discover the passion and creativity behind our mosaic artworks. Each
            piece tells a unique story through carefully crafted designs and
            vibrant colors.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto px-6 py-3 hover:outline rounded-xl text-white transition duration-300 cursor-pointer"
          >
            Learn More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
