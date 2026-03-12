import React, { useState } from "react";
import { motion } from "framer-motion";
import uttran from "/photo/uttranchal.jpg";
import ganga from "/photo/ganga.jpg";

function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 relative overflow-hidden">

      {/* Floating Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 opacity-10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <motion.img
            src={ganga}
            alt="ganga"
            className="w-12 h-12 object-cover rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          About Uttarakhand
        </h2>
        <p className="text-gray-500 mt-3 text-sm tracking-wide uppercase">
          Devbhumi – Land of Gods
        </p>
      </div>

      {/* FLEX CONTAINER */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 w-full text-gray-700 text-lg leading-relaxed space-y-4"
          whileHover={{ scale: 1.02 }}
        >
          <p>
            Uttarakhand, popularly known as{" "}
            <span className="font-semibold text-indigo-700">Devbhumi (Land of Gods)</span>, 
            is a breathtaking northern Indian state nestled in the Himalayas.
          </p>

          <p>
            Formed on 9 November 2000, Uttarakhand is home to the sacred{" "}
            <span className="font-semibold">Char Dham Yatra</span> — 
            Badrinath, Kedarnath, Gangotri and Yamunotri.
          </p>

          {/* Animated ReadMore */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: readMore ? "auto" : 0, opacity: readMore ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p>
              The state is blessed with snow-capped peaks, lush valleys, holy rivers, 
              and charming hill stations.
            </p>
            <p>
              Adventure lovers enjoy trekking, rafting, skiing and wildlife safaris.
            </p>
          </motion.div>

          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-6 px-6 py-2 bg-indigo-700 text-white rounded-full shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="md:w-1/2 w-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Uttarakhand%20India&output=embed"
              className="w-full h-full"
              loading="lazy"
              title="Uttarakhand Map"
            ></iframe>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;
