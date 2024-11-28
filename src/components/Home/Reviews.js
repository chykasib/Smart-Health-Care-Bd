import React from "react";

const reviews = [
  {
    name: "John Doe",
    comment: "Amazing platform! It helped me connect with my doctor easily.",
  },
  {
    name: "Jane Smith",
    comment: "The appointment system is seamless and user-friendly.",
  },
  {
    name: "Dr. Robert",
    comment: "Managing patient records has never been this easy.",
  },
];

export default function Reviews() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <p className="text-gray-600">{review.comment}</p>
              <h3 className="text-blue-600 font-semibold mt-4">
                - {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
