import React from "react";
import { LCanvas, LArtboard, LMaskCanvas } from "./objects";
import { Rect, ActiveSelection, controlsUtils } from "fabric";
import { generateMaskCanvasPath } from "./utils/mask-canvas";

const controlsConfig = {
  cornerColor: "#FFFFFF",
  cornerStrokeColor: "#18A0FB",
  cornerStyle: "square",
  borderColor: "#18A0FB",
  transparentCorners: false,
  borderScaleFactor: 1,
};
function App() {
  const canvasRef = React.useRef<LCanvas | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [state] = React.useState({
    artboard: {
      height: 500,
      width: 500,
    },
  });
  React.useEffect(() => {
    const canvasWrapper = containerRef.current as HTMLDivElement;
    const canvasWidth = canvasWrapper.offsetWidth;
    const canvasHeight = canvasWrapper.offsetHeight;

    const canvas = new LCanvas("canvas", {
      width: canvasWidth,
      height: canvasHeight,
      preserveObjectStacking: true,
      selectionColor: "#18A0FB1A",
      selectionBorderColor: "#18A0FB",
      selectionLineWidth: 1,
    });

    canvasRef.current = canvas;

    const zoom = canvas.getZoom();
    const artboardWidth = state.artboard.width;
    const artboardHeight = state.artboard.height;
    const left = ((canvasWidth - artboardWidth) / 2) * zoom;
    const top = ((canvasHeight - artboardHeight) / 2) * zoom;
    const padding = 50000;
    const paddingHalf = padding / 2;

    const artboard = new LArtboard({
      left: left,
      top: top,
      width: state.artboard.width,
      height: state.artboard.height,
      fill: "#ffffff",
    });

    const maskPath = generateMaskCanvasPath({
      left,
      top,
      artboardHeight,
      artboardWidth,
    });

    const maskCanvas = new LMaskCanvas(maskPath, {
      left: -paddingHalf,
      top: -paddingHalf,
      fill: "#ecf0f1",
      opacity: 1,
    });

    const centerPoint = canvas.getCenterPoint();

    //@ts-ignore
    const rect1 = new Rect({
      width: 75,
      height: 75,
      top: centerPoint.y - 75,
      left: centerPoint.x - 75,
      originX: "center",
      originY: "center",
      strokeWidth: 0,
      ...controlsConfig,
    });

    //@ts-ignore
    const rect2 = new Rect({
      width: 75,
      height: 75,
      top: centerPoint.y + 75,
      left: centerPoint.x + 75,
      originX: "center",
      originY: "center",
      strokeWidth: 0,
      ...controlsConfig,
    });

    canvas.add(artboard, rect1, rect2, maskCanvas);
    return () => {
      canvas.dispose();
    };
  }, []);

  const selectAll = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.discardActiveObject();
      const objects = canvas.allObjects();
      // HERE!
      const sel = canvas.getActiveSelection();
      canvas.remove(...objects);
      sel.add(...objects);
      sel.on("object:removed", ({ target }) => canvas.add(target));
      canvas.setActiveObject(sel);
      sel.triggerLayout();
      sel.controls = controlsUtils.createObjectDefaultControls();
      canvas.requestRenderAll();
    }
  }, [canvasRef]);

  return (
    <div className="container">
      <div className="navbar">
        <button onClick={selectAll}>select all objects</button>
      </div>
      <div className="canvas" ref={containerRef}>
        <canvas id="canvas" />
      </div>
    </div>
  );
}

export default App;
