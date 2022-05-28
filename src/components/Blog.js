import React from "react";
import Button from "./Button";

const Blog = () => {
  const arr = [1, 2, 3, 4, 5];
  const blogposts = arr.map((item) => {
    return (
      <div className="blog" key={item}>
        <div className="blog-pic">
          <img src="../img/oliver-pecker-HONJP8DyiSM-unsplash.jpg" alt="" />
        </div>
        <div className="blog-details">
          <h2 className="blog-title">Blog Post Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            accusantium.
          </p>
          <button className="read-more">Read More...</button>
        </div>
      </div>
    );
  });
  return (
    <div className="blogs">
      <div className="container">
        <div className="flex">
          <h2>Blog</h2>
          <Button text="Go to Blog" />
        </div>
        <div className="blog-post">{blogposts}</div>
      </div>
    </div>
  );
};

export default Blog;
