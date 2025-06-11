import { useEffect, useState } from "react";
import { useDatabase } from "../../context/DatabaseContext";
import { DBServiceApi } from "../../services/DBServiceApi";

function AdminEditDashboard() {
  const { projects, dispatch } = useDatabase();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    coverImageUrl: "",
    imageUrls: [],
  });

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      dispatch({ type: "LOADING" });
      const projectsData = await DBServiceApi.getProjects();
      dispatch({ type: "PROJECTS_LOADED", payload: projectsData });
      console.log("Loaded projects:", projectsData);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  }

  function handleEditClick(project) {
    setSelectedProject(project);
    setEditForm({
      title: project.title,
      coverImageUrl: project.coverImageUrl,
      imageUrls: project.imageUrls,
    });
    setIsEditing(true);
  }

  async function handleUpdateSubmit(e) {
    e.preventDefault();
    try {
      dispatch({ type: "LOADING" });
      const updatedProject = await DBServiceApi.updateProject(
        selectedProject.id,
        { ...selectedProject, ...editForm }
      );
      dispatch({ type: "PROJECT_UPDATED", payload: updatedProject });
      setIsEditing(false);
      setSelectedProject(null);
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

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
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
                onClick={() => handleEditClick(project)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold text-white mb-4">Edit Project</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Title</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm({ ...editForm, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Cover Image URL</label>
                <input
                  type="text"
                  value={editForm.coverImageUrl}
                  onChange={(e) =>
                    setEditForm({ ...editForm, coverImageUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedProject(null);
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminEditDashboard;