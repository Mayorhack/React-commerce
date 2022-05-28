import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Images from "./components/Images";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  function addToCart(name, price, url) {
    setCartDetails((prevDetails) => {
      return [
        ...prevDetails,
        {
          id: cartDetails.length,
          name: name,
          price: price,
          url: url,
        },
      ];
    });
  }
  function deleteItem(id) {
    setCartDetails((prevDetails) => {
      const newDetails = [...prevDetails];

      newDetails.splice(id, 1);
      const updatedDetails = newDetails.map((item, i) => {
        return {
          ...item,
          id: i,
        };
      });
      return [...updatedDetails];
    });
  }

  return (
    <div className="">
      <Navbar details={cartDetails} click={deleteItem} />
      <Header />
      <Carousel />
      <Products click={addToCart} />
      <Images />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
