import Gangotri from "/photo/Gangotri.jpeg";
import Kedarnath from "/photo/Kedarnath copy.jpeg";
import Badrinath from "/photo/Badrinath.jpeg";
import Yamunotri from "/photo/Yamunotri feature.jpg";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CharDham() {
  const Navigate = useNavigate();

  const [places] = useState([
    {
      img: Gangotri,
      name: "Gangotri",
      desc: "Origin of the sacred River Ganga, located in the Garhwal Himalayas."
    },
    {
      img: Kedarnath,
      name: "Kedarnath",
      desc: "One of the twelve Jyotirlingas of Lord Shiva, situated at high altitude."
    },
    {
      img: Badrinath,
      name: "Badrinath",
      desc: "Dedicated to Lord Vishnu, a major pilgrimage destination in India."
    },
    {
      img: Yamunotri,
      name: "Yamunotri",
      desc: "Source of the Yamuna River and an important Hindu pilgrimage site."
    },
  ]);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Char Dham
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {places.map((place, index) => (
          <Link
            to={`/place/${encodeURIComponent(place.name)}`}
            key={index}
            className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {place.desc}
              </p>

              <div className="text-right">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default CharDham;
