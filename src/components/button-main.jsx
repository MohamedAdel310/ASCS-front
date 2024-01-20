export default function MainButton({ className, text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      // style={{
      //   borderRadius: 10,
      //   border: "none",
      //   cursor: "pointer",
      //   backgroundColor: "#ffaa01",
      //   color: "white",
      //   padding: "5px 10px",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
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
