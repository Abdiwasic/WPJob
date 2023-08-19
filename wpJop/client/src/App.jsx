import React, { useEffect, useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { userContext } from "./context/userContext";
import "react-toastify/dist/ReactToastify.css";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Job from "./Pages/Job";
import JobList from "./Pages/JobList/JobList";
import BlogForm from "./Pages/BlogForm/BlogForm";
import BlogList from "./Pages/BlogList/BlogList";
import BlogSingle from "./Pages/BlogSingle/BlogSingle";

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setUser(true);
    }
    setLoading(false);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/single/:id" element={<SinglePost />} />
            <Route path="/jobList" element={<JobList />} />
            <Route path="/blogForm" element={<BlogForm />} />
            <Route path="/blogList" element={<BlogList />} />
            <Route path="/blogSingle" element={<BlogSingle />} />

            <Route
              path="/post"
              element={user === true ? <Job /> : <Navigate to={"/login"} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </userContext.Provider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
