import "./App.css";
import React, { useRef } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";

import image_360 from "./assets/landscape.jpg";
import video_360 from "./assets/mountain.mp4";
import Canvas from "./components/canvas2";

function App() {
  const imageRef = useRef();
  const videoRef = useRef();

  const hotspot = (hotSpotDiv, args) => {
    hotSpotDiv.classList.add("custom-tooltip");
    var span = document.createElement("span");
    span.innerHTML = args.text;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + "px";
    span.style.marginLeft =
      -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
    span.style.marginTop = -span.scrollHeight - 12 + "px";
  };
  return (
    <div className="App">
      <Canvas />
      {/* <Pannellum
        ref={imageRef}
        width="100%"
        height="500px"
        image={image_360}
        pitch={30}
        yaw={180}
        hfov={110}
        autoLoad
        onMouseup={(e) => {
          console.log(
            imageRef.current.getViewer().getPitch(),
            imageRef.current.getViewer().getYaw(),
            e
          );
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={180}
          text="sample text"
          handleClick={(evt, args) => console.log(args.name)}
          handleClickArg={{ name: "test" }}
          tooltip={hotspot}
          tooltipArg={{ text: "hello there" }}
          cssClass={"custom-hotspot"}
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
          cssClass={"custom-hotspot"}
        />
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={31}
          yaw={-107}
          text="Info Hotspot Text 4"
          URL="https://github.com/farminf/pannellum-react"
        />
      </Pannellum> */}

      {/******  for video 360 component *******/}

      {/* <PannellumVideo
        ref={videoRef}
        video={video_360}
        loop
        width="100%"
        height="600px"
        pitch={10}
        yaw={180}
        hfov={140}
        minHfov={50}
        maxHfov={180}
        controls={true}
        hotspotDebug={false}
        onMouseup={(e) => {
          console.log(
            e,
            videoRef.current.getViewer().getPitch(),
            videoRef.current.getViewer().getYaw()
          );
        }}
        onLoad={() => {
          console.log("panorama loaded");
        }}
        onError={(err) => {
          console.log("Error", err);
        }}
        onErrorcleared={() => {
          console.log("Error Cleared");
        }}
        onMousedown={(evt) => {
          console.log("Mouse Down", evt);
        }}
        onTouchstart={(evt) => {
          console.log("Touch Start", evt);
        }}
        onTouchend={(evt) => {
          console.log("Touch End", evt);
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={150}
          handleClick={(evt, args) => console.log(args.name)}
          handleClickArg={{ name: "test" }}
        />

        <Pannellum.Hotspot
          type="info"
          pitch={31}
          yaw={-57}
          text="Info"
          URL="https://github.com/farminf"
        />
      </PannellumVideo> */}
    </div>
  );
}

export default App;
