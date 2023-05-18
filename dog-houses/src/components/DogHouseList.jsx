import React from "react";

const DogHouseList = ({ data }) => {
  return (
    <div className="items-center">
      Dog House List
      {data.length > 0
        ? data.map((el) => {
            return (
              <div>
                <h2>{el.name}</h2>
                <p>{el.address}</p>
                <p>{el.price}</p>
                <p>{el.capacity}</p>
                <p>{el.material}</p>
              </div>
            );
          })
        : "No Doghouse Listed"}
        </div>
    );
};

export default DogHouseList;
