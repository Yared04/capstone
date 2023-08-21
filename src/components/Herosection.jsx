import React from "react";

const Herosection = () => {
  return (
    <section className="hero">
      <aside className="hero_aside">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>

        <p>
          We are family owned Meditranean restaurant, focused on traditional
          recipes served with modern twist.
        </p>
        <button className="button">Reserve a table</button>
      </aside>
      <div className="hero_picture">
        <img className="picture" src="./sushi.webp" alt="picture" />
      </div>
    </section>
  );
};

export default Herosection;
