import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Patients",
    description: "Search doctors, manage appointments, and upload reports.",
  },
  {
    title: "Doctors",
    description: "Track patient history, communicate, and manage queues.",
  },
  {
    title: "Hospitals",
    description: "Manage facilities and patient records effectively.",
  },
  {
    title: "Government",
    description: "Monitor healthcare data for better decision-making.",
  },
];

export default function Features() {
  return (
    <motion.div
      className="py-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
