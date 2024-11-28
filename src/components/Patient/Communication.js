import { useState } from "react";

export default function Communication() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John Doe", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Jane Smith", specialization: "Neurologist" },
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setMessages([]); // Clear messages when switching doctors
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { text: newMessage, sender: "patient" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Communication</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Doctors List */}
        <div className="lg:w-1/3 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-md font-semibold mb-2">Doctors</h3>
          <ul className="space-y-2">
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className={`cursor-pointer p-2 rounded-lg ${
                  selectedDoctor?.id === doctor.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handleDoctorSelect(doctor)}
              >
                <p className="font-medium">{doctor.name}</p>
                <p className="text-sm">{doctor.specialization}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="lg:w-2/3 bg-gray-100 p-4 rounded-lg">
          {selectedDoctor ? (
            <>
              <h3 className="text-md font-semibold mb-4">
                Chat with {selectedDoctor.name}
              </h3>
              <div className="flex flex-col gap-2 mb-4 overflow-y-auto max-h-64">
                {messages.length > 0 ? (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg max-w-xs ${
                        message.sender === "patient"
                          ? "bg-blue-500 text-white self-end"
                          : "bg-gray-300 text-gray-800 self-start"
                      }`}
                    >
                      {message.text}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">
                    No messages yet. Start the conversation!
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Select a doctor to start chatting.</p>
          )}
        </div>
      </div>
    </div>
  );
}
