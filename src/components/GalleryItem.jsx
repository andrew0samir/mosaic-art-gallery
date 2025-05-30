// eslint-disable-next-line no-unused-vars
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function GalleryItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-100 flex items-center justify-center px-4 py-16 sm:py-20">
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 sm:p-12 max-w-lg mx-auto">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer"
            onClick={() => navigate(-1)}
          >
            &larr; Back
          </button>
          <h1 className="text-6xl sm:text-8xl font-bold text-gray-700 mb-4">
            item {id}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
