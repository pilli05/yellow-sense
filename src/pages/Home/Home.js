import React, { useState } from "react";
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
      <div className="font-bold text-3xl text-center h-content-height flex justify-center mt-3 section-container p-1">
        {homeScreen ? (
          <p className="text-center self-center px-10">
            Welcome To YellowSense Job Portal
          </p>
        ) : jobsScreen ? (
          <Jobs homeScreenActive={homeScreenActive} jobsScreen={jobsScreen} />
        ) : bookMarksScreen ? (
          <Bookmarks homeScreenActive={homeScreenActive} />
        ) : null}
      </div>
      <div className="flex justify-between items-center rounded-t-2xl bg-[#081221] px-5 py-4 absolute bottom-0 left-0 w-full ">
        <button
          className=" px-5 py-2 rounded text-white font-semibold  flex items-center justify-center "
          onClick={() => jobsScreenActive()}
        >
          <FaUserTie className="mr-2" style={{ background: "transparent" }} />
          JOBS
        </button>
        <button
          className=" px-5 py-2 rounded font-semibold  text-white flex items-center justify-center"
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
