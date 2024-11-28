// pages/about.js

import Layout from "../components/Layout"; // If you're using a layout component
import Link from "next/link";

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
      <p className="mt-4 text-lg">
        Welcome to our healthcare platform. Our goal is to provide top-notch
        medical care and services, connecting doctors and patients seamlessly.
      </p>
      <p className="mt-4">
        We aim to improve healthcare outcomes through technology, offering a
        variety of tools for both doctors and patients.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
