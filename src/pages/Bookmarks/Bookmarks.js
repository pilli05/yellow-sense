import React, { useState } from "react";
import { IoIosBookmark, IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";

const Bookmarks = ({ homeScreenActive }) => {
  const [bookMarkedJobsList, setBookMarkedJobsList] = useState(
    JSON.parse(localStorage.getItem("BookMarkedJobs"))
  );

  const handleBookMark = (job) => {
    const bookMarked = bookMarkedJobsList.some((item) => item.id === job.id);
    let updateLocalStorage;
    if (!bookMarked) {
      updateLocalStorage = [...bookMarkedJobsList, job];
    } else {
      updateLocalStorage = bookMarkedJobsList.filter(
        (item) => item.id !== job.id
      );
    }

    setBookMarkedJobsList(updateLocalStorage);
    localStorage.setItem("BookMarkedJobs", JSON.stringify(updateLocalStorage));
  };

  return (
    <div className="border-2 border-[rgb(8,18,33)] w-full h-[90%] overflow-y-auto mx-2 rounded-lg relative">
      <div className="fixed w-[93%] rounded-t-lg flex justify-between items-center px-5">
        <h1 className=" mt-4 mb-5 text-gray-800 text-2xl">BOOKMARKED JOBS</h1>
        <IoMdHome
          size={28}
          className="bg-transparent"
          color="#081221"
          onClick={homeScreenActive}
        />
      </div>
      <div className="mt-20">
        {bookMarkedJobsList && bookMarkedJobsList.length > 0 ? (
          bookMarkedJobsList.map((job, index) => (
            <div
              className=" shadow  text-base my-3 px-3 border border-gray-300 mx-3 py-3 rounded-xl text-gray-800 flex items-start "
              key={index}
              style={{ background: "#fff" }}
            >
              <img
                src="/assets/profile.png"
                alt="[company-profile-photo]"
                className="w-[60px] rounded-full border border-indigo-400"
              />
              <div className="ml-5 w-full text-left space-y-2 bg-transparent">
                <div className="flex items-start justify-between bg-transparent">
                  <h1 className=" text-gray-700 bg-transparent font-bold text-[18px]">
                    {job.company_name}
                  </h1>
                  <IoIosBookmark
                    size={22}
                    className="bg-transparent cursor-pointer"
                    color="red"
                    onClick={() => handleBookMark(job)}
                  />
                </div>
                <div className="flex justify-between items-center bg-transparent">
                  <p className="flex items-center bg-transparent">
                    <FaUserTie
                      className="mr-1"
                      style={{ background: "transparent" }}
                      color="#081221"
                    />
                    {job?.job_role}
                  </p>
                  <p className="text-gray-600  bg-transparent">
                    {job?.primary_details?.Salary === "-"
                      ? "Not Disclosed"
                      : job?.primary_details?.Salary}
                  </p>
                </div>
                <div className="flex justify-between bg-transparent">
                  <p className="text-gray-600 flex items-center bg-transparent">
                    <FaLocationDot
                      className="mr-1"
                      color="#081221"
                      style={{ background: "transparent" }}
                    />
                    {job?.primary_details?.Place}
                  </p>
                  <p className="text-gray-600 flex items-center bg-transparent">
                    {" "}
                    <PiSuitcaseSimpleDuotone
                      className="mr-1"
                      style={{ background: "transparent" }}
                      color="#081221"
                    />{" "}
                    {job.job_hours}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="absolute w-full flex justify-center items-center h-[80%]">
            <p className="text-xl">No BookMarked Jobs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
