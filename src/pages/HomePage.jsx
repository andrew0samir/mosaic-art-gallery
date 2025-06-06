import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <HeroSection />

      <FeaturedSection />

      <BlogSection/>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-600 rounded-xl transform -rotate-6"></div>
            <img
              src="https://placehold.co/600x400/orange/white"
              alt="Artist at work"
              className="relative rounded-xl w-full h-[400px] sm:h-[600px] object-cover"
            />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 sm:p-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              About the Artist
            </h2>
            <p className="text-sm sm:text-base text-black mb-6">
              Discover the passion and creativity behind our mosaic artworks.
              Each piece tells a unique story through carefully crafted designs
              and vibrant colors.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 bg-opacity-80 rounded-lg text-white hover:bg-opacity-100 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
