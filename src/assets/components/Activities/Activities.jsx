import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const activities = [
  { img: "/photo/canoeing_and_kayaking.jpg", name: "Canoeing" },
  { img: "/photo/rafting.jpg", name: "Rafting" },
  { img: "/photo/trekking.jpg", name: "Trekking" },
  { img: "/photo/skiing (1).jpg", name: "Skiing" },
  { img: "/photo/cyclig.jpg", name: "Cycling" },
];

const nainitalPlaces = [
  {
    img: "/public/photo/image copy 14.png",
    title: "Naini Lake",
    desc: "The heart of Nainital where tourists enjoy boating and scenic mountain views."
  },
  {
    img: "/public/photo/image copy 15.png",
    title: "Mall Road",
    desc: "Famous street for shopping, cafes and beautiful evening walks."
  },
  {
    img: "/public/photo/image copy 16.png",
    title: "Snow View Point",
    desc: "One of the best spots to see the Himalayan snow peaks."
  }
];

function Activities() {

  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const detailsRef = useRef(null);

  const handleClick = (name) => {
    navigate(`/activities/${name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleReadMore = () => {
    setShowMore(!showMore);

    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      {/* Activities Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-100">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Explore Activities
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Choose your adventure & feel the thrill
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-2xl font-bold">{item.name}</h3>

                <button
                  onClick={() => handleClick(item.name)}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  Explore <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nainital Hero */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">

        <motion.img
          src="/public/photo/image copy 17.png"
          alt="Nainital"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Discover Nainital
          </h2>

          <p className="text-gray-200 mt-4 max-w-2xl">
            Experience the breathtaking beauty of Nainital – serene lakes,
            lush green mountains and unforgettable adventures.
          </p>

          <button
            onClick={handleReadMore}
            className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>

        </div>
      </section>

      {/* Details Section */}
      {showMore && (
        <section ref={detailsRef} className="py-20 px-6 md:px-20 bg-white">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl mx-auto text-center"
          >

            <h3 className="text-4xl font-bold mb-6">
              About Nainital
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Nainital is one of the most famous hill stations in Uttarakhand.
              Built around the beautiful Naini Lake, the town offers breathtaking
              mountain scenery, boating adventures and vibrant markets.
            </p>

            {/* Places */}
            <div className="grid md:grid-cols-3 gap-8">

              {nainitalPlaces.map((place, i) => (

                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >

                  <img
                    src={place.img}
                    alt={place.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-4">

                    <h4 className="text-xl font-semibold">
                      {place.title}
                    </h4>

                    <p className="text-gray-600 text-sm mt-2">
                      {place.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </section>
      )}

    </>
  );
}

export default Activities;
