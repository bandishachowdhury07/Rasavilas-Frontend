import React from "react";
import banner from "../../assets/images/bannar.png";
import bannerOne from "../../assets/images/sidebannar.jpeg";

const Banner = () => {
  return (
    <div className="hero min-h-screen relative ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="-z-2 mx-10">
          <img
            src={banner}
            className="max-w-md rounded-lg shadow-2xl "
            alt="Banner"
          />
        </div>
        <div>
          <h1 className="text-2xl ">Transform Your Ingredients Into</h1>
          <h2 className="bg-heading text-5xl font-bold underline decoration-pink-500">
            Something Delicious
          </h2>
          <p className="py-6">Make the Most of What You Have</p>
          <button className="btn bg-primary w-1/2 rounded-full text-xl text-white">
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
