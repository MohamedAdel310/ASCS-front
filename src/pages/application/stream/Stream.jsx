import React from "react";
import "../style/stream.css";

export default function Stream() {
  return (
    <div className="allcams">
      <div className="stream--header">
        <h1>All Cams</h1>
        <div className="select-scale--container">
          <select name="Scale" className="select-scale">
            <option value="1">3 * 3</option>
            <option value="2">5 * 5</option>
            <option value="3">6 * 6</option>
          </select>
        </div>
        <div className="stream--videos-container">
          <video
            controls
            src=""
            className="stream--video stream--video-main"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-1"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-2"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-3"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-4"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-5"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-6"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-7"
          ></video>
          <video
            controls
            src=""
            className="stream--video stream--video-8"
          ></video>
        </div>
      </div>
    </div>
  );
}
