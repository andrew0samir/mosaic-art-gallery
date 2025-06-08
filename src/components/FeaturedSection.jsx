function FeaturedSection() {
  return (
    <section className="py-12 lg:my-24 sm:py-20 px-4 bg-[url(splash3.jpg)] bg-cover bg-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Featured Artworks
      </h2>
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="px-2 sm:px-4 h-full w-full">
              <div className="backdrop-blur-2xl rounded-xl p-3 sm:p-4 transition duration-300 ">
                <img
                  src={`splash1.jpg`}
                  alt={`Artwork ${item}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
