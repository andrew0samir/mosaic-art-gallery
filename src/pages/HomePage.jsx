import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 from-20% via-cyan-500 via-50% to-emerald-500 to-70%">
      <HeroSection />

      {/* <FeaturedSection />

      <BlogSection />

      <AboutSection /> */}
    </div>
  );
}

export default HomePage;
