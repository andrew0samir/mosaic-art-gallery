import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function GalleryPage() {
  // Sample art pieces data - replace with your actual data
  const [artPieces] = useState([
    {
      id: 1,
      title: "Mosaic Harmony",
      image: "https://placehold.co/600x400/orange/white",
      description: "A vibrant exploration of color and form",
    },
    {
      id: 2,
      title: "Urban Fragments",
      image: "https://placehold.co/600x400/orange/white",
      description: "Contemporary urban landscapes in mosaic",
    },
    {
      id: 3,
      title: "Natures Pattern",
      image: "https://placehold.co/600x400/orange/white",
      description: "Organic patterns inspired by nature",
    },
    {
      id: 4,
      title: "Abstract Flow",
      image: "https://placehold.co/600x400/orange/white",
      description: "Dynamic abstract composition",
    },
    {
      id: 5,
      title: "Geometric Dreams",
      image: "https://placehold.co/600x400/orange/white",
      description: "Precision meets creativity",
    },
    {
      id: 6,
      title: "Cultural Fusion",
      image: "https://placehold.co/600x400/orange/white",
      description: "Blending traditional and modern elements",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-blue-200 py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8">
            Our Gallery
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Explore our collection of unique mosaic artworks, each telling its
            own story through color and form.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 backdrop-blur-lg p-3 sm:p-4 transition-all duration-300 hover:bg-opacity-20 hover:transform hover:scale-[1.02]">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-2 sm:p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                    {piece.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {piece.description}
                  </p>
                  <button>
                    <Link
                      className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 bg-opacity-80 rounded-lg text-white hover:bg-opacity-100 transition duration-300"
                      to={`${piece.id}`}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
