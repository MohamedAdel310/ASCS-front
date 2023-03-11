import React from "react";
import Card from "./card";
import "./branch.css";

export default function Branch() {
  return (
    <div className="branch">
      <div className="text">
        <div className="title">
          <h1>Branches</h1>
          <h4>please choose your branch!!</h4>
        </div>
        <div className="link">
          <a href="#">Locate New Branch</a>
        </div>
      </div>
      <div className="container">
        <Card name="6 Octobar" />
        <Card name="test1" />
        <Card name="test2" />
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
