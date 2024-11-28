import React from "react";
import { motion } from "framer-motion";

export default function MedicalHistory() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-gray-600">Access patient medical history here.</p>
      <motion.button
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View History
      </motion.button>
    </div>
  );
}
