import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./header.css";
function Header() {
  const { user, setUser } = useContext(userContext);
  const [profile, setProfile] = useState(null);

  const handleOnLogOut = () => {
    localStorage.removeItem("token");
    setUser(false);
    window.location.reload();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwt_decode(token);
      const userId = decode.id;
      axios
        .get(`http://localhost:8000/user/${userId}`)
        .then((res) => setProfile(res.data.message.image))
        .catch((err) => console.log(err));
    }
  });
  return (
    <div className="flex justify-between items-center mx-32 my-5">
      <div className="header-nav">
        <div className="logo">
          <Link to="/" className="font-bold text-2xl">
            WP-Jobs
          </Link>
        </div>
        <div className="nav-btn">
          <Link to={"/jobList"}>
            <h1>FindJob</h1>
          </Link>
          <Link to={"/blogList"}>
            <h1>FindBlog</h1>
          </Link>
        </div>
      </div>
      {user === true ? (
        <div className="flex gap-5 items-center">
          <div className="mx-auto">
            <img
              src={`http://localhost:8000/${profile}`}
              alt=""
              srcset=""
              className="w-16 rounded-full"
            />
          </div>
          <Link
            className="px-10 py-2 bg-black text-white rounded-md"
            onClick={handleOnLogOut}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link to="/login">Login</Link>
          <Link
            to="/register"
            className="px-10 py-2 bg-black text-white rounded-md"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
