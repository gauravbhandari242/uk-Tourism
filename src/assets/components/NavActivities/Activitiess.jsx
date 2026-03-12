import React, { useState } from "react";

/* ================= IMAGE IMPORT ================= */
import trekking from "/photo/trekking.jpg";
import tourism from "/photo/tourism.webp";
import camping from "/photo/image copy 11.png";
import rafting from "/photo/rafting.jpg";
import thrill from "/photo/thrill.jpg";

/* ================= DATA ================= */
const activitiesData = [
  {
    title: "Trekking",
    desc: "Experience the beautiful Himalayan trekking adventure.",
    more: "Trekking in Uttarakhand offers breathtaking mountain views and amazing adventure experience.",
    img: trekking,
  },
  {
    title: "Temple Visit",
    desc: "Visit sacred Char Dham temples.",
    more: "Uttarakhand is known as Devbhoomi with famous temples Kedarnath and Badrinath.",
    img: tourism,
  },
  {
    title: "Camping",
    desc: "Enjoy camping under the stars.",
    more: "Camping offers peaceful nights with bonfire and beautiful mountain nature.",
    img: camping,
  },
  {
    title: "River Rafting",
    desc: "Adventure rafting in Rishikesh.",
    more: "Rishikesh river rafting is one of the most exciting adventure sports in India.",
    img: rafting,
  },
];

function Activities() {

  const [selected, setSelected] = useState(null);
  const [openBooking, setOpenBooking] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setOpenBooking(false);
    }, 2500);
  };

  return (
    <div className="bg-[#f4f7fb] min-h-screen font-[Poppins]">

      {/* HERO */}
      <div className="relative h-[65vh] flex items-center justify-center text-center">

        <img
          src={thrill}
          alt="activities"
          className="absolute w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 text-white px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Activities
          </h1>

          <p className="max-w-2xl mx-auto mb-8">
            Discover adventure, spirituality and natural beauty of Uttarakhand.
          </p>

          <button
            onClick={() => setOpenBooking(true)}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full shadow-lg"
          >
            Book Now
          </button>

        </div>
      </div>

      {/* ACTIVITIES */}
      <div className="px-6 md:px-16 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Activities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {activitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition"
            >

              <img
                src={item.img}
                className="h-56 w-full object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelected(item)}
                  className="text-orange-500 font-semibold"
                >
                  Read More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* READ MORE POPUP */}
      {selected && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white p-8 rounded-2xl max-w-lg w-full relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-2 text-xl"
            >
              ✕
            </button>

            <img
              src={selected.img}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-3">
              {selected.title}
            </h2>

            <p className="text-gray-600">
              {selected.more}
            </p>

          </div>

        </div>

      )}

      {/* BOOKING FORM POPUP */}
      {openBooking && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

          <div className="bg-white p-8 rounded-2xl w-full max-w-xl relative">

            <button
              onClick={() => setOpenBooking(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Book Your Adventure
            </h2>

            {submitted ? (

              <div className="text-center py-10">
                <h3 className="text-green-600 text-xl font-semibold">
                  ✅ Booking Submitted Successfully!
                </h3>
              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-4"
              >

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="border p-3 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="border p-3 rounded-lg"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="border p-3 rounded-lg"
                />

                <select
                  className="border p-3 rounded-lg"
                  required
                >
                  <option>Select Activity</option>
                  <option>Trekking</option>
                  <option>Camping</option>
                  <option>Temple Visit</option>
                  <option>River Rafting</option>
                </select>

                <input
                  type="date"
                  className="border p-3 rounded-lg md:col-span-2"
                  required
                />

                <textarea
                  placeholder="Additional Message"
                  className="border p-3 rounded-lg md:col-span-2"
                />

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg md:col-span-2"
                >
                  Submit Booking
                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default Activities;
