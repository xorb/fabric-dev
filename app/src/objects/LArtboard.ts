import { Rect, TClassProperties } from "fabric";
import { FabricObjectProps } from "../types";

export const rectDefaultValues: Partial<TClassProperties<Rect>> = {
  rx: 0,
  ry: 0,
};

interface UniqueRectProps {
  rx: number;
  ry: number;
}

interface RectProps
  extends FabricObjectProps,
    UniqueRectProps,
    Record<string, any> {}

const defaultProps: Partial<RectProps> = {
  strokeWidth: 0,
  selectable: false,
  evented: false,
  hasBorders: true,
  hasControls: false,
  excludeFromExport: false,
  perPixelTargetFind: false,
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  borderScaleFactor: 1.2,
  borderColor: "#18A0FB",
};

class LArtboard extends Rect {
  static type = "LArtboard";
  constructor(options: Partial<RectProps>) {
    super(Object.assign({}, defaultProps, options));
  }
}

export default LArtboard;
