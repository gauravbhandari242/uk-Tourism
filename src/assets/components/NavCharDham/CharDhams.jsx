import React, { useState } from "react";

function CharDham() {
  const [activeFaq, setActiveFaq] = useState(null);

const temples = [
  {
    name: "Kedarnath",
    location: "Rudraprayag, Uttarakhand",
    desc: "Dedicated to Lord Shiva and one of the 12 Jyotirlingas. Located at 3583 meters in the Himalayas.",
    img: "public/photo/image.png"
  },
  {
    name: "Badrinath",
    location: "Chamoli, Uttarakhand",
    desc: "Sacred temple of Lord Vishnu situated along the Alaknanda river.",
    img: "public/photo/Badrinath.jpeg"
  },
  {
    name: "Gangotri",
    location: "Uttarkashi, Uttarakhand",
    desc: "Origin of the holy River Ganga and dedicated to Goddess Ganga.",
    img: "public/photo/image copy 10.png"
  },
  {
    name: "Yamunotri",
    location: "Uttarkashi, Uttarakhand",
    desc: "Source of River Yamuna and dedicated to Goddess Yamuna.",
    img: "public/photo/Yamunotri feature.jpg"
  }
];

  

  const faqs = [
    {
      q: "What is the best time for Char Dham Yatra?",
      a: "May to October is the best time as temples remain open during this period.",
    },
    {
      q: "Is registration mandatory?",
      a: "Yes, government registration is mandatory for safety purposes.",
    },
    {
      q: "How many days are required?",
      a: "Typically 10-12 days are required to complete the full yatra.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <img
          src="public/photo/news-113.png"
          alt="Char Dham Hero"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Char Dham Yatra 2026
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience the Divine Himalayan Journey
          </p>
        </div>
      </section>

      {/* ================= TEMPLE CARDS ================= */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          The Four Sacred Shrines
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {temples.map((temple, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-3 transition duration-500"
            >
              <img
                src={temple.img}
                alt={temple.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700">
                  {temple.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {temple.location}
                </p>
                <p className="text-gray-600 text-sm">
                  {temple.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DETAILED SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16">
          Explore Each Dham In Detail
        </h2>

        {temples.map((temple, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={temple.img}
                alt={temple.name}
                className="rounded-3xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                {temple.name}
              </h3>
              <p className="text-gray-500 mb-3">{temple.location}</p>
              <p className="text-gray-700 leading-relaxed">
                {temple.desc} This sacred pilgrimage holds immense spiritual
                significance and attracts millions of devotees every year.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gray-100 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer"
              onClick={() =>
                setActiveFaq(activeFaq === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">{faq.q}</h4>
                <span className="text-green-600 text-2xl">
                  {activeFaq === index ? "-" : "+"}
                </span>
              </div>

              {activeFaq === index && (
                <p className="mt-4 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default CharDham;
