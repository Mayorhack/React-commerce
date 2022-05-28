import React from "react";
import data from "../data";

const Product = ({ name, price, status, url, click }) => {
  function handleClick(e) {
    e.target.classList.toggle("fa-solid");
  }
  return (
    <div className="product">
      <div className="product-image">
        {status && (
          <div className={status === "new" ? "stat new" : "stat sale"}>
            {status}
          </div>
        )}
        <div className="fav">
          <i className="fa-regular fa-heart fa-2x" onClick={handleClick}></i>
        </div>
        <img src={url} alt="" />
        <div className="buy">
          <button
            className="btn-buy add_to_cart"
            onClick={() => click(name, price, url)}
          >
            Add to Cart
          </button>
          <button className="btn-buy buy_now">Buy Now</button>
        </div>
      </div>
      <div className="product-info">
        <p>{name}</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eveniet!
        </p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

const Products = (props) => {
  const [details, setDetails] = React.useState(data);
  const productElement = details.map((detail) => {
    return (
      <Product
        key={detail.id}
        name={detail.name}
        price={detail.price}
        status={detail.status}
        url={detail.url}
        click={props.click}
      />
    );
  });
  return (
    <div className="products">
      <div className="contain">
        <button className=" btn-shop btn-sale">Best Sellers</button>
        <button className=" btn-shop btn-sale">New Arrivals</button>
        <button className=" btn-shop btn-sale">Hot Sales</button>
      </div>
      <div className="container">{productElement}</div>
    </div>
  );
};

export default Products;
