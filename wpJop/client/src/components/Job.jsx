import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";
import axios from "axios";

function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/post")
      .then((res) => setJobs(res.data.message))
      .catch((err) => console.log(err.response.data.message));
  }, []);
  return (
    <div>
      <div className="flex mt-32 justify-between mx-48 items-start">
        <div className="">
          <h1 className="mb-5 text-center font-bold text-xl">
            Job Opportunities
            <span className="font-light text-gray-400">({jobs.length})</span>
          </h1>
          <div>
            {jobs.map((job) => (
              <JobCard job={job} />
            ))}
          </div>
        </div>
        <div className="">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Job;
