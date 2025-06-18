import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { DBServiceApi } from "../services/DBServiceApi";
import Loader from "../ui/Loader";

function GalleryItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, isLoading, dispatch } = useDatabase();

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      dispatch({ type: "LOADING" });
      const projectsData = await DBServiceApi.getProjects();
      dispatch({ type: "PROJECTS_LOADED", payload: projectsData });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  }

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-100 flex items-center justify-center flex-col px-4 py-16 sm:py-20">
        <div className="text-center backdrop-blur-lg rounded-xl p-8 sm:p-12 max-w-lg mx-auto">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer"
            onClick={() => navigate(-1)}
          >
            &larr; Back
          </button>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-700 mb-4">
            item name {id}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects
            .filter((project) => project.id == id)
            .map((piece) => (
              <div key={piece.id} className="group relative">
                <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 backdrop-blur-lg p-3 sm:p-4 transition-all duration-300">
                  <img
                    src={piece.coverImageUrl}
                    alt={piece.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg mb-3 sm:mb-4  duration-300 "
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
