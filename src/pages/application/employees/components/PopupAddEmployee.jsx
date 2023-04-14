import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupAddEmployee(props) {
  return (
    <div className="popup--add-employee">
      <h1>hello from add employee popup</h1>
      <MainButton text="add" onClick={() => props.handelCallback(false)} />
      <MainButton text="close" onClick={() => props.handelCallback(false)} />
      {/* <MainButton text="add" onClick={() => props.handelCallback(false)} />
      <MainButton text="close" onClick={() => props.handelCallback(false)} /> */}
    </div>
  );
}
