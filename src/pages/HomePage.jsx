import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 from-10% via-sky-500 via-50% to-emerald-500 to-90%">
      <HeroSection />

      <FeaturedSection />

      <BlogSection />

      <AboutSection />
    </div>
  );
}

export default HomePage;
