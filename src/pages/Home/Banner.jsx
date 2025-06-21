import React from "react";
import banner from "../../assets/images/homepage_dish_image.png";
import bannerOne from "../../assets/images/sidebannar.jpeg";

const Banner = () => {
  return (
    <div className="hero min-h-screen relative ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="-z-2 mx-10 flex-shrink-0 flex items-center justify-center">
          <img
            src={banner}
            className="max-w-md w-full h-auto rounded-lg animate-spin-slow"
            alt="Banner"
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-orange-800 mb-2">
            Rasavilas
          </h1>
          <p className="text-lg text-orange-700 mb-8">
            Transform your ingredients into something delicious.
          </p>
          <button className="w-48 py-3 rounded-full text-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 border-0 shadow-none transition-colors duration-200">
            Generate Recipe
          </button>
        </div>
      </div>
      <div className="absolute right-0 -top-20 w-1/3 z-2">
        {/* <img src={bannerOne} alt="demo" /> */}
      </div>
    </div>
  );
};

export default Banner;
