import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          color: "#666",
        }}
      >
        We're sorry, the page you requested could not be found.
      </p>
    </div>
  );
};

export default PageNotFound;
