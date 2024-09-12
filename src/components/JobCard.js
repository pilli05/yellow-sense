import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosBookmark } from "react-icons/io";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { Oval } from "react-loader-spinner";

const JobCard = ({
  jobsList,
  setPageSize,
  pageSize,
  loader,
  jobsScreen,
  bookMarkedJobsList = [],
}) => {
  const [bookMarkedJobs, setBookMarkedJobs] = useState(
    Array.isArray(bookMarkedJobsList) ? [...bookMarkedJobsList] : []
  );

  const handleBookMark = (job) => {
    const bookMarked = bookMarkedJobs.some((item) => item.id === job.id);
    let updateLocalStorage;
    if (!bookMarked) {
      updateLocalStorage = [...bookMarkedJobs, job];
    } else {
      updateLocalStorage = bookMarkedJobs.filter((item) => item.id !== job.id);
    }

    setBookMarkedJobs(updateLocalStorage);
    localStorage.setItem("BookMarkedJobs", JSON.stringify(updateLocalStorage));
  };

  const increasePageSize = () => {
    setPageSize((prevValue) => prevValue + 1);
  };

  const decreasePageSize = () => {
    if (pageSize > 1) {
      setPageSize((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className="">
      {loader ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <Oval
            height="50"
            width="50"
            color="blue"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div className="mt-20">
        {jobsList && jobsList.length > 0 ? (
          jobsList.map((job, index) => {
            const isBookMarked = bookMarkedJobs.some(
              (jobs) => jobs.id === job.id
            );

            return (
              <div
                className=" shadow  text-base my-3 px-3 border border-gray-300 mx-3 py-3 rounded-xl text-gray-800 flex items-start "
                key={index}
                style={{ background: "#fff" }}
              >
                <img
                  src="/assets/profile.png"
                  alt="[company-profile-photo]"
                  className="w-[40px] rounded-full border border-indigo-400"
                />
                <div className="ml-5 w-full text-left space-y-4 bg-transparent">
                  <div className="flex items-start justify-between bg-transparent">
                    <h1 className=" text-gray-700 bg-transparent font-bold text-[18px]">
                      {job.company_name}
                    </h1>

                    {isBookMarked ? (
                      <IoIosBookmark
                        size={22}
                        className="bg-transparent cursor-pointer"
                        color="red"
                        onClick={() => handleBookMark(job)}
                      />
                    ) : (
                      <CiBookmark
                        size={22}
                        className="bg-transparent cursor-pointer"
                        onClick={() => handleBookMark(job)}
                      />
                    )}
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
            );
          })
        ) : (
          <div className="absolute w-full flex justify-center items-center h-[80%]">
            <p className="text-xl">No BookMarked Jobs</p>
          </div>
        )}
      </div>

      {jobsScreen ? (
        <div className="flex justify-between items-center my-5 px-5">
          <button
            className={
              pageSize === 1
                ? "display: none text-transparent"
                : " border-yellow-400 border px-5 py-2 rounded-full font-bold  text-yellow-400 flex items-center  w-[160px] justify-center text-base "
            }
            type="button"
            onClick={decreasePageSize}
          >
            Prev
          </button>
          <button
            className="border border-purple-800 px-5 py-2 rounded-full font-bold  text-purple-800 flex items-center  w-[160px] justify-center text-base"
            type="button"
            onClick={increasePageSize}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default JobCard;
