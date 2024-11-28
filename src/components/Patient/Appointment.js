import { motion } from "framer-motion";
import { useState } from "react";

export default function Appointment() {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. John Doe", date: "2024-12-01", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Jane Smith", date: "2024-12-03", time: "2:00 PM" },
  ]);

  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <motion.li
              key={appointment.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <p className="text-sm font-medium">{appointment.doctor}</p>
                <p className="text-sm text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <button
                onClick={() => handleCancel(appointment.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No appointments scheduled.</p>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Schedule New Appointment
      </motion.button>
    </motion.div>
  );
}
