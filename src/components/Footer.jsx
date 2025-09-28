import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="py-8 text-gray-300 bg-gray-900">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
        <p>&copy; {new Date().getFullYear()} IELTS Mastery. All rights reserved.</p>
        <ul className="flex mt-4 space-x-6 md:mt-0">
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms</a></li>
          <li><a href="mailto:info@ieltsmastery.com" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
