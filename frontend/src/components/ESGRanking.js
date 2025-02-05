import React from "react";
import Headerfileupload from "./Headerfileupload"; // Import Headerfileupload
import "../styles/ESGTable.css"; // Correct path to the CSS file

const ESGRanking = () => {
    const data = [
        { rank: 1, company: "ASML Holdings N.V.", score: 73.13, badge: "View", country: "Netherlands", sector: "Electronic Technology", industry: "Semiconductors" },
        { rank: 2, company: "Check Point Software Technologies", score: 72.64, badge: "View", country: "Israel", sector: "Technology Services", industry: "Internet Software/Services" },
        { rank: 3, company: "Hermes International SCA", score: 71.71, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Apparel/Footwear" },
        { rank: 4, company: "Linde", score: 71.26, badge: "View", country: "United Kingdom", sector: "Process Industries", industry: "Chemicals: Specialty" },
        { rank: 5, company: "Kone Oyj", score: 70.37, badge: "View", country: "Finland", sector: "Producer Manufacturing", industry: "Building Products" },
        { rank: 6, company: "Shionogi & Co.", score: 70.04, badge: "View", country: "Japan", sector: "Health Technology", industry: "Pharmaceuticals: Major" },
        { rank: 7, company: "Applied Materials, Inc.", score: 69.77, badge: "View", country: "United States", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 8, company: "Beiersdorf AG", score: 69.70, badge: "View", country: "Germany", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 9, company: "Colgate-Palmolive Company", score: 69.32, badge: "View", country: "United States", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 10, company: "L'Oreal S.A.", score: 69.30, badge: "View", country: "France", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 11, company: "CLP Holdings Limited", score: 68.74, badge: "View", country: "Hong Kong", sector: "Utilities", industry: "Electric Utilities" },
        { rank: 12, company: "Unicharm Corporation", score: 68.69, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
        { rank: 13, company: "Atlas Copco", score: 68.67, badge: "View", country: "Sweden", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 14, company: "Fortinet, Inc.", score: 68.49, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Computer Communications" },
        { rank: 15, company: "Xylem Inc.", score: 68.48, badge: "View", country: "United States", sector: "Producer Manufacturing", industry: "Industrial Machinery" },
        { rank: 16, company: "ABB Ltd.", score: 68.46, badge: "View", country: "Switzerland", sector: "Producer Manufacturing", industry: "Electrical Products" },
        { rank: 17, company: "Hong Kong Exchanges & Clearing Ltd.", score: 68.27, badge: "View", country: "Hong Kong", sector: "Finance", industry: "Investment Banks/Brokers" },
        { rank: 18, company: "Canadian Natural Resources Limited", score: 68.16, badge: "View", country: "Canada", sector: "Energy Minerals", industry: "Oil & Gas Production" },
        { rank: 19, company: "Geberit AG", score: 68.07, badge: "View", country: "Switzerland", sector: "Producer Manufacturing", industry: "Building Products" },
        { rank: 20, company: "Edwards Lifesciences Corporation", score: 68.02, badge: "View", country: "United States", sector: "Health Technology", industry: "Medical Specialties" },
        { rank: 21, company: "Weyerhaeuser Company", score: 67.90, badge: "View", country: "United States", sector: "Finance", industry: "Real Estate Investment Trusts" },
        { rank: 22, company: "Mondi plc", score: 67.83, badge: "View", country: "United Kingdom", sector: "Process Industries", industry: "Containers/Packaging" },
        { rank: 23, company: "Geely Automobile Holdings Limited", score: 67.77, badge: "View", country: "Hong Kong", sector: "Consumer Durables", industry: "Motor Vehicles" },
        { rank: 24, company: "Cognex Corporation", score: 67.63, badge: "View", country: "United States", sector: "Electronic Technology", industry: "Electronic Equipment/Instruments" },
        { rank: 25, company: "Kao Corp.", score: 67.61, badge: "View", country: "Japan", sector: "Consumer Non-Durables", industry: "Household/Personal Care" },
      ];
      

  return (
    <div>
      {/* Render the Headerfileupload component */}
      <Headerfileupload />

      {/* Title */}
      <h1 style={styles.heading}>ESG Ranking</h1>

      {/* Buttons */}
      <div>
        <span style={styles.button1}>
          <button style={styles.button}>Filter</button>
        </span>
        <span style={styles.button2}>
          <button style={styles.button}>Search</button>
        </span>
      </div>

      {/* Table */}
      <table className="esg-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Companies</th>
            <th>Country</th>
            <th>Sector</th>
            <th>Industry</th>
            <th>ESG Score</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rank}>
              <td>{item.rank}</td>
              <td>{item.company}</td>
              <td>{item.country}</td>
              <td>{item.sector}</td>
              <td>{item.industry}</td>
              <td>{item.score}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  heading: {
    color: "black",
    marginLeft: "80px",
    marginTop: "40px",
    fontSize: "35px",
    fontWeight: "bold",
  },
  button1: {
    marginLeft: "80px",
  },
  button2: {
    marginLeft: "25px",
  },
  button: {
    backgroundColor: "white",
    border: "2px solid green",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "10px",
    marginTop: "20px",
  },
};

export default ESGRanking;
