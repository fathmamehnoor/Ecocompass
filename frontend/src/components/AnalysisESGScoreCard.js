import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#4E7F68", // Muted Teal (Environmental - Sustainability)
  "#5A9E9E", // Soft Blue-Green (Environmental - Water & Air)
  "#6D9773", // Moss Green (Environmental - Energy & Emissions)
  "#A3A847", // Olive Green (Environmental - Waste Management)
  "#D4A76A", // Warm Sand (Social - Employee Health & Safety)
  "#C97A63", // Muted Coral (Social - Human Rights & Community)
  "#B87B7B", // Soft Rosewood (Social - Diversity & Inclusion)
  "#82667F", // Desaturated Plum (Governance - Business Ethics)
  "#635D76", // Muted Indigo (Governance - Regulations & Risk)
  "#4E5D73", // Slate Blue (Governance - Data Security & Privacy)
  "#6E737F", // Steel Grey (Governance - Board Governance)
  "#8C918F", // Muted Charcoal (Governance - Systemic Risk)
];



const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name }) => {
  const radius = outerRadius + 35; // Adjusted radius for better spacing
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent > 0.012 ? ( // Only display labels for significant values
    <text
      x={x}
      y={y}
      fill="#333"
      fontSize={8} // Further reduced font size
      fontWeight="bold"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {name} ({(percent * 100).toFixed(0)}%)
    </text>
  ) : null;
};

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
    <div className="flex flex-col items-center w-full p-5">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">
          ESG Score (out of 100): <span className="text-blue-600">{esgData.esg_score.toFixed(2)}</span>
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <ResponsiveContainer width="90%" height={750}> {/* Increased height & width */}
          <PieChart>
            <Pie
              data={transformedData}
              cx="40%"
              cy="50%"
              innerRadius={110} 
              outerRadius={250} // Increased for better spacing
              paddingAngle={2} 
              dataKey="value"
              label={renderCustomizedLabel} 
              labelLine={{ stroke: "#ccc", strokeWidth: 1 }} 
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend 
              verticalAlign="middle" 
              align="right" 
              layout="vertical" 
              wrapperStyle={{ 
                right: 10, 
                fontSize: "12px", 
                maxHeight: "600px", 
                overflowY: "auto" // Makes legend scrollable
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisESGScoreCard;
