import React from "react";

export default function Contact() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h2>
        <form className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
