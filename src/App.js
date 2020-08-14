import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      {/* <Login></Login> */}
    </React.Fragment>
  );
}
export default App;
