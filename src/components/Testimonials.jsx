import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Aarav", text: "Thanks to IELTS Mastery, I scored 8.0 bands in my first attempt!" },
    { name: "Sanya", text: "The mock tests and AI feedback really helped me improve my writing." },
    { name: "Rohit", text: "The speaking practice sessions gave me confidence for the real exam." },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">What Our Students Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 transition-transform transform bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-2"
            >
              <p className="italic text-gray-600">"{t.text}"</p>
              <h3 className="mt-4 font-semibold text-blue-600">- {t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
