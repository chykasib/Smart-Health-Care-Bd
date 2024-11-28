import { motion } from "framer-motion";

export default function Search() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Search Doctor & Hospital</h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search by name or specialty"
          className="flex-grow px-4 py-2 border rounded-lg"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </motion.button>
      </div>
    </div>
  );
}
