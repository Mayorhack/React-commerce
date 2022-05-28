import React from "react";
import headerImage from "../img/28172-8-nike-shoes-image.png";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container grid">
        <div className="header-image">
          <img src={headerImage} alt="" />
        </div>
        <div className="header-text">
          <h1>
            For your quality wears,{" "}
            <span className="colored-text">we are the best.</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt debitis velit fugit delectus. Quia vitae aliquid eveniet a
            optio!
          </p>
          <Button text={"Shop Now"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
