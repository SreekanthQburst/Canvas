// import React, { useRef, useEffect, useState } from "react";
// import CanvasDraw from "react-canvas-draw";

// export default function Canvas() {
//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");
//   let rect = {};
//   let canvasX =  canvas.offsetLeft;
//   let canvasY =  canvas.offsetTop;
//   let drag = false;

//   init();
//   drawImage = () => {
//     console.log("im in drawImage");
//     backgroundImage = new Image();

//     backgroundImage.src = {
//       img,
//     };

//     backgroundImage.onload = function () {
//       console.log("backgroundImage is loaded");
//       ctx.drawImage(backgroundImage, 0, 0);
//     };
//   };

//   init = () => {
//     canvas.addEventListener("mousedown", mouseDown, false);
//     canvas.addEventListener("mouseup", mouseUp, false);
//     canvas.addEventListener("mousemove", mouseMove, false);
//   };

//   mouseDown = (e) => {
//     rect.x = e.pageX - canvasX + 0;
//     rect.y = e.pageY - canvasY + 0;
//     rect.w = 0;
//     rect.h = 0;
//     setState({
//       point1: [rect.x, rect.y],
//       point2: [0, 0],
//       widthRect: 0,
//       heightRect: 0,
//     });
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drag = true;
//   };

//   mouseUp = () => {
//     drag = false;
//   };

//   mouseMove = (e) => {
//     if (drag) {
//       rect.w = e.pageX - canvasX - rect.x;
//       rect.h = e.pageY - canvasY - rect.y;
//       setState({
//         point2: [rect.x + rect.w, rect.y + rect.h],
//         point1: [rect.x, rect.y],
//         widthRect: Math.abs(rect.w),
//         heightRect: Math.abs(rect.h),
//       });
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       draw();
//     }
//   };

//   draw = () => {
//     ctx.setLineDash([2]);

//     ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
//   };
//   return (
//     <div>
//       <canvas id="canvas" width="800" height="450" src={img}>
//         {" "}
//       </canvas>
//       <button onClick={drawImage}> Draw Image </button>{" "}
//       <p>
//         {" "}
//         <strong> (X1, Y1): </strong> ({state.point1[0]},{" "}
//         {state.point1[1]})
//       </p>
//       <p>
//         {" "}
//         <strong> (X2, Y2): </strong> ({state.point2[0]},{" "}
//         {state.point2[1]})
//       </p>
//       <p>
//         {" "}
//         <strong> Size: </strong> ({state.widthRect}X{state.heightRect}
//         )
//       </p>
//       <p id="demo"> </p>
//     </div>
//   );
// }

import React, { Component, useState, useEffect } from "react";
import {
  Line,
  SteppedLine,
  PolyLine,
  Circle,
  Rectangle,
} from "draw-shape-reactjs";
import img from "../assets/sample_img.jpg";
// import "./parentContainerCSS.css";

class ParentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      point1: [0, 0],
      point2: [0, 0],
      widthRect: 0,
      heightRect: 0,
    };

    this.init = this.init.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.draw = this.draw.bind(this);
    this.drawImage = this.drawImage.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.rect = {};
    this.canvasX = this.canvas.offsetLeft;
    this.canvasY = this.canvas.offsetTop;
    this.drag = false;

    this.init();
  }

  drawImage = () => {
    console.log("im in drawImage");
    this.backgroundImage = new Image();

    this.backgroundImage.src = {
      img,
    };

    this.backgroundImage.onload = function () {
      console.log("backgroundImage is loaded");
      this.ctx.drawImage(this.backgroundImage, 0, 0);
    };
  };

  init = () => {
    this.canvas.addEventListener("mousedown", this.mouseDown, false);
    this.canvas.addEventListener("mouseup", this.mouseUp, false);
    this.canvas.addEventListener("mousemove", this.mouseMove, false);
  };

  mouseDown = (e) => {
    this.rect.x = e.pageX - this.canvasX + 0;
    this.rect.y = e.pageY - this.canvasY + 0;
    this.rect.w = 0;
    this.rect.h = 0;
    this.setState({
      point1: [this.rect.x, this.rect.y],
      point2: [0, 0],
      widthRect: 0,
      heightRect: 0,
    });
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drag = true;
  };

  mouseUp = () => {
    this.drag = false;
  };

  mouseMove = (e) => {
    if (this.drag) {
      this.rect.w = e.pageX - this.canvasX - this.rect.x;
      this.rect.h = e.pageY - this.canvasY - this.rect.y;
      this.setState({
        point2: [this.rect.x + this.rect.w, this.rect.y + this.rect.h],
        point1: [this.rect.x, this.rect.y],
        widthRect: Math.abs(this.rect.w),
        heightRect: Math.abs(this.rect.h),
      });
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw();
    }
  };

  draw = () => {
    this.ctx.setLineDash([2]);

    this.ctx.strokeRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  };

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          width="800"
          height="450"
          src={img}
          style={{ border: "solid" }}
        >
          {" "}
        </canvas>
        <button onClick={this.drawImage}> Draw Image </button>{" "}
        <p>
          {" "}
          <strong> (X1, Y1): </strong> ({this.state.point1[0]},{" "}
          {this.state.point1[1]})
        </p>
        <p>
          {" "}
          <strong> (X2, Y2): </strong> ({this.state.point2[0]},{" "}
          {this.state.point2[1]})
        </p>
        <p>
          {" "}
          <strong> Size: </strong> ({this.state.widthRect}X
          {this.state.heightRect})
        </p>
        <p id="demo"> </p>
      </div>
    );
  }
}

export default ParentContainer;
