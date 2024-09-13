import React from "react";
import { FaMoneyBill, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    company_name,
    job_role,
    primary_details,
    job_hours,
    views,
    whatsapp_no,
    job_tags,
    num_applications,
  } = location?.state?.job;

  const homeScreenActive = () => {
    navigate("/");
  };

  const applyForJob = () => {
    toast.success("Application sent successfully !!!");
    navigate("/");
  };

  return (
    <div className="h-screen w-screen">
      <h1
        className="font-bold text-2xl bg-[#081221] p-4 text-yellow-500 flex items-center cursor-pointer"
        onClick={() => homeScreenActive()}
      >
        <img
          src="/assets/yellowSense.png"
          alt="logo"
          className="w-[35px] mr-2 rounded-full"
        />
        YellowSense
      </h1>
      <div className="font-bold text-3xl text-center  flex justify-center mt-3 section-container p-1">
        <div className="w-full text-base">
          <div className=" flex justify-between items-center px-5">
            <h1 className=" mt-4 mb-5 text-gray-800 text-2xl">JOB DETAILS</h1>
            <IoMdHome
              size={28}
              className="bg-transparent"
              color="#081221"
              onClick={homeScreenActive}
            />
          </div>
          <div className="text-sm shadow-lg shadow-gray-400 bg-transparent text-gray-600 text-left bg-white  rounded-lg p-5 mx-2 my-3 space-y-3">
            <div className="flex justify-center bg-transparent">
              <img
                src="/assets/profile.png"
                alt="[company-profile-photo]"
                className="w-[80px] rounded-full border border-indigo-400 mb-5"
              />
            </div>
            <h1
              className="  text-purple-700 bg-transparent font-bold text-[24px] text-center"
              style={{ marginBottom: "25px" }}
            >
              {company_name}
            </h1>

            <div className=" flex justify-between items-center bg-transparent">
              <p className="flex text-gray-800 items-start bg-transparent">
                <FaUserTie
                  className="mr-1 mt-1"
                  style={{ background: "transparent" }}
                  color="blue"
                />
                {job_role}
              </p>

              <p className="bg-transparent   flex items-start">
                <FaMoneyBill
                  className="mr-1 mt-1"
                  color="blue"
                  style={{ background: "transparent" }}
                />
                {primary_details?.Salary === "-"
                  ? "Not Disclosed"
                  : primary_details?.Salary}
              </p>
            </div>

            <div className="flex justify-between bg-transparent">
              <p className="text-gray-600 flex items-start bg-transparent ">
                <FaLocationDot
                  className="mr-1 mt-1"
                  color="blue"
                  style={{ background: "transparent" }}
                />
                {primary_details?.Place}
              </p>
              <p className="text-gray-600 flex items-start bg-transparent">
                {" "}
                <PiSuitcaseSimpleFill
                  className="mr-1 mt-1"
                  style={{ background: "transparent" }}
                  color="blue"
                />{" "}
                {job_hours}
              </p>
            </div>

            <p className="bg-transparent  text-gray-600">
              No. of Vacancies : {job_tags[0]?.value}
            </p>
            <p className="text-gray-600  bg-transparent">
              Contact No. : {whatsapp_no}
            </p>
            <p className="bg-transparent  text-gray-600">
              No. of Views : {views}
            </p>
            <p className="  text-gray-600 bg-transparent">
              Qualifications : {primary_details?.Qualification}
            </p>
            <p className=" text-gray-600  bg-transparent">
              No.of Applicants : {num_applications}
            </p>

            <p className=" text-gray-600   bg-transparent">
              Experiance : {primary_details?.Experience}
            </p>
            <div
              className="flex justify-center bg-transparent"
              style={{ marginTop: "20px" }}
            >
              <button
                className=" py-3 rounded-lg text-white bg-purple-600 w-full"
                onClick={applyForJob}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
