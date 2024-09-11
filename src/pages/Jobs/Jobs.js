import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);

  const [newJobsList, setNewJobsList] = useState([]);

  const getJobsList = async () => {
    const url = `https://testapi.getlokalapp.com/common/jobs?page=${1}`;
    try {
      const response = await axios.get(url);
      if (response.data) {
        setJobsList(response.data.results);
      }
    } catch (e) {
      console.error(e);
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

  return (
    <div className="border border-gray-300 w-full h-[90%] overflow-y-auto">
      <h1 className="my-2 text-purple-800">Jobs</h1>
      <JobCard jobsList={newJobsList} />
    </div>
  );
};

export default Jobs;
