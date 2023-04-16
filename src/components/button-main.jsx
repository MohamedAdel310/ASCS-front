import React from "react";

export default function MainButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="add"
      style={{
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        backgroundColor: "#ffaa01",
        color: "white",
        padding: "5px 10px",
      }}
    >
      {text}
    </button>
  );
}

// .add {
//   margin-right: 40px;
//   width: 300px;
//   height: 40px;
//   border-radius: 10px;
//   border: none;
//   cursor: pointer;
//   background-color: var(--socondary-color);
//   color: white;
// }
