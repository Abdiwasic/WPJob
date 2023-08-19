import React, { useEffect, useState } from "react";
import mailchimp from "../assets/mailchimp.jpeg";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div>
      <Link to={`/single/${job._id}`}>
        <div className="w-[820px] bg-white shadow-md mb-5 px-4 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center mb-2">
              <div className="rounded-full">
                <img
                  src={`http://localhost:8000/${job.user.image}`}
                  alt=""
                  className="w-20 rounded-full"
                />
              </div>
              <div className="w-5/6">
                <h1 className="font-bold text-xl my-3">{job.jobTitle}</h1>
                <p className=" font-light">
                  {job.jobDesc.substring(0, 250)}...
                </p>
                <div className="flex gap-10 mx-2 mt-5">
                  <div className="flex items-center gap-2">
                    <FaCalendarWeek />
                    <p>Full-time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSignal />
                    <p>Senior</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComputerMouse />
                    <p>Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default JobCard;
