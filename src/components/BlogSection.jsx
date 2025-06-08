import { useState } from "react";

function BlogSection() {
  const [images] = useState([1, 2, 3]);

  return (
    <section className="py-12 sm:py-20 px-4 bg-[url(splash3.jpg)] bg-cover bg-center">
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
              alt={`Blog ${item}`}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 group-hover:-translate-y-2 transition duration-500"
              loading="lazy"
            />
            <div className="flex justify-between items-center mb-2 ">
              <h3 className="text-lg sm:text-xl font-semibold text-white ">
                Art Piece Title
              </h3>
              <button className="text-sm sm:text-base text-white md:text-gray-400 group-hover:text-gray-200 group-hover:outline px-6 py-3 rounded-xl transition duration-500 cursor-pointer">
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
