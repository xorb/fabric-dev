import { Path, classRegistry } from "fabric";
import { FabricObjectProps } from "../types";

interface UniquePathProps {
  sourcePath?: string;
  path?: any;
}

interface PathProps
  extends FabricObjectProps,
    UniquePathProps,
    Record<string, any> {}
{
}
const defualtProps: Partial<PathProps> = {
  originX: "left",
  originY: "top",
  selectable: false,
  transparentCorners: false,
  evented: false,
  excludeFromExport: true,
  hasControls: false,
  hasBorders: false,
  perPixelTargetFind: false,
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  strokeWidth: 0,
  hoverCursor: "default",
  objectCaching: false,
};

class LMaskCanvas extends Path {
  constructor(path: string, options: Partial<PathProps> = {}) {
    super(path, Object.assign({}, defualtProps, options));
  }
}

classRegistry.setClass(LMaskCanvas);
classRegistry.setSVGClass(LMaskCanvas);

export default LMaskCanvas;
