import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupFilter() {
  return (
    <div className="popup--filter">
      <h1>hello from add filter popup</h1>
      <MainButton text="add" onClick={() => setOpenEmployeePopup(false)} />
      <MainButton text="close" onClick={() => setOpenEmployeePopup(false)} />
    </div>
  );
}
