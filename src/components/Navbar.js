import React from "react";

const Navbar = ({ details, click }) => {
  const total = details.reduce((acc, item) => {
    return item.price + acc;
  }, 0);
  const listProduct = details.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.url} alt="" />
        <p>{item.name}</p>
        <p>{`$ ${item.price}`}</p>
        <button className="btn-delete" onClick={() => click(item.id)}>
          x
        </button>
      </li>
    );
  });
  function handleClick(e) {
    const showCart = document.querySelector(".showcart");
    const overlay = document.querySelector(".overlay");
    if (e.target.classList.contains("cart")) {
      showCart.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    } else {
      showCart.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
  const toggleNav = function (e) {
    const nav = document.querySelector(".primary-nav");
    const nav2 = document.querySelector(".nav");
    if (nav.dataset.visible === "false") {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-xmark");
      nav.dataset.visible = "true";
      nav2.dataset.visible = "true";
    } else {
      e.target.classList.add("fa-bars");
      e.target.classList.remove("fa-xmark");
      nav.dataset.visible = "false";
      nav2.dataset.visible = "false";
    }
  };

  return (
    <div className="main_nav">
      <div className="nav" data-visible="false">
        <div className="flex container primary-nav" data-visible="false">
          <ul className="flex">
            <li>
              <a href="#r">Home</a>
            </li>
            <li>
              <a href="#r">About</a>
            </li>
            <li>
              <a href="#4">Contact</a>
            </li>
          </ul>

          <div className="account">
            <a href="#f">Sign-In</a>
          </div>
        </div>
      </div>
      <div className="hidden showcart">
        <div className="containment">
          <button className="btn-close" onClick={handleClick}>
            X
          </button>
          <div className="items">
            <ul>{listProduct}</ul>
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order">
            <p>No of items</p>
            <p>{details.length}</p>
            <p>Delivery Fee</p>
            <p>${0.1 * total}</p>
            <p>
              <em>Total Cost</em>{" "}
            </p>
            <p>
              <em>${total}</em>
            </p>
          </div>
          <button className="btn-checkout">Checkout</button>
        </div>
      </div>
      {/* hamburger menu */}
      <div className="close-nav " onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {/* logo */}
      <div className="logo">
        <h3>SNEAKERS</h3>
      </div>
      {/* shooping cart */}
      <button
        className="fa-solid fa-cart-shopping cart"
        onClick={handleClick}
      ></button>
      {/* overlay */}
      <div className="overlay hidden"></div>
    </div>
  );
};

export default Navbar;
