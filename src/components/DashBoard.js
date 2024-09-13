import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Engineering",
    Jobs: 1700,
  },
  {
    name: "Finance",
    Jobs: 1398,
  },
  {
    name: "Marketing",
    Jobs: 600,
  },
  {
    name: "Manufacturing",
    Jobs: 1008,
  },
];

const DashBoard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[90%] overflow-y-auto mx-2 rounded-lg relative ">
      <h1 className="mb-5 ">DASHBOARD</h1>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            tick={{ fontSize: 14 }}
          />
          <YAxis tick={{ fontSize: 14 }} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Jobs" fill="#82ca9d" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashBoard;
