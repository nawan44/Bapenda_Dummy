import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PiePendapatan({ data }) {
  const warna = data?.map((item, i) => item.color);
  console.log("warna", warna);
  return (
    <ResponsiveContainer
      style={{
        margin: 0,
        padding: 0,
        textAlign: "center",
      }}
      height={250}
      width="100%"
    >
      <PieChart
        style={{
          margin: 0,
          padding: 0,
          textAlign: "center",
        }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius="70%"
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={warna[index % data.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PiePendapatan;
