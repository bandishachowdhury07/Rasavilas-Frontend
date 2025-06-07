import React from "react";
import mutton from "../../../assets/images/four.png";
import Dhosa from "../../../assets/images/three.png";
import Dumplings from "../../../assets/images/two.png";
import Kathi from "../../../assets/images/one.png";
import RecipeDetails from "./RecipeDetails";

const Recipe = () => {
  const datas = [
    {
      _id: 1,
      name: "Mutton Biriyani",
      time: "1 hr 15 min",
      image: mutton,
      ingredients: "25",
    },
    {
      _id: 2,
      name: "Fancy Dhosa",
      time: "1 hr 15 min",
      image: Dhosa,
      ingredients: "25",
    },
    {
      _id: 3,
      name: "Dumplings",
      time: "1 hr 15 min",
      image: Dumplings,
      ingredients: "25",
    },
    {
      _id: 4,
      name: "Kathi Rolls",
      time: "1 hr 15 min",
      image: Kathi,
      ingredients: "25",
    },
  ];
  return (
    <div>
      <div className="flex justify-between mx-1 my-4">
        <h2 className="text-4xl">Recent Recipes Found</h2>

        <button className="btn ">View All</button>
      </div>
      <div className=" mx-2 grid lg:grid-cols-4 md:grid-cols-2">
        {datas.map((data) => (
          <RecipeDetails key={data._id} data={data}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
