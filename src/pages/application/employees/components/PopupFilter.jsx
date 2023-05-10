import React from "react";
import MainButton from "../../../../components/button-main";

export default function PopupFilter(props) {
  const handelPopupFilter = () => {
    props.setOpenFilterPopup(false);
  };

  return (
    <div className={`popup--filter popup ${props.value || "display-popup-false"}`}>
      <h1>Filter</h1>
    {/************************ jop Title *************************** */}
      <div className="department">
          <label htmlFor="">jop Title</label>
          <select name="title" id="">
            <option value="">Worker</option>
            <option value="">Engineering</option>
            <option value="">Acountant</option>
            <option value="">Doctor</option>
          </select>
      </div>
    {/* ****************************department **************************/}
      <div className="department">
          <label htmlFor="">Department Title</label>
          <select name="Department" id="">
            <option value="">Office</option>
            <option value="">Area 1</option>
            <option value="">Area 2</option>
            <option value="">Area 3</option>
            <option value="">Area 4</option>
          </select>
      </div>
    {/**************************** Buttons ****************************/}

      <div className="close-and-add">
        <MainButton text="add" onClick={handelPopupFilter} />
        <MainButton text="close" onClick={handelPopupFilter} />
      </div>
    </div>
  );
}
