import React from "react";
import DogHouseList from "./DogHouseList";
import SearchDogHouse from "./SearchDogHouse"

const fakeData = [
  {
    id: 1,
    name: "Product 1",
    address: "123 Main St",
    price: 9.99,
    material: "cotton",
    capacity: 10,
  },
  {
    id: 2,
    name: "Product 2",
    address: "456 Elm St",
    price: 19.99,
    material: "wool",
    capacity: 5,
  },
  {
    id: 3,
    name: "Product 3",
    address: "789 Oak St",
    price: 29.99,
    material: "polyester",
    capacity: 15,
  },

  {
    id: 50,
    name: "Product 50",
    address: "987 Pine St",
    price: 39.99,
    material: "silk",
    capacity: 20,
  },
];

const Home = () => {
  return (
    <div  className=" flex align-content: center mt-8">
      <h2>List of all dog houses</h2>
      <SearchDogHouse/>
      <DogHouseList data={fakeData} />
    </div>

  );
};

export default Home;
