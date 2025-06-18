import { useEffect, useState } from "react";
import { useDatabase } from "../../context/DatabaseContext";
import { DBServiceApi } from "../../services/DBServiceApi";
import EditForm from "./EditForm";
import Loader from "../../ui/Loader";

function AdminDashboard() {
  const { projects, isLoading, dispatch } = useDatabase();
  const [selectedProject, setSelectedProject] = useState(null);

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

  async function handleDelete(projectId) {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        dispatch({ type: "LOADING" });
        await DBServiceApi.deleteProject(projectId);
        dispatch({ type: "PROJECT_DELETED", payload: projectId });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Project Management</h2>

      {isLoading && <Loader />}

      {!isLoading && projects.length === 0 && (
        <div className="text-center text-gray-300 my-8">
          No projects found. Add a new project using the uploader.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.coverImageUrl}
            className="bg-gray-800 rounded-lg p-4 shadow-lg"
          >
            <img
              src={project.coverImageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <EditForm
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default AdminDashboard;
