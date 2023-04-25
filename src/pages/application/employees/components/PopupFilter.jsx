import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupFilter(props) {
  const handelPopupFilter = () => {
    props.setOpenFilterPopup(false);
  };

  return (
    <div
      className={`popup--filter popup ${props.value || "display-popup-false"}`}
    >
      <h1>hello from add filter popup</h1>
      <MainButton text="add" onClick={handelPopupFilter} />
      <MainButton text="close" onClick={handelPopupFilter} />
    </div>
  );
}
