import React from "react";
import { BookOpen, Mic, ClipboardCheck, Brain } from "lucide-react";

export default function Features() {
  const features = [
    { title: "Speaking Practice", desc: "Real-time speaking sessions with experts.", icon: "🗣️" },
    { title: "Mock Tests", desc: "Simulate real IELTS exams to track your progress.", icon: "📝" },
    { title: "AI Band Score", desc: "Instant feedback and AI-based score prediction.", icon: "🤖" },
    { title: "Expert Mentorship", desc: "One-on-one guidance from IELTS trainers.", icon: "🎓" },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 transition-transform transform shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

