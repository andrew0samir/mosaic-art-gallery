import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { DBServiceApi } from "../services/DBServiceApi";
import Loader from "../ui/Loader";
import { Helmet } from "react-helmet";

function GalleryPage() {
  const { projects, isLoading, dispatch } = useDatabase();

  useEffect(() => {
    async function loadProjects() {
      try {
        dispatch({ type: "LOADING" });
        const projectsData = await DBServiceApi.getProjects();
        dispatch({ type: "PROJECTS_LOADED", payload: projectsData });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }

    loadProjects();
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-t from-sky-500 via-cyan-500 to-blue-500 py-30 px-4">
      <Helmet>
        <title>Mosaic Art Gallery - Gallery</title>
      </Helmet>
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
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-4">
            Explore our collection of unique mosaic artworks, each telling its
            own story through color and form.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-white p-3 sm:p-4 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg">
                <img
                  src={piece.coverImageUrl}
                  alt={piece.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-101"
                />
                <div className="flex justify-between items-center p-2 sm:p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                    {piece.title}
                  </h3>
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
