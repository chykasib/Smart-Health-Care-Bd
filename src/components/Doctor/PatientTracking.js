import React from "react";
import { motion } from "framer-motion";

export default function Tracking() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-gray-600">Track patient health status here.</p>
      <motion.button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View Tracking
      </motion.button>
    </div>
  );
}
