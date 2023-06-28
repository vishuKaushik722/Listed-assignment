import React from "react";
import "./ChartComponent.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Week 1", Guest: 100, Users: 200 },
  { name: "Week 2", Guest: 200, Users: 400 },
  { name: "Week 3", Guest: 450, Users: 200 },
  { name: "Week 4", Guest: 200, Users: 100 },
];

const ChartComponent = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="Guest" stroke="#9BDD7C" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Users" stroke="#E9A0A0" strokeWidth={3} dot={false} />
          <CartesianGrid stroke="#EAEAEA" horizontal={true} />
          <XAxis dataKey="name" className="axis" />
          <YAxis className="axis" />
          <style>
        {`
        .recharts-cartesian-grid-vertical line {
          display: none;
        }
        `}
      </style>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
