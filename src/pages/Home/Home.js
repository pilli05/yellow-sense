import React, { useEffect, useState } from "react";
import { FaBookmark, FaUserTie } from "react-icons/fa";
import Jobs from "../Jobs/Jobs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Home = () => {
  const [homeScreen, setHomeScreen] = useState(true);
  const [jobsScreen, setJobsScreen] = useState(false);
  const [bookMarksScreen, setBookMarksScreen] = useState(false);

  const jobsScreenActive = () => {
    setHomeScreen(false);
    setJobsScreen(true);
    setBookMarksScreen(false);
  };

  const bookMarksScreenActive = () => {
    setHomeScreen(false);
    setJobsScreen(false);
    setBookMarksScreen(true);
  };

  const homeScreenActive = () => {
    setHomeScreen(true);
    setJobsScreen(false);
    setBookMarksScreen(false);
  };

  return (
    <div className="h-screen w-screen  relative">
      <h1
        className="font-bold text-2xl border-b border-b-gray-400 px-4 py-2 text-yellow-500 flex items-center cursor-pointer"
        onClick={() => homeScreenActive()}
      >
        <img
          src="/assets/yellowSense.png"
          alt="logo"
          className="w-[35px] mr-2"
        />
        YellowSense
      </h1>
      <div className="font-bold text-3xl text-center h-content-height flex justify-center items-center section-container px-2">
        {homeScreen ? (
          " Welcome To YellowSense Job Portal"
        ) : jobsScreen ? (
          <Jobs />
        ) : bookMarksScreen ? (
          <Bookmarks />
        ) : null}
      </div>
      <div className="flex justify-between items-center border-t border-t-gray-400 px-5 py-2 absolute bottom-0 left-0 w-full ">
        <button
          className="bg-purple-600 px-5 py-2 rounded text-white font-semibold  flex items-center justify-center w-[160px]"
          onClick={() => jobsScreenActive()}
        >
          <FaUserTie className="mr-2" style={{ background: "transparent" }} />
          JOBS
        </button>
        <button
          className="bg-yellow-400 px-5 py-2 rounded font-semibold  text-white flex items-center  w-[160px] justify-center"
          onClick={() => bookMarksScreenActive()}
        >
          <FaBookmark className="mr-2" style={{ background: "transparent" }} />
          BOOKMARKS
        </button>
      </div>
    </div>
  );
};

export default Home;
