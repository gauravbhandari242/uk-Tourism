import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

/* ================= FIREBASE CONFIG ================= */

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ================= COMPONENT ================= */

function Hero() {

  const [activity, setActivity] = useState("Rafting");
  const [people, setPeople] = useState(1);
  const [packageType, setPackageType] = useState("Standard");
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800);

  const activityPrices = {
    Rafting: 2000,
    Trekking: 1500,
    Skiing: 2500,
    Canoeing: 1200,
  };

  const packageMultiplier = {
    Standard: 1,
    Premium: 1.5,
    VIP: 2,
  };

  const totalPrice =
    activityPrices[activity] *
    people *
    packageMultiplier[packageType];

  /* ================= COUNTDOWN TIMER ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ================= SAVE BOOKING ================= */

  const saveBooking = async (paymentId) => {
    await addDoc(collection(db, "bookings"), {
      activity,
      people,
      packageType,
      totalPrice,
      paymentId,
      createdAt: new Date(),
    });

    alert("Booking Saved in Firebase ✅");
  };

  /* ================= RAZORPAY ================= */

  const handlePayment = async () => {

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Devbhumi Uttarakhand",
      description: activity,
      handler: function (response) {
        saveBooking(response.razorpay_payment_id);
      },
      theme: { color: "#facc15" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="photo/12750575_1920_1080_25fps.mp4" type="video/mp4"
 />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">Devbhumi</span> Uttarakhand
        </h1>

        {/* COUNTDOWN */}
        <div className="text-red-400 font-bold mb-4">
          Limited Offer Ends In: {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </div>

        {/* STATS */}
        <div className="flex justify-center gap-10 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">500+</h2>
            <p>Happy Travelers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">50+</h2>
            <p>Adventure Tours</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">10+</h2>
            <p>Years Experience</p>
          </div>
        </div>

        {/* BOOKING BOX */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-4xl mx-auto">

          <div className="grid md:grid-cols-4 gap-4">

            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="px-4 py-2 rounded-lg text-black"
            >
              <option>Rafting</option>
              <option>Trekking</option>
              <option>Skiing</option>
              <option>Canoeing</option>
            </select>

            <input
              type="number"
              min="1"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="px-4 py-2 rounded-lg text-black"
            />

            <select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              className="px-4 py-2 rounded-lg text-black"
            >
              <option>Standard</option>
              <option>Premium</option>
              <option>VIP</option>
            </select>

            <button
              onClick={() => setShowModal(true)}
              className="bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition"
            >
              Book Now ₹{totalPrice}
            </button>

          </div>
        </div>

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[400px] text-black text-center">

            <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>

            <p><strong>Activity:</strong> {activity}</p>
            <p><strong>People:</strong> {people}</p>
            <p><strong>Package:</strong> {packageType}</p>
            <p className="text-xl font-bold mt-3">
              Total: ₹{totalPrice}
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handlePayment}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Pay Now
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Hero;
