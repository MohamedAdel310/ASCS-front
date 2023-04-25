import React from "react";
import "../../style/popups.css";

export default function PopupEditDetails(props) {
  const handleEditDetails = () => {
    props.setOpenEditDetailsPopup(false);
  };

  return (
    <div
      className={`popup edit-details--popup ${
        props.active || "display-popup-false"
      } `}
    >
      <p className="edit-details--popup--message">hello from edit details</p>
      <button
        onClick={handleEditDetails}
        className="btn-style edit-details--popup--save"
      >
        Save
      </button>
      <button
        onClick={handleEditDetails}
        className="btn-style edit-details--popup--cancel"
      >
        Cancel
      </button>
    </div>
  );
}
