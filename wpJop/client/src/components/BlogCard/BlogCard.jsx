import React from "react";
import money from "../.././assets/money-27.jpg";
import girlIimage from "../../assets/girl.webp";
import "./blogCard.css";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card-container">
      <Link to={`blogSingle/${blog._id}`}>
        <div className="card-container">
          <div className="blog-image">
            <img src={"http://localhost:8000/" + blog.blogImage} alt="" />
          </div>
          <div className="blog-text">
            <div className="blog-category">{blog.blogCategory}</div>
            <div className="blog-title">{blog.blogTitle}</div>
          </div>
          <div className="blog-user-container">
            <div className="blog-user-image">
              <img src={`http://localhost:8000/${blog.user.image}`} alt="" />
            </div>
            <div className="blog-user-name">
              <h1>{blog.user.name}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
