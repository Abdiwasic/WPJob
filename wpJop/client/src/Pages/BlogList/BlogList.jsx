import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blogList.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    axios
      .get("http://localhost:8000/blog")
      .then((res) => setBlogs(res.data.message))
      .catch((err) => console.log(err.response.data.message));
  }, []);

  const handleOnClickAll = () => {
    setFilter("all");
  };
  const handleOnClickBusiness = () => {
    setFilter("business");
  };
  const handleOnClickTechnology = () => {
    setFilter("technology");
  };
  const handleOnClickHealth = () => {
    setFilter("health");
  };
  const handleOnClickPolitics = () => {
    setFilter("politics");
  };

  let filteredBlogs;
  if (filter == "all") {
    filteredBlogs = blogs;
  } else if (filter == "business") {
    filteredBlogs = blogs.filter((blog) => blog.blogCategory == "Business");
  } else if (filter == "technology") {
    filteredBlogs = blogs.filter((blog) => blog.blogCategory == "Technology");
  } else if (filter == "health") {
    filteredBlogs = blogs.filter((blog) => blog.blogCategory == "Health");
  } else if (filter == "politics") {
    filteredBlogs = blogs.filter((blog) => blog.blogCategory == "Politics");
  }
  console.log(filter);
  return (
    <div>
      <h1 className="latest-articles">Latest Articles</h1>
      <div className="blog-nav">
        <button onClick={handleOnClickAll}>All</button>
        <button onClick={handleOnClickBusiness}>Business</button>
        <button onClick={handleOnClickTechnology}>Technology</button>
        <button onClick={handleOnClickHealth}>Health</button>
        <button onClick={handleOnClickPolitics}>Politics</button>
      </div>
      <div className="blog-list-container">
        <div className="blog-list">
          {filteredBlogs.map((i) => (
            <BlogCard blog={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
