import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("⚠ Enter email first");
      return;
    }

    setMessage("🚀 Thanks for joining!");
    setEmail("");

    setTimeout(() => setMessage(""), 3000);
  };

  const socials = [
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaYoutube, link: "https://youtube.com" },
  ];

  const exploreLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Char Dham", path: "/chardham" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-950 via-green-800 to-green-900 text-white pt-24 pb-14 px-6 overflow-hidden">

      {/* Floating Light Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400 opacity-10 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 opacity-10 blur-[140px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-7xl mx-auto backdrop-blur-2xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl"
      >

        <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-5 tracking-wider">
              Uttarakhand Tourism
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Discover Dev Bhoomi Uttarakhand — Himalayas, sacred temples,
              rivers and adventure tourism paradise.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 mt-6">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition duration-300 hover:scale-110"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg tracking-wide">
              Explore
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              {exploreLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-yellow-400 transition duration-300 hover:pl-2 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>

            <div className="space-y-4 text-gray-300 text-sm">
              <p className="flex justify-center md:justify-start gap-2">
                <FaPhone /> +91 8595650016
              </p>

              <p className="flex justify-center md:justify-start gap-2">
                <FaEnvelope /> info@uttarakhand.com
              </p>

              <p className="flex justify-center md:justify-start gap-2">
                <FaMapMarkerAlt /> Dehradun, Uttarakhand
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">
              Join Adventure Newsletter
            </h3>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-white/10 outline-none text-white placeholder-gray-300 text-sm focus:ring-2 focus:ring-yellow-400"
              />

              <button className="bg-yellow-400 text-black py-3 rounded-2xl hover:bg-yellow-300 transition font-semibold hover:scale-105">
                Subscribe Now
              </button>
            </form>

            {message && (
              <p className="text-yellow-300 text-xs mt-2">{message}</p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()} Uttarakhand Tourism | All Rights Reserved
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
