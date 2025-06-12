import { useState } from "react";
import { useDatabase } from "../../context/DatabaseContext";
import { DBServiceApi } from "../../services/DBServiceApi";

function EditForm({ project, onClose }) {
  const { dispatch } = useDatabase();
  const [formData, setFormData] = useState({
    title: project.title,
    coverImageUrl: project.coverImageUrl,
    imageUrls: [...project.imageUrls],
  });
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFileUpload(file) {
    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.secure_url;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      let updatedData = { ...formData };

      // Upload new cover image if selected
      if (newCoverImage) {
        const coverUrl = await handleFileUpload(newCoverImage);
        updatedData.coverImageUrl = coverUrl;
      }

      // Upload new images if any
      if (newImages.length > 0) {
        const uploadPromises = newImages.map((file) => handleFileUpload(file));
        const newUrls = await Promise.all(uploadPromises);
        updatedData.imageUrls = [...formData.imageUrls, ...newUrls];
      }

      // Patch project in database
      await DBServiceApi.updateProject(project.id, updatedData);
      dispatch({
        type: "PROJECT_UPDATED",
        payload: { ...project, ...updatedData },
      });

      onClose();
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-4">Edit Project</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Cover Image Section */}
          <div>
            <label className="block text-white mb-2">Current Cover Image</label>
            <div className="relative">
              <img
                src={formData.coverImageUrl}
                alt="Cover"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, coverImageUrl: "" })}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full cursor-pointer"
              >
                &times;
              </button>
            </div>
            <input
              type="file"
              onChange={(e) => setNewCoverImage(e.target.files[0])}
              accept="image/*"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Project Images Section */}
          <div>
            <label className="block text-white mb-2">Project Images</label>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {formData.imageUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Project ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        imageUrls: prev.imageUrls.filter((_, i) => i !== index),
                      }))
                    }
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full cursor-pointer"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            <input
              type="file"
              multiple
              onChange={(e) => setNewImages(Array.from(e.target.files))}
              accept="image/*"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 rounded cursor-pointer ${
                isLoading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {isLoading ? "Updating..." : "Update Project"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
