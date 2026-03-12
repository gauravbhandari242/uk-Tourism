import { useParams } from "react-router-dom";
import Kedarnath from "/photo/Kedarnath copy.jpeg";

function PlaceDetails() {
  const { name } = useParams();

  const place = {
    title: "Kedarnath Dham",
    location: "Rudraprayag, Uttarakhand",
    image: Kedarnath,
    description:
      "Kedarnath Temple is one of the holiest Hindu temples dedicated to Lord Shiva. Located at 3,583 meters above sea level near the Mandakini River, it is one of the 12 Jyotirlingas and a major part of the Char Dham Yatra.",
    highlights: [
      "One of the 12 Jyotirlingas",
      "Located at 3,583 meters altitude",
      "Surrounded by snow-covered Himalayan peaks",
      "Major pilgrimage during May–October"
    ],
    history:
      "The temple is believed to have been built by the Pandavas and later revived by Adi Shankaracharya in the 8th century.",
    travel:
      "Best time to visit is between May and June, and September to October. Winter season experiences heavy snowfall."
  };

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="relative h-[600px]">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {place.title}
          </h1>
          <p className="text-lg md:text-xl">
            {place.location}
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg transition">
            Book Your Yatra
          </button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          About the Temple
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          {place.description}
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Key Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {place.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <p className="text-lg font-medium text-gray-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY & TRAVEL */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-2xl shadow">
          <h3 className="text-2xl font-bold mb-4">History</h3>
          <p className="text-gray-700 leading-relaxed">
            {place.history}
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow">
          <h3 className="text-2xl font-bold mb-4">Travel Information</h3>
          <p className="text-gray-700 leading-relaxed">
            {place.travel}
          </p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Location Map
          </h2>

          <iframe
            src="https://www.google.com/maps?q=Kedarnath&output=embed"
            className="w-full h-[450px] rounded-2xl shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Plan Your Spiritual Journey Today
        </h2>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us Now
        </button>
      </section>

    </div>
  );
}

export default PlaceDetails;
