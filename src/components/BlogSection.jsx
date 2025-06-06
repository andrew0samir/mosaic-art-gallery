function BlogSection() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-blue-900 bg-opacity-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Latest Blog Posts
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-opacity-20 transition duration-300"
          >
            <img
              src={`https://placehold.co/600x400/orange/white`}
              alt={`Blog ${item}`}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Art Piece Title
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Short description of the art piece and its significance in the
              collection.
            </p>
            <button className="text-sm sm:text-base text-gray-800 hover:text-gray-500 transition duration-300">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
