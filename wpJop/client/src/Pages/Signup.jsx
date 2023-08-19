import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [singningUp, setSigningUp] = useState(false);
  const [input, setInput] = useState({});
  const handleOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("confirmPassword", input.confirmPassword);
    formData.append("bio", input.bio);
    formData.append("company", input.company);
    formData.append("image", input.image);

    if (singningUp) {
      return; // singup process is ungoing
    }

    setSigningUp(true);

    axios
      .post("http://localhost:8000/user/signup", formData)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => {
        setSigningUp(false);
      });
  };

  return (
    <div className="bg-primary p-5">
      <Link to="/" className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
        <h1 className="font-bold text-2xl mb-2">Register New User</h1>
        <p className="font-light text-xs">
          The following is required and will be shared with opeepi
        </p>
        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Full Name</p>
          <input
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name=""
            id=""
            placeholder="Enter your full name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div>
          <p className="font-light text-xs text-gray-400 mb-3">Email</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email address"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="flex justify-between mt-5 mb-3">
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Password</p>
            <input
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name=""
              id=""
              placeholder="Enter your password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Confirm Password
            </p>
            <input
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name=""
              id=""
              placeholder="Re-Enter your password again"
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Bio</p>
          <textarea
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name=""
            id=""
            placeholder="Write info about yourself"
            onChange={(e) => setInput({ ...input, bio: e.target.value })}
          ></textarea>
        </div>
        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Company</p>
          <input
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name=""
            id=""
            placeholder="Enter your company name"
            onChange={(e) => setInput({ ...input, company: e.target.value })}
          />
        </div>
        <div>
          <div class="flex items-center justify-center w-[30rem]">
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
              <input
                type="file"
                onChange={(e) =>
                  setInput({ ...input, image: e.target.files[0] })
                }
                name="image"
              />
            </label>
          </div>
        </div>
        \
        <div className="flex justify-center">
          <button
            className="px-10 py-3 mt-10  bg-black text-white rounded-md"
            onClick={handleOnClick}
            disabled={singningUp}
          >
            {singningUp ? "Signing Up" : "SignUp"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
