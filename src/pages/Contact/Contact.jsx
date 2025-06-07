import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";

const Contact = () => {
  return (
    <section className="border ">
      <h3 className="text-center text-4xl text-black mt-20 mb-4">
        Send your Query!
      </h3>
      <from className="text-center ">
        <div className="p-3 ">
          <input
            type="text"
            placeholder="Enter Your Name "
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="p-3 ">
          <input
            type="text"
            placeholder="Enter Your Email "
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="p-3">
          <input
            type="tel"
            placeholder="Enter Your Phone No"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="cursor-pointer mb-20 pb-10 ">
          <input
            type="submit"
            value="Send"
            className="input input-bordered input-lg w-full max-w-xs cursor-pointer mb-10"
          />
        </div>
      </from>
    </section>
  );
};

export default Contact;
