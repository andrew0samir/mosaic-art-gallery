// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center mb-6 sm:mb-8"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-100 text-center max-w-3xl mx-auto px-4"
        >
          Discover the journey behind our mosaic artistry and the passion that
          drives our creative process.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              We strive to create unique mosaic artworks that tell stories and
              capture emotions through intricate patterns and vibrant colors.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              Each piece is carefully crafted to bring beauty and inspiration to
              spaces, creating lasting impressions that resonate with viewers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-3"></div>
            <img
              src="https://placehold.co/600x400/orange/white"
              alt="Mosaic art vision"
              className="relative rounded-xl w-full h-[300px] sm:h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-xl transform -rotate-3"></div>
            <img
              src="https://placehold.co/600x400/orange/white"
              alt="Creative process"
              className="relative rounded-xl w-full h-[300px] sm:h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 sm:p-8 order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              Our Process
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              From concept to creation, our artistic process involves meticulous
              attention to detail and a deep understanding of mosaic techniques.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              We combine traditional methods with modern innovations to create
              contemporary artworks that push the boundaries of mosaic art.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 sm:p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-black text-center mb-8 sm:mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Creativity",
                description:
                  "Pushing boundaries and exploring new possibilities in mosaic art.",
              },
              {
                title: "Quality",
                description:
                  "Using the finest materials and techniques to ensure lasting beauty.",
              },
              {
                title: "Innovation",
                description:
                  "Combining traditional methods with contemporary approaches.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-4 sm:p-6"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
