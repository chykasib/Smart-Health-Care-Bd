import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1606166187734-a4cb74079037?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1400053534/photo/young-patient-in-a-consult-with-his-doctor-african-american-doctor-showing-a-patient-their.jpg?s=612x612&w=0&k=20&c=rOkv0N_1p-_q7Hz3TDLfzx11CIjHQpGIai93OH_tztw=",
  "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Side-by-Side Images for Large Devices */}
      <div className="hidden lg:flex justify-around mt-5">
        {images.map((src, index) => (
          <div key={index} className="w-1/3 p-2">
            <img
              src={src}
              alt={`Side Image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
