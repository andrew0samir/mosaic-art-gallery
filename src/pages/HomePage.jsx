import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import Slider from "react-slick";
// import "slick-carousel/slick-carousel.css";
// import "slick-carousel/slick-theme.css";

function HomePage() {
  const navigate = useNavigate();

  // Slider settings for infinite carousel
  //   const sliderSettings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       }
  //     ]
  //   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen flex items-center justify-center px-4 py-16 sm:py-0">
        <div className="text-center z-10 max-w-[90%] sm:max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8">
            Mosaic Art Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Discover the beauty of mosaic artistry through our curated
            collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={() => navigate("/gallery")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg text-black hover:bg-opacity-30 transition duration-300 flex items-center justify-center gap-2"
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

      {/* Featured Artworks Section */}
      <section className="py-12 lg:my-20 sm:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Featured Artworks
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="px-2 sm:px-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-3 sm:p-4 hover:bg-opacity-20 transition duration-300">
                  <img
                    src={`https://placehold.co/600x400/orange/white`}
                    alt={`Artwork ${item}`}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-20 px-4 bg-blue-900 bg-opacity-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Latest Blog Posts
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-opacity-20 transition duration-300"
            >
              <img
                src={`https://placehold.co/600x400/orange/white`}
                alt={`Blog ${item}`}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Art Piece Title
              </h3>
              <p className="text-sm sm:text-base text-gray-800 mb-4">
                Short description of the art piece and its significance in the
                collection.
              </p>
              <button className="text-sm sm:text-base text-gray-800 hover:text-gray-500 transition duration-300">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

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
