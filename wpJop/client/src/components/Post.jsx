import React, { useEffect, useState } from "react";
import PostDesc from "./PostDesc";
import PostProfileCard from "./PostProfileCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/${id}`)
      .then((res) => {
        setData(res.data.message);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Link to={"/"} className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <div className="flex items-start justify-around mx-48 mt-24">
        <PostDesc data={data} />
        {data.user ? <PostProfileCard data={data.user} /> : "loading..."}
      </div>
    </div>
  );
}

export default Post;
