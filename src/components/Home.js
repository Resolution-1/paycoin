import React, { Component } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row w-100 h-100">
        <div className="col-sm-12 col-md-6 left"></div>
        <div className="col-sm-12 col-md-6 right">
          <div>PAY COIN</div>
          <div className="description">Decentralised Marketplace</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
