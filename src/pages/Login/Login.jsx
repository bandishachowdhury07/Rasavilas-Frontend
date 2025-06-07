import React from "react";

const Login = () => {
  return (
    <section className="border ">
      <from className="text-center ">
        <div className="p-3 mt-20">
          <label htmlFor="name">Username or Email</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Your Email "
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="p-3">
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="cursor-pointer ">
          <input
            type="submit"
            value="Login"
            className="input input-bordered input-lg w-full max-w-xs cursor-pointer mb-10"
          />
        </div>
      </from>
    </section>
  );
};

export default Login;
