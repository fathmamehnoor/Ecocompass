import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Headerfileupload from "./Headerfileupload"; // Import the common header

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  text-align: center;
  font-family: "Times New Roman", serif;
  padding: 0 20px;
`;

const Hero = styled.header`
  margin-top: 50px;

  h1 {
    font-size: 50px;
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    font-size: 20px;
    margin: 25px auto;
    color: #333;
    max-width: 700px;
    font-weight: bold;
    font-family: "Times New Roman", serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  padding: 12px 25px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  font-weight: bold;
  font-family: "Times New Roman", serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const Investor = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Headerfileupload/> {/* Replacing NavbarWrapper with the common header */}

      <Hero>
        <br></br>
        <h1>"Smart Investments,<br /> Sustainable Impact"</h1>
        <br>
        </br>
        <br>
        </br>
        <p>
          EcoCompass puts the power of ESG investing at your fingertips.
          Discover top-ranked sustainable companies and make smarter,
          more impactful investment choices.
        </p>
        <br>
        </br>
        <Button onClick={() => navigate("/esg-ranking")}>View ESG Rankings</Button>
      </Hero>
    </Container>
  );
};

export default Investor;
