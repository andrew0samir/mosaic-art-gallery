import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div className="min-h-screen  bg-linear-to-b from-cyan-600 via-sky-400 to-blue-300">
      <HeroSection />

      <FeaturedSection />

      <BlogSection />

      <AboutSection />
      
    </div>
  );
}

export default HomePage;
