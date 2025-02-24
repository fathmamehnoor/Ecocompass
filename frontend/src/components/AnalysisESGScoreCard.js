import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042", 
  "#A28AFF", "#FF6666", "#FF99CC", "#33CC99",
  "#FFCC66", "#6699FF"
];

const AnalysisESGScoreCard = () => {
  const location = useLocation();
  const esgData = location.state?.esgData || null;

  if (!esgData) {
    return <p className="text-center text-xl mt-10">No ESG data available. Please upload a file.</p>;
  }

  const transformedData = Object.entries(esgData.esg_analysis).map(([label, score], index) => ({
    name: label.replace(/_/g, " "),
    value: score,
    color: COLORS[index % COLORS.length]
  }));

  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:w-full">
        <div className="font-bold text-black max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl">
            <span className="font-semibold">ESG Score (out of 100):</span>{" "}
            <span className="text-2xl font-extrabold">{esgData.esg_score.toFixed(2)}</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={transformedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisESGScoreCard;
