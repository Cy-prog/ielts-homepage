import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="container px-4 mx-auto sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
