import React from "react";

const AboutDetails = (props) => {
  const { name, roll, year, branch, image } = props.data;
  console.log(props);
  return (
    <div className="mb-10">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>University Roll: {roll}</p>
          <p>Branch: {branch}</p>
          <p>Year: {year}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
