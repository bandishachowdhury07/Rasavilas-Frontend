import React from "react";

const RecipeDetails = (props) => {
  console.log(props);
  const { _id, name, time, image, ingredients } = props.data;
  return (
    <div className="px-3  mx-1 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="px-1 pt-2">
        <h2 className="">{name}</h2>

        <div className=" ">
          <h3>Time {time}</h3>
          <div className="flex justify-between">
            <h4>Ingredients : {ingredients}</h4>

            <button className=" btn bg-orange-500 w-1/3 rounded-full">
              View{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
