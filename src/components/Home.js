import React, { Component } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row w-100 h-100">
        <div className="col-sm-12 col-md-6 left">
          <img
            src="https://image.freepik.com/free-vector/organic-farming-with-man-field_23-2148426805.jpg"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-sm-12 col-md-6 right fade-in">
          <div>PAY COIN</div>
          <div className="description">
            Decentralised Marketplace For Farmers And Small Businesses
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
