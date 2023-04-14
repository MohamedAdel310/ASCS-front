import React from "react";
import "./filter.css";
export default function Filter(props) {
  return (
    <button className="filter" onClick={props.onClick}>
      <h2>Filters</h2>
      <div className="icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
