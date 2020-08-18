import React from "react";
// import "./about.css";
import Background from "../assets/left.jpg";

const con = {
  padding: "0 !important",
  height: "100vh",
};
const row = {
  margin: "0 !important",
};
const left = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
};
const right = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  textAlign: "justify",
  fontFamily: " Montserrat, sans-serif ",
  fontWeight: 600,
  flexDirection: "column",
  lineHeight: 2,
  padding: "10px !important",
};
const About = () => {
  return (
    <div style={con} className="container-fluid">
      <div style={row} className="row w-100 h-100">
        <div style={left} className="col-sm-12 col-md-6 "></div>
        <div style={right} className="col-sm-12 col-md-6 ">
          <h1 style={{ fontSize: 70, paddingBottom: 20 }}>ABOUT US</h1>
          <div>
            Blockchain based transparent market place where the farmers and
            consumers could implement a co-operative farming method. Here, the
            farmers can list the potential crops and the expected yield on his
            farm on the distributed public ledger. The consumers can view the
            details and check for the farmer credibility based on the previous
            cultivation and supply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
