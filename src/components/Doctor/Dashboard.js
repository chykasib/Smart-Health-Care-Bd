import React from "react";
import { motion } from "framer-motion";
import PatientQueue from "./PatientQueue";
import Communication from "./Communication";
import Tracking from "./PatientTracking";
import MedicalHistory from "./MedicalHistory";

export default function Dashboard() {
  // Animation variants for container (dashboard)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  // Animation variants for individual sections
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="p-6 space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl font-bold text-blue-600">Doctor Dashboard</h1>

      {/* Grid layout for sections */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {/* Patient Queue Section */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg"
          variants={childVariants}
        >
          <h2 className="text-xl font-semibold">Patient Queue</h2>
          <PatientQueue />
        </motion.div>

        {/* Communication Section */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg"
          variants={childVariants}
        >
          <h2 className="text-xl font-semibold">Communicate with Patients</h2>
          <Communication />
        </motion.div>

        {/* Patient Tracking Section */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg"
          variants={childVariants}
        >
          <h2 className="text-xl font-semibold">Patient Tracking</h2>
          <Tracking />
        </motion.div>

        {/* Medical History Section */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg"
          variants={childVariants}
        >
          <h2 className="text-xl font-semibold">Medical History</h2>
          <MedicalHistory />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
