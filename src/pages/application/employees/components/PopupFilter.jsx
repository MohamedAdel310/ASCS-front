import React from "react";
import MainButton from "../../../../components/button-main";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fa from "fontawesome";

export default function PopupFilter(props) {
  const handelPopupFilter = () => {
    props.setOpenFilterPopup(false);
  };

  return (
    <div className={`popup--filter popup ${props.value || "display-popup-false"}`}>
      <div className="container">
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
          <MainButton className="addBtn" text="Search" onClick={handelPopupFilter} />
          <div className="closeBtn" onClick={handelPopupFilter}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </div>
      </div>
    </div>
  );
}

{/* <MainButton text="" onClick={handelPopupFilter} /> */}