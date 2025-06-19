import { useState, useEffect } from "react";
import { useDatabase } from "../../context/DatabaseContext";
import { DBServiceApi } from "../../services/DBServiceApi";
import Swal from "sweetalert2";

function ImagesUploader() {
  const { dispatch } = useDatabase();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [projectImagesPreview, setProjectImagesPreview] = useState([]);

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      if (coverImagePreview) URL.revokeObjectURL(coverImagePreview);
      projectImagesPreview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [coverImagePreview, projectImagesPreview]);

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

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error("Upload failed: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      throw error;
    }
  }

  async function handleMultipleUploads(files) {
    try {
      const uploadPromises = Array.from(files).map((file) =>
        handleFileUpload(file)
      );
      const urls = await Promise.all(uploadPromises);
      return urls;
    } catch (error) {
      console.error("Multiple uploads error:", error);
      throw error;
    }
  }

  function handleCoverImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      // Cleanup previous preview
      if (coverImagePreview) URL.revokeObjectURL(coverImagePreview);
      // Create new preview
      setCoverImagePreview(URL.createObjectURL(file));
    }
  }

  function handleProjectImagesChange(e) {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setProjectImages(files);
      // Cleanup previous previews
      projectImagesPreview.forEach((url) => URL.revokeObjectURL(url));
      // Create new previews
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setProjectImagesPreview(newPreviews);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload cover image
      const coverImageUrl = coverImage
        ? await handleFileUpload(coverImage)
        : null;

      // Upload project images
      const projectImageUrls =
        projectImages.length > 0
          ? await handleMultipleUploads(projectImages)
          : [];

      // Create project data
      const projectData = {
        title,
        coverImageUrl,
        imageUrls: projectImageUrls,
      };

      // Create project in database
      await DBServiceApi.createNewProject(projectData, dispatch);

      // Show success allert
      Swal.fire({
        title: "Done!",
        text: "Project uploaded successfully!",
        icon: "success",
      });
      // Reset form
      resetForm();
    } catch (error) {
      console.error("Error creating project:", error);
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
      Swal.fire({
        title: "Sorry!",
        text: "Error uploading project. Please try again.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function resetForm() {
    setTitle("");
    setCoverImage(null);
    setCoverImagePreview(null);
    setProjectImages([]);
    setProjectImagesPreview([]);
    document.getElementById("coverImage").value = "";
    document.getElementById("projectImages").value = "";
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl mt-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-white mb-2"
          >
            Artwork Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Enter artwork title"
          />
        </div>

        <div>
          <label
            htmlFor="coverImage"
            className="block text-lg font-semibold text-white mb-2"
          >
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            accept=".jpg, .jpeg, .png"
            onChange={handleCoverImageChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
          {coverImagePreview && (
            <div className="mt-2 p-2 bg-gray-700 rounded-lg">
              <img
                src={coverImagePreview}
                alt="Cover preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="projectImages"
            className="block text-lg font-semibold text-white mb-2"
          >
            Project Images
          </label>
          <input
            type="file"
            id="projectImages"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={handleProjectImagesChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
          {projectImagesPreview.length > 0 && (
            <div className="mt-2 grid grid-cols-3 gap-2 p-2 bg-gray-700 rounded-lg">
              {projectImagesPreview.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all cursor-pointer ${
            isLoading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </span>
          ) : (
            "Upload Project"
          )}
        </button>
      </form>
    </div>
  );
}

export default ImagesUploader;
