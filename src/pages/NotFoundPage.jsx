import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-600 to-cyan-500 flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="text-center bg-white shadow-lg shadow-red-900 rounded-2xl p-8 sm:p-12 max-w-lg mx-auto">
        <h1 className="text-6xl sm:text-8xl font-bold text-red-700 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-red-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-red-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 bg-opacity-80 rounded-xl text-white hover:bg-opacity-100 transition duration-300 cursor-pointer"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
