import React from "react";
import "../style/stream.css";
import VideoJS from "./components/StreamConfig";

export default function Stream() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "imgURL",
    sources: [
      {
        src: "http://20.111.28.107:8088/hls/myaz.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const videoJsOptionsMain = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "http://20.111.28.107:8088/hls/myaz.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div className="allcams">
      <div className="stream--header">
        <h1 className="Stream--header-text">All Cams</h1>
        <div className="select-scale--container">
          <select name="Scale" className="select-scale">
            <option value="1">3 * 3</option>
            <option value="2">5 * 5</option>
            <option value="3">6 * 6</option>
          </select>
        </div>
      </div>
      <div className="stream--videos-container">
        <div className="stream--video stream--video-main">
          <VideoJS options={videoJsOptionsMain} onReady={handlePlayerReady} />
        </div>

        <div className="stream--video stream--video-1">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-2">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-3">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-4">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-5">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-6">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-7">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="stream--video stream--video-8">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </div>
  );
}
