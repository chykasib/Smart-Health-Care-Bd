import React from "react";

export default function PatientQueue() {
  const patients = [
    { id: 1, name: "John Doe", status: "Waiting" },
    { id: 2, name: "Jane Smith", status: "In Consultation" },
    { id: 3, name: "Emily Johnson", status: "Completed" },
  ];

  return (
    <ul className="space-y-4">
      {patients.map((patient) => (
        <li
          key={patient.id}
          className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
        >
          <span className="text-lg">{patient.name}</span>
          <span
            className={`px-2 py-1 text-sm rounded-full ${
              patient.status === "Waiting"
                ? "bg-yellow-200 text-yellow-800"
                : patient.status === "In Consultation"
                ? "bg-blue-200 text-blue-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {patient.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
