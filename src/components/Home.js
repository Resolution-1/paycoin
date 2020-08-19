import React, { Component } from "react";
// import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const con = {
  padding: "0 !important",
  height: "100vh",
};
const row = {
  margin: "0 !important",
};
const left = {
  backgroundColor: "rgb(255, 255, 255)",
};
const img = {
  marginTop: 70,
};
const right = {
  padding: "0 !important",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 100,
  textAlign: "center",
  fontFamily: "Montserrat , sans-serif",
  fontWeight: 600,
  flexDirection: "column",
};
const description = {
  fontSize: 22,
  marginTop: -20,
  fontWeight: 300,
  textAlign: "center",
};

const Home = () => {
  return (
    <div style={con} className="container-fluid">
      <div style={row} className="row w-100 h-100">
        <div style={left} className="col-sm-12 col-md-6 left">
          <img
            style={img}
            src="https://image.freepik.com/free-vector/organic-farming-with-man-field_23-2148426805.jpg"
            className="img-fluid"
          ></img>
        </div>
        <div style={right} className="col-sm-12 col-md-6 right fade-in">
          <div>PAY COIN</div>
          <div style={description} className="description">
            Decentralised Marketplace For Farmers And Small Businesses
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
