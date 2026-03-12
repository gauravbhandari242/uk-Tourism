import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {

  /* ================= FORM STATE ================= */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* ================= SUBMIT FUNCTION ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Booking Request Sent Successfully ✅");

    setName("");
    setEmail("");
    setMessage("");
  };

  /* ================= ACTIVITIES DATA ================= */
  const activities = [
    {
      title: "Trekking",
      img: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg",
    },
    {
      title: "Temple Visit",
      img: "/photo/image copy 13.png",
    },
    {
      title: "Camping",
      img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
    },
    {
      title: "River Rafting",
      img: "/photo/canoeing_and_kayaking.jpg",
    },
  ];

  return (
    <div className="font-[Poppins] bg-[#f4f7fb]">

      {/* ================= HERO ================= */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">

        <img
          src="/photo/ut.jpg"
          className="absolute w-full h-full object-cover brightness-50"
          alt="hero"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Uttarakhand Tourism
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-4">
            Experience the breathtaking beauty of the Himalayas and the
            spiritual charm of Uttarakhand. From sacred temples to thrilling
            adventure activities, this land offers unforgettable journeys.
          </p>

          <p className="max-w-3xl mx-auto text-md opacity-80 mb-8">
            Explore divine destinations like Kedarnath and Badrinath, enjoy
            peaceful camping under the stars, trek through stunning mountain
            trails, and feel the thrill of river rafting in the Ganga.
            Uttarakhand truly blends spirituality, adventure and nature.
          </p>

          <a href="#activities">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full transition">
              Explore Activities
            </button>
          </a>
        </motion.div>
      </div>

      {/* ================= ACTIVITIES ================= */}
      <div id="activities" className="py-24 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-[#0b1a2f]">
          Our Activities
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Uttarakhand is a paradise for adventure lovers and spiritual seekers.
          Discover trekking trails, sacred temples, peaceful camping spots and
          thrilling river rafting adventures surrounded by the majestic Himalayas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {activities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 transition duration-500"
            >
              <img
                src={item.img}
                className="h-56 w-full object-cover"
                alt={item.title}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <a href="#contact">
                  <button className="bg-[#0b1a2f] text-white px-6 py-2 rounded-full">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <div
        id="contact"
        className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-14 bg-white"
      >

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-10 rounded-3xl shadow"
        >

          <h2 className="text-3xl font-bold mb-8">
            Contact & Booking
          </h2>

          <input
            className="w-full p-4 mb-6 border rounded-xl outline-none"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full p-4 mb-6 border rounded-xl outline-none"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 mb-6 border rounded-xl outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transition"
          >
            Send Booking Request
          </button>
        </form>

        {/* INFO + MAP */}
        <div className="flex flex-col justify-center space-y-6">

          <h3 className="text-2xl font-semibold">
            📍 Uttarakhand Tourism
          </h3>

          <p className="text-gray-600">
            Plan your spiritual and adventure journey with us. Discover
            beautiful destinations, sacred temples and thrilling
            activities across Uttarakhand.
          </p>

          <iframe
            className="w-full h-72 rounded-2xl shadow"
            src="https://www.google.com/maps?q=Uttarakhand&output=embed"
            loading="lazy"
            title="map"
          ></iframe>

        </div>

      </div>
    </div>
  );
}

export default Home;
