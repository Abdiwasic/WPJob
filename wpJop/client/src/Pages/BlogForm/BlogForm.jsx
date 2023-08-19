import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blogForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
const BlogForm = () => {
  const [blog, setBlog] = useState({});
  const handleOnClick = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const user = decode.id;
    const updatedBlog = {
      ...blog,
      user: user,
    };

    const formData = new FormData();
    formData.append("blogTitle", blog.blogTitle);
    formData.append("blogDesc", blog.blogDesc);
    formData.append("blogCategory", blog.blogCategory);
    formData.append("blogImage", blog.blogImage);
    formData.append("user", updatedBlog.user);

    axios
      .post("http://localhost:8000/blog", formData)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <div>
      <div className="bg-primary p-10">
        <div className="title">Blog</div>
        <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10 mb-10">
          <h1 className="font-bold text-2xl mb-2">Blog Form</h1>
          <p className="font-light text-xs">
            The following is required and will be shared with people
          </p>

          {/* blogTitle */}
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Blog Title</p>
            <input
              type="text"
              name=""
              id=""
              // value={input.email || ""}
              placeholder="Blog Title"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              onChange={(e) => setBlog({ ...blog, blogTitle: e.target.value })}
            />
          </div>

          {/* BlogDesc */}
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Blog Body</p>
            <textarea
              type="text"
              name=""
              id=""
              placeholder="Enter blog description"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"
              onChange={(e) => setBlog({ ...blog, blogDesc: e.target.value })}
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Blog Category
            </p>
            <select
              type="text"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              onChange={(e) =>
                setBlog({ ...blog, blogCategory: e.target.value })
              }
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option value={"Business"}>Business</option>
              <option value={"Technology"}>Technology</option>
              <option value={"Health"}>Health</option>
              <option value={"Politics"}>Politics</option>
            </select>
          </div>

          <div>
            <div class="flex items-center justify-center w-[30rem]">
              <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <input
                  type="file"
                  onChange={(e) =>
                    setBlog({ ...blog, blogImage: e.target.files[0] })
                  }
                  name="blogImage"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="px-10 py-3 mt-10  bg-black text-white rounded-md"
              onClick={handleOnClick}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
