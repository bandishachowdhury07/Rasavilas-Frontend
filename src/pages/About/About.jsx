import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import image4 from "../../assets/images/bandisha.jpeg";

const About = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
          About Bandisha Chowdhury
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Hi! I'm Bandisha Chowdhury, a passionate Computer Science Engineering
          student. I love building beautiful,
          functional web applications and exploring new technologies. Rasavilas is
          my project where I combine creativity and code to deliver delightful
          digital experiences.
        </p>
      </div>
      <div className="w-full max-w-2xl flex flex-col items-center md:flex-row md:items-center md:justify-center gap-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8">
        <img
          src={image4}
          alt="Bandisha Chowdhury"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md mb-6 md:mb-0 md:mr-10 transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Bandisha Chowdhury
          </h2>
          <span className="text-base text-gray-600 mb-2">
            4th Year &middot; Computer Science & Engineering, NIT Agartala
          </span>
          <span className="text-sm text-gray-400 mb-4">
            Roll: 123200903039
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
