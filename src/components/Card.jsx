import React from "react";

export const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <span className="title">
          <h1>{item.name}</h1>
          <h3>$ {item.price}</h3>
        </span>

        <p>{item.description}</p>
        <a href="">
          <h3>Order a delivery</h3>
        </a>
      </div>
    </div>
  );
};
