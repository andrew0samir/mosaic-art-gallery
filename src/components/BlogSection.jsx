import { useNavigate } from "react-router-dom";

function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 " dir="rtl">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        {/* Latest ArtWorks */}
        أخر الأعمال الفنية
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
        <div className="backdrop-blur-2xl rounded-2xl border border-gray-100 p-6 sm:p-6 group">
          <img
            src="https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316631/mosiac_1_v4gwwl.jpg"
            alt="art piece"
            title="لوحة العائلة المقدسة"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 group-hover:-translate-y-2 transition duration-500"
          />
          <div className="flex justify-between items-center mb-2 ">
            <h3 className="text-lg sm:text-xl font-semibold text-white ">
              لوحة العائلة المقدسة
            </h3>
            <button
              onClick={() => navigate("/gallery")}
              className="text-sm sm:text-base text-white group-hover:outline px-6 py-3 rounded-xl transition duration-500 cursor-pointer"
            >
              {/* Read More &rarr; */}
              أكتشف المزيد &larr;
            </button>
          </div>
        </div>
        <div className="backdrop-blur-2xl rounded-2xl border border-gray-100 p-6 sm:p-6 group">
          <img
            src="https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316634/mosiac_2_woi5c6.jpg"
            alt="art piece"
            title="لوحة فلك نوح"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 group-hover:-translate-y-2 transition duration-500"
          />
          <div className="flex justify-between items-center mb-2 ">
            <h3 className="text-lg sm:text-xl font-semibold text-white ">
              لوحة فلك نوح
            </h3>
            <button
              onClick={() => navigate("/gallery")}
              className="text-sm sm:text-base text-white group-hover:outline px-6 py-3 rounded-xl transition duration-500 cursor-pointer"
            >
              {/* Read More &rarr; */}
              أكتشف المزيد &larr;
            </button>
          </div>
        </div>
        <div className="backdrop-blur-2xl rounded-2xl border border-gray-100 p-6 sm:p-6 group">
          <img
            src="https://res.cloudinary.com/dru0rz7ll/image/upload/v1751316636/mosiac_3_a472ap.jpg"
            alt="art piece"
            title="لوحة مارجرجس الروماني"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 group-hover:-translate-y-2 transition duration-500"
          />
          <div className="flex justify-between items-center mb-2 ">
            <h3 className="text-lg sm:text-xl font-semibold text-white ">
              لوحة مارجرجس الروماني
            </h3>
            <button
              onClick={() => navigate("/gallery")}
              className="text-sm sm:text-base text-white group-hover:outline px-6 py-3 rounded-xl transition duration-500 cursor-pointer"
            >
              {/* Read More &rarr; */}
              أكتشف المزيد &larr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
