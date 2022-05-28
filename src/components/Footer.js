import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe">
        <form action="">
          <p>
            SUBSCRIBE TO OUR BLOG AND GET DISCOUNT ON ALL OUR PRODUCRS AND
            COLLECTIONS
          </p>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email address"
          />
          <Button text="Subscribe" />
        </form>
        <img src="./img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" alt="" />
      </div>
      <div className="socials">
        <h2>SNEAKER</h2>
        <div className="flex">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
