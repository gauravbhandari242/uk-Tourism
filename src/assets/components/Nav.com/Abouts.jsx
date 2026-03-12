

function About() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="public/photo/s3.jpg"
          alt="Uttarakhand"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Uttarakhand
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover the Land of Gods – A paradise of mountains, rivers, temples,
            and adventure.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="public/photo/.gogo.jpg"
              alt="Mountains"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              The Land of Dev Bhoomi
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uttarakhand is known for its breathtaking Himalayan landscapes,
              sacred pilgrimage sites like Char Dham, and thrilling adventure
              activities. From peaceful hill stations to spiritual temples,
              it offers something for every traveler.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're seeking spirituality, nature, or adventure —
              Uttarakhand welcomes you with open arms.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Why Visit Uttarakhand?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Spiritual Tourism
            </h3>
            <p className="text-gray-600">
              Visit sacred temples and pilgrimage sites including the
              world-famous Char Dham Yatra.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Adventure Activities
            </h3>
            <p className="text-gray-600">
              Enjoy trekking, river rafting, camping, skiing, and more
              in the lap of the Himalayas.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Natural Beauty
            </h3>
            <p className="text-gray-600">
              Explore lush forests, snow-capped peaks, serene lakes,
              and stunning hill stations.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
