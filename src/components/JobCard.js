import React from "react";
import { FaRupeeSign, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const JobCard = ({ jobsList }) => {
  console.log(jobsList);
  return (
    <div className="">
      {jobsList && jobsList.length > 0
        ? jobsList.map((job, index) => (
            <div
              className="font-[800] grid grid-cols-2 gap-10  text-base my-3 px-3 border border-gray-300 mx-3 py-10 rounded-xl text-gray-800"
              key={index}
            >
              <p className="flex items-center">
                <FaUserTie
                  className="mr-2"
                  style={{ background: "transparent" }}
                />
                {job?.job_role}
              </p>
              <p className="flex items-center">
                <FaLocationDot
                  className="mr-2"
                  style={{ background: "transparent" }}
                />
                {job?.primary_details?.Place}
              </p>
              <p className="flex items-center">
                <FaRupeeSign
                  className="mr-2"
                  style={{ background: "transparent" }}
                />
                {job?.primary_details?.Salary === "-"
                  ? "Not Disclosed"
                  : job?.primary_details?.Salary}
              </p>
              <p className="flex items-center">
                <IoLogoWhatsapp
                  className="mr-2"
                  style={{ background: "transparent" }}
                />
                {job?.whatsapp_no}
              </p>
            </div>
          ))
        : null}
      <div className="flex justify-between items-center my-5 px-5">
        <button className="border-yellow-400 border px-5 py-2 rounded-full font-bold  text-yellow-400 flex items-center  w-[160px] justify-center text-base ">
          Prev
        </button>
        <button className="border border-purple-800 px-5 py-2 rounded-full font-bold  text-purple-800 flex items-center  w-[160px] justify-center text-base">
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCard;
