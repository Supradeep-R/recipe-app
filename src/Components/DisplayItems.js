import React from "react";

const DisplayItems = ({ items }) => {
  return (
    <div>
      <div className="row d-flex justify-content-center ">
        {items.map((data, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={data.recipe.image}
              alt={data.recipe.label + "Card image cap"}
            />
            <div className="card-body">
              <center>
                <h5 className="card-title">{data.recipe.label}</h5>
                <p className="card-text">
                  Total Amount Of Calories : {Math.round(data.recipe.calories)}
                </p>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayItems;
