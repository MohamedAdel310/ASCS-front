import React, { useState } from "react";
import MainButton from "../../../../components/button-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function StatusViolation(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    console.log("clicked");
  };

  const criticalLevel = (lev) => {
    return `critcal-level ${
      props.level > lev ? "critcal-level__active" : "critcal-level__inactive"
    }`;
  };

  return (
    <div
      className="status-siola"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="image">
        <FontAwesomeIcon
          className="icon"
          icon={faCircleExclamation}
        ></FontAwesomeIcon>
      </div>
      <div style={{ width: "100%" }}>
        <h2 className="status-violation--header">{props.event}</h2>
        <h3 className="status-violation--info">{props.eventMessage}</h3>
        <div>
          <div className="critcal_container">
            <h4 className="critcal_header">Critcal Level</h4>

            <div className={criticalLevel(0)}></div>
            <div className={criticalLevel(1)}></div>
            <div className={criticalLevel(2)}></div>
            <div className={criticalLevel(3)}></div>
          </div>
        </div>
      </div>
      <MainButton text="watch event" className="add" onClick={handleOpen} />

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Events images</DialogTitle>
        {props.imageUrls.length ? (
          ""
        ) : (
          <DialogContent>
            <DialogContentText>There is no photos yet</DialogContentText>
          </DialogContent>
        )}

        {console.log("event: ", props.imageUrls)}
        {props.imageUrls.map(
          (img) =>
            img && (
              <Card sx={{ width: 400, height: 350, m: 2 }}>
                <CardMedia
                  component="img"
                  image={img}
                  sx={{ width: "400px", objectFit: "cover" }}
                />
              </Card>
            )
        )}
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
