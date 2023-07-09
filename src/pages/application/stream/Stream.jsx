import React, { useState, useEffect } from "react";
import "../style/stream.css";
import VideoJS from "./components/StreamConfig";
// import GetStreamURLs from "./components/getStreamURLs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MainButton from "../../../components/button-main";

export default function Stream() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://myaz.cyclic.app/api/eventImages/today"
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log("jsonData: ", jsonData);
        const data = jsonData.images;
        setData(data.reverse());
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handelClickRefresh = () => {
    fetchData();
  };
  useEffect(() => {
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
        <div className="select-scale--container"></div>
      </div>
      <div className="stream--videos-container">
        {console.log("reqData: ", data)}
        <div className="stream--video stream--video-main">
          <VideoJS options={videoJsOptionsMain} onReady={handlePlayerReady} />
          <button className="btn-refresh" onClick={handelClickRefresh}>
            Refresh
          </button>
        </div>
        {data?.map((img) => (
          <Card sx={{ maxWidth: 3380, m: 2 }}>
            <CardMedia component="img" alt={img.imgName} image={img.url} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {img.imageTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {img.imageDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
