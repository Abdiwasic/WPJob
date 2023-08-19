import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { userContext } from "../context/userContext";

function Login() {
  const [input, setInput] = useState({});
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/login", input)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        setUser(true);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setInput({});
      });
  };
  return (
    <div>
      <div className="bg-primary p-10">
        <Link to="/" className="font-bold my-8 mx-80">
          ← Back
        </Link>
        <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10 mb-10">
          <h1 className="font-bold text-2xl mb-2">Login Form</h1>
          <p className="font-light text-xs">
            The following is required and will be shared with people
          </p>

          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Email</p>
            <input
              type="text"
              name=""
              id=""
              value={input.email || ""}
              placeholder="Email address"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>

          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">Password</p>
            <input
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name=""
              id=""
              value={input.password || ""}
              placeholder="Enter your password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="px-10 py-3 mt-10  bg-black text-white rounded-md"
              onClick={handleOnClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
