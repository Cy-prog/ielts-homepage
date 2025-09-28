import React from "react";

export default function Hero() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container flex flex-col items-center px-6 mx-auto md:flex-row">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Master IELTS with <span className="text-blue-600">Confidence</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get expert coaching, AI-driven mock tests, and personalized feedback to boost your band score.
          </p>
          <button className="px-6 py-3 mt-6 text-white transition-transform transform bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
            alt="Students preparing for IELTS"
            className="shadow-lg rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

