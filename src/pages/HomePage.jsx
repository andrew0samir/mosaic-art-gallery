import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div className="min-h-screen   bg-[url(/pexels.jpg)] bg-cover">
      {/* bg-linear-to-b from-blue-300 via-sky-400 to-blue-300 */}
      <Helmet>
        <title>Mosaic Art Gallery - Home</title>
      </Helmet>
      <HeroSection />

      {/* <FeaturedSection /> */}

      <BlogSection />

      <AboutSection />
    </div>
  );
}

export default HomePage;
