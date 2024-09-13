import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

const data = [
  {
    name: "Engineering",
    Jobs: 1700,
  },
  {
    name: "Finance",
    Jobs: 258,
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
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 35,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "blue" }} />
          <YAxis tick={{ fontSize: 14, fill: "blue" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Jobs"
            stroke="#ffcc00"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashBoard;
