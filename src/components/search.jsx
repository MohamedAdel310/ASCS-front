import React from "react";
import "../pages/application/style/Search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Search({ onChange }) {
  return (
    <div className="searcher">
      <div className="container">
        <form action="" className="form">
          <input
            type="text"
            placeholder="Search..."
            className="searchBar"
            onChange={onChange}
          />
          {/* <button type="submit" onClick={props.onClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button> */}
        </form>
      </div>
    </div>
  );
}
