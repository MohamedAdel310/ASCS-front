import React from "react";
import "../../style/popups.css";

export default function PopupEditDetails(props) {
  const handleEditDetails = () => {
    props.setOpenEditDetailsPopup(false);
  };

  return (
    
    <div
      className={`popup-edit-details--popup ${
        props.active || "display-popup-false"
      } `}
      >
    <div className="popup-edit-details--popup">
      <div className="edit-details--popup">

        <div className="edit-details--popup--info" >
        <input
                type="text"
                placeholder={props.name}
              />
              <label htmlFor="">Name</label>
              </div>
            <div className="edit-details--popup--info">
              <input
                type="text"
                placeholder={props.phoneNumber || "there is no phone"}
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="edit-details--popup--info">
              <input type="text" placeholder={props.department}  />
              <label htmlFor="">Department</label>
              </div>

              <div className="edit-details--popup--info">
              <input
                type="email"
                placeholder={props.email || "there is no email"}
    
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="edit-details--popup--info">
              <input
                placeholder={props.jobtitle}
                
              />
          
              <label htmlFor="">Job Title</label>
              </div>
  
            <div className="edit-details--popup--info">
              <input
                type="text"
                placeholder={props.shiftStartAt || "00:00 "}
              />
              
              <label htmlFor="">Shift Start at</label>
            </div>
            <div className="edit-details--popup--info">
              <input
                type="text"
                placeholder={props.shiftEndAt || "00:00 "}
              />
              <label htmlFor="">Shift End at</label>
              </div>
              

    
      </div>
      <div className="buttons">
      <button
        onClick={handleEditDetails}
        className="btn-style-edit-details--popup--save"
      >
        Save Changes
      </button>
      <button
        onClick={handleEditDetails}
        className="btn-style-edit-details--popup--cancel"
      >
        Cancel
      </button>
      </div>
    </div>
    
    </div>
    
  );
}
