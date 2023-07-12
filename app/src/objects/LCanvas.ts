import { Canvas as FabricCanvas } from "fabric";
import LArtboard from "./LArtboard";
import LMaskCanvas from "./LMaskCanvas";

class LCanvas extends FabricCanvas {
  constructor(el: string | HTMLCanvasElement, options?: {}) {
    super(el, options);
  }
  public allObjects() {
    return this.getObjects().filter((object) => {
      return !(object instanceof LArtboard) && !(object instanceof LMaskCanvas);
    });
  }
}

export default LCanvas;
