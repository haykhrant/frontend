import React from "react";
import Categories from "../../components/Categories";

import "./Home.style.scss";

const categories = [
  {
    id: "1",
    name: "Fish",
    subCategories: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ],
  },

  {
    id: "2",
    name: "Alcohol",
    subCategories: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ],
  },
  {
    id: "3",
    name: "Cheese",
    subCategories: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ],
  },
];

const Home = () => {
  return (
    <div className={"main"}>
      <div className={"left_side"}>
        <Categories categories={categories} />
      </div>
    </div>
  );
};
export default Home;
