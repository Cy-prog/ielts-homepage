import React from "react";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">IELTS Mastery</h1>
        <ul className="hidden space-x-8 font-medium text-gray-700 md:flex">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <button className="text-gray-700 md:hidden">☰</button>
      </div>
    </nav>
  );
}
