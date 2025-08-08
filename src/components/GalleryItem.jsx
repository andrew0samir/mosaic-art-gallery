import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { DBServiceApi } from "../services/DBServiceApi";
import Loader from "../ui/Loader";

function GalleryItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, isLoading, dispatch } = useDatabase();

  const project = projects.filter((project) => project.id == id);

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
    <div>
      <div className="min-h-screen bg-gradient-to-t from-sky-500 via-cyan-500 to-blue-500 py-30 px-4 flex items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center max-w-6xl">
          {project.map((piece) => (
            <div key={piece.title}>
              <div className="flex flex-col md:flex-row justify-start items-center mb-10 ">
                <div className="">
                  <button
                    className="px-6 py-3 bg-neutral-600 hover:bg-neutral-500 text-white rounded-lg cursor-pointer transition-all duration-300"
                    onClick={() => navigate(-1)}
                  >
                    {/* &larr; Back To Gallery */}
                    الرجوع للمعرض
                  </button>
                </div>
              </div>
              <div>
                <div className=" rounded-xl bg-white p-3 sm:p-4 transition-all duration-300 text-center mb-5">
                  <h1 className="text-xl font-bold text-gray-900 mb-5 ">
                    {piece.title}
                  </h1>
                  <div>
                    <img
                      src={piece.coverImageUrl}
                      alt={piece.title}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                {piece.imageUrls.map((url, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-center items-center box-border "
                  >
                    <div className="py-2">
                      <img src={url} alt={url} className="rounded-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
