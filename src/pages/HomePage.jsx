import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />

      <FeaturedSection />

      <BlogSection />

      <AboutSection />
    </div>
  );
}

export default HomePage;
