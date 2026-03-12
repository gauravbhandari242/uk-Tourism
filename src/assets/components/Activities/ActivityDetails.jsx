import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Clock } from "lucide-react";

const activityData = {
  canoeing: {
    title: "Canoeing Adventure",
    image: "/photo/canoeing_and_kayaking.jpg",
    location: "Tehri Lake, Uttarakhand",
    duration: "2-3 Hours",
    rating: "4.8",
    description:
      "Enjoy peaceful canoeing experience surrounded by Himalayan beauty. Perfect for beginners and nature lovers.",
  },
  rafting: {
    title: "River Rafting",
    image: "/photo/rafting.jpg",
    location: "Rishikesh, Uttarakhand",
    duration: "3-4 Hours",
    rating: "4.9",
    description:
      "Experience thrilling white water rafting in the holy Ganga river with certified guides.",
  },
  trekking: {
    title: "Mountain Trekking",
    image: "/photo/trekking.jpg",
    location: "Kedarkantha Trail",
    duration: "1-2 Days",
    rating: "4.7",
    description:
      "Explore breathtaking Himalayan trails and enjoy sunrise views from snow covered peaks.",
  },
  skiing: {
    title: "Snow Skiing",
    image: "/photo/skiing (1).jpg",
    location: "Auli, Uttarakhand",
    duration: "Full Day",
    rating: "4.6",
    description:
      "Glide through powder snow in one of India’s best skiing destinations.",
  },
  cycling: {
    title: "Mountain Cycling",
    image: "/photo/cyclig.jpg",
    location: "Mukteshwar",
    duration: "3 Hours",
    rating: "4.5",
    description:
      "Ride through scenic mountain roads and forest trails with experienced instructors.",
  },
};

function ActivityDetails() {
  const { name } = useParams();
  const activity = activityData[name];

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Activity Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {activity.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            {activity.description}
          </p>
        </motion.div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
            <MapPin className="text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <h3 className="font-semibold">{activity.location}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
            <Clock className="text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <h3 className="font-semibold">{activity.duration}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
            <Star className="text-yellow-500" />
            <div>
              <p className="text-gray-500 text-sm">Rating</p>
              <h3 className="font-semibold">{activity.rating} / 5</h3>
            </div>
          </div>

        </div>

        {/* Booking Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready for the Adventure?
          </h2>
          <p className="mb-6">
            Book your slot now and experience unforgettable thrill.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ActivityDetails;
