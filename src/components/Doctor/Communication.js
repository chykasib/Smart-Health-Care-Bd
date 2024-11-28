import React from "react";
import { motion } from "framer-motion";

export default function Communication() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-gray-600">Start communication with patients here.</p>
      <motion.button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Chat
      </motion.button>
    </div>
  );
}
