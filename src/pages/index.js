import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Reviews from "../components/Home/Reviews";
import Contact from "../components/Home/Contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Reviews />
      <Contact />
    </div>
  );
}
