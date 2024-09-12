import React, { useContext, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRupeeSign, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosBookmark, IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BookMarkContext } from "../App";
import {Bars} from "react-loader-spinner"

const JobCard = ({ jobsList, setPageSize, pageSize, loader }) => {
  console.log(jobsList);

  const {bookMark, setBookMark} = useContext(BookMarkContext)
  


const handleBookMark = (id) =>{
  console.log(id)
}

const increasePageSize = () =>{
  setPageSize(prevValue => prevValue + 1)
}

const decreasePageSize = () =>{
  if(pageSize > 1){
    setPageSize(prevValue => prevValue - 1)
  }
}


  return (
    <div className="" >
    {loader ? <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <Bars
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div> : null}
      {jobsList && jobsList.length > 0
        ? jobsList.map((job, index) => (
            <div
              className=" shadow  text-base my-3 px-3 border border-gray-300 mx-3 py-3 rounded-xl text-gray-800 flex items-start"
              key={index}
              style={{background:"#fff"}}
            >
              <img src="/assets/profile.png"  alt='[company-profile-photo]' className="w-[60px] rounded-full border border-indigo-400" />
              <div className="ml-5 w-full text-left space-y-2 bg-transparent">
                  <div className="flex items-start justify-between bg-transparent">
                  <h1 className=" text-blue-700 bg-transparent font-bold text-[18px]">{job.company_name}</h1>
                  {bookMark ? <IoIosBookmark size={22} className="bg-transparent" color="red" onClick={()=>handleBookMark(job.id)} /> : <CiBookmark size={22} className="bg-transparent"  onClick={()=>handleBookMark(job.id)}/>}
                  
                  </div>
                  <p className="flex items-center bg-transparent">
                <FaUserTie
                  className="mr-1"
                  style={{ background: "transparent" }}
                />
                {job?.job_role}
              </p>
                  <p className="text-purple-600  bg-transparent" >{job?.primary_details?.Salary === "-" ? "Not Disclosed"  :job?.primary_details?.Salary}</p>
                  <div className="flex justify-between bg-transparent">
                  <p className="text-gray-500 flex items-center bg-transparent">
                <FaLocationDot
                  className="mr-1" color="red"
                  style={{ background: "transparent" }}
                />
                {job?.primary_details?.Place}</p>
                  <p className="text-gray-400 flex items-center bg-transparent"> <PiSuitcaseSimpleDuotone
                  className="mr-1"
                  style={{ background: "transparent" }}
                /> {job.job_hours}</p>
                  </div>
              </div>
            </div>
          ))
        : null}
        <div className="flex justify-between items-center my-5 px-5">
        <button  className={pageSize === 1 ? "display: none text-transparent" : " border-yellow-400 border px-5 py-2 rounded-full font-bold  text-yellow-400 flex items-center  w-[160px] justify-center text-base "} type="button" onClick={decreasePageSize}>
          Prev
        </button>
        <button className="border border-purple-800 px-5 py-2 rounded-full font-bold  text-purple-800 flex items-center  w-[160px] justify-center text-base" type="button" onClick={increasePageSize} >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCard;
