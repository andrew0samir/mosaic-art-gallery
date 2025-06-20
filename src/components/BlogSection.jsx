import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogSection() {
  const [images] = useState([1, 2, 3]);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Latest ArtWorks
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
        {images.map((item) => (
          <div
            key={item}
            className="backdrop-blur-2xl rounded-2xl border border-gray-100 p-6 sm:p-6 group"
          >
            <img
              src={`splash2.jpg`}
              alt={`art piece`}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 group-hover:-translate-y-2 transition duration-500"
            />
            <div className="flex justify-between items-center mb-2 ">
              <h3 className="text-lg sm:text-xl font-semibold text-white ">
                Art Piece Title
              </h3>
              <button
                onClick={() => navigate("/gallery")}
                className="text-sm sm:text-base text-white group-hover:outline px-6 py-3 rounded-xl transition duration-500 cursor-pointer"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
