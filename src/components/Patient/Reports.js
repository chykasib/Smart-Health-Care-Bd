import { useState } from "react";
import { motion } from "framer-motion";

export default function Reports() {
  const [reports, setReports] = useState([
    { id: 1, name: "Blood Test Report.pdf", uploadedAt: "2024-11-25" },
    { id: 2, name: "MRI Scan Report.pdf", uploadedAt: "2024-11-20" },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setReports((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: file.name,
          uploadedAt: new Date().toISOString().split("T")[0],
        },
      ]);
    }
  };

  const handleDelete = (id) => {
    setReports((prev) => prev.filter((report) => report.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Medical Reports</h2>
      <div className="mb-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition inline-block"
        >
          Upload Report
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          className="hidden"
          onChange={handleUpload}
        />
      </div>
      {reports.length > 0 ? (
        <ul className="space-y-4">
          {reports.map((report) => (
            <motion.li
              key={report.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <p className="text-sm font-medium">{report.name}</p>
                <p className="text-sm text-gray-600">
                  Uploaded on {report.uploadedAt}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDelete(report.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </motion.button>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No reports uploaded yet.</p>
      )}
    </motion.div>
  );
}
