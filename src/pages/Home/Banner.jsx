import React from "react";
import banner from "../../assets/images/homepage_dish_image.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
        <div className="mx-10 flex-shrink-0">
          <img
            src={banner}
            className="max-w-md rounded-lg"
            alt="Delicious Dish"
          />
        </div>
        <div className="flex flex-col items-start lg:items-start text-left">
          <h1 className="text-2xl text-orange-700 mb-2 font-semibold">
            Transform Your Ingredients Into
          </h1>
          <h2 className="text-5xl font-bold text-orange-800 mb-4">
            Something Delicious
          </h2>
          <p className="mb-6 text-base text-gray-700">
            Make the Most of What You Have
          </p>
          <button className="btn bg-blue-600 w-1/2 rounded-full text-xl text-white border-2 border-blue-600 hover:bg-blue-700 font-semibold transition-colors duration-200">
  Generate Recipe
</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
