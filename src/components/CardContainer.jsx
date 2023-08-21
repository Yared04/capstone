import React from "react";
import { Card } from "./Card";

const items = [
  {
    name: "Sushi",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl: "./sushi.webp",
  },
  {
    name: "Pizza",
    price: 10.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl: "./pizza.webp",
  },
  {
    name: "Burger",
    price: 8.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl: "./burger.avif",
  },
];

export const CardContainer = () => {
  return (
    <div className="main">
      <div className="main_intro">
        <h1>This week's specials!</h1>
        <button className="button">Order Menu</button>
      </div>
      <div className="card_container">
        {items.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
