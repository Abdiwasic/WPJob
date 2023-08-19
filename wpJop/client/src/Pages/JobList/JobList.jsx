import React, { useEffect, useState } from "react";
import "./jobList.css";
import FindJob from "../.././components/FindJob/FindJob";
import axios from "axios";
import JobCard from "../../components/JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/post")
      .then((res) => setJobs(res.data.message))
      .catch((err) => console.log(err.response.data.message));
  }, []);
  return (
    <div>
      <FindJob />
      <div className="job-card">
        {jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
      <div className="find-job-container">
        <div className="class=" flex items-center justify-between></div>
      </div>
    </div>
  );
};

export default JobList;
