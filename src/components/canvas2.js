import React, { useState, useEffect, useRef } from "react";
// import {
//   Line,
//   SteppedLine,
//   PolyLine,
//   Circle,
//   Rectangle,
// } from "draw-shape-reactjs";
import img from "../assets/sample_img.jpg";
import "../App.css";

const ParentContainer = () => {
  const canvas = useRef();
  const parentCanvas = useRef();

  let ctx_array = [];
  var coordinates_array = [];
  const [state, setState] = useState({
    point1: [0, 0],
    point2: [0, 0],
    widthRect: 0,
    heightRect: 0,
  });

  const [ctx, setctx] = useState([]);

  let new_ctx, rect, canvasX, canvasY, drag;

  useEffect(() => {
    new_ctx = canvas.current.getContext("2d");
    rect = {};
    canvasX = parentCanvas.current.offsetLeft;
    canvasY = parentCanvas.current.offsetTop;
    drag = false;
    canvas.current.addEventListener("mousedown", mouseDown, false);
    canvas.current.addEventListener("mouseup", mouseUp, false);
    canvas.current.addEventListener("mousemove", mouseMove, false);
  }, []);

  //   let canvas = document.getElementById("canvas");
  const onCompleting = () => {
    //   TODO:api call
    // ctx.drawImage(img, 0, 0);
  };
  const mouseDown = (e) => {
    rect.x = e.pageX - canvasX + 0;
    rect.y = e.pageY - canvasY + 0;
    rect.w = 0;
    rect.h = 0;
    setState({
      point1: [rect.x, rect.y],
      point2: [0, 0],
      widthRect: 0,
      heightRect: 0,
    });
    // ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    drag = true;
  };
  const mouseUp = () => {
    console.log(rect);
    console.log(parentCanvas.current.offsetTop);
    drag = false;
    // draw();
  };

  const mouseMove = (e) => {
    if (drag) {
      rect.w = e.pageX - canvasX - rect.x;
      rect.h = e.pageY - canvasY - rect.y;
      setState({
        point2: [rect.x + rect.w, rect.y + rect.h],
        point1: [rect.x, rect.y],
        widthRect: Math.abs(rect.w),
        heightRect: Math.abs(rect.h),
      });
      new_ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      draw();
    }
  };

  const draw = () => {
    // ctx.setLineDash([2]);
    new_ctx.stroke();
    new_ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  };

  return (
    <div>
      <div style={{ height: "100px", width: "200px" }}></div>
      <div className="container" ref={parentCanvas}>
        <img src={img} alt="" />
        <canvas
          id="canvas"
          className="canvas"
          width="800"
          height="500"
          ref={canvas}
        >
          {" "}
        </canvas>
      </div>
      <button onClick={onCompleting}> On completing</button>{" "}
      <p>
        {" "}
        <strong> (X1, Y1): </strong> ({state.point1[0]}, {state.point1[1]})
      </p>
      <p>
        {" "}
        <strong> (X2, Y2): </strong> ({state.point2[0]}, {state.point2[1]})
      </p>
      <p>
        {" "}
        <strong> Size: </strong> ({state.widthRect}X{state.heightRect})
      </p>
      <p id="demo"> </p>
    </div>
  );
};

export default ParentContainer;
