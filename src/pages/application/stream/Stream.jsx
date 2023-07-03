import React, { useState, useEffect } from "react";
import "../style/stream.css";
import VideoJS from "./components/StreamConfig";
import GetStreamURLs from "./components/getStreamURLs";

export default function Stream() {
  // const [reqData, setReqData] = useState();

  const [data, setData] = useState(null);
  // const [streamsURLs, setStreamsURLs] = useState(null);
  // const [mainStreamURL, setMainStreamURL] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://myaz.cyclic.app/api/stream/649ec6a2a4f5b35e98aa1438"
        );
        if (response.ok) {
          const jsonData = await response.json();
          console.log("jsonData: ", jsonData);
          const data = jsonData.data;
          setData(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchData();
  }, []);

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
        {/* < /> */}
        {/* {console.log("GetStreamURLs(): ", GetStreamURLs())} */}
        {console.log("reqData: ", data)}
        <div className="stream--video stream--video-main">
          <VideoJS options={videoJsOptionsMain} onReady={handlePlayerReady} />
        </div>

        {data &&
          data.streamsURL.map((url, index) => (
            <div className={`stream--video stream--video-${index + 1}`}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          ))}
        {/* <div className="stream--video stream--video-2">
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
        </div> */}
      </div>
    </div>
  );
}
