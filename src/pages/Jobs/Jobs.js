import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [pageSize, setPageSize] = useState(1)
  const [newJobsList, setNewJobsList] = useState([]);
  const [loader, setLoader] = useState(false)

  const getJobsList = async () => {
    const url = `https://testapi.getlokalapp.com/common/jobs?page=${pageSize}`;
    try {
      setLoader(true)
      const response = await axios.get(url);
      if (response.data) {
        setLoader(false)
        setJobsList(response.data.results);
      }
    } catch (e) {
      console.error(e);
      setLoader(false)
    }
  };

  useEffect(() => {
    getJobsList();
  }, []);

  useEffect(() => {
    if (jobsList?.length > 0) {
      const newList = jobsList.filter((job) => job.id);
      setNewJobsList(newList);
    }
  }, [jobsList]);

  useEffect(() => {
    getJobsList();
  }, [pageSize]);



  return (
    <div className="border border-yellow-500 w-full h-[90%] overflow-y-auto mx-2 rounded relative">
      <h1 className="mt-2 mb-5 text-gray-800">Jobs</h1>
      <JobCard jobsList={newJobsList} setPageSize={setPageSize} pageSize={pageSize}loader={loader}/>
    </div>
  );
};

export default Jobs;
