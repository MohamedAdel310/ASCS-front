import React from "react";
import "../style/stream.css";

export default function Stream() {
  return (
    <div className="allcams">
      <div className="header">
    <h1>All Cams</h1>
    <div className="selectscale">
    <select
            name="Scale"
           id="scale"
          >
            <option value="1">3*3</option>
            <option value="2">5*5</option>
            <option value="3">6*6</option>
          </select>
          </div>
  <div className="cam_no1">
    <video controls 
    height="800"
    width="1400"
        >
    </video>
    </div>
  </div>
<div className="cams">

            <video id="Cam-no2" width="340" height="300" title="cam1" controls >
                
            </video>
            <video id="Cam-no3" width="340" height="300" controls>
                
            </video>
            <video id="Cam-no4" width="340" height="300" controls autoPlay>
                <source src="https://www.youtube.com/watch?v=uT-xxeFkgO8" type="ogg"></source>
            </video>
            <video id="Cam-no5" width="340" height="300" controls >
                
            </video>
     
            <video id="Cam-no6" width="340" height="300" controls >
                
            </video>
            <video id="Cam-no7" width="340" height="300"  controls >
            </video>
            <video id="Cam-no8" width="340" height="300"  controls >
                
            </video>
            <video id="Cam-no9" width="340"  height="300" controls >
                
            </video>
        
 </div>
 </div>
  );
  
};
