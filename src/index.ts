export { getEnv, getFabricDocument, getFabricWindow, setEnv } from "./env";
export { cache } from "./cache";
export { VERSION as version, iMatrix } from "./constants";
export { config } from "./config";
export { classRegistry } from "./ClassRegistry";
export { runningAnimations } from "./util/animation/AnimationRegistry";

export * from "./typedefs";

export * from "./EventTypeDefs";
export { Observable } from "./Observable";

export { StaticCanvas } from "./canvas/StaticCanvas";
export { Canvas } from "./canvas/Canvas";
export { CanvasDOMManager } from "./canvas/DOMManagers/CanvasDOMManager";
export { StaticCanvasDOMManager } from "./canvas/DOMManagers/StaticCanvasDOMManager";

export type { XY } from "./Point";
export { Point } from "./Point";
export type { IntersectionType } from "./Intersection";
export { Intersection } from "./Intersection";
export { Color } from "./color/Color";
export * from "./color/typedefs";

export * from "./gradient";
export * from "./Pattern";
export { Shadow } from "./Shadow";
export type { SerializedShadowOptions } from "./Shadow";

export { BaseBrush } from "./brushes/BaseBrush";
export * from "./brushes/typedefs";

export { PencilBrush } from "./brushes/PencilBrush";
export { CircleBrush } from "./brushes/CircleBrush";
export { SprayBrush } from "./brushes/SprayBrush";
export { PatternBrush } from "./brushes/PatternBrush";

export { FabricObject as Object } from "./shapes/Object/FabricObject";
export type {
  TProps,
  TFabricObjectProps,
  FabricObjectProps,
  SerializedObjectProps,
} from "./shapes/Object/types";
export { Line } from "./shapes/Line";
export { Circle } from "./shapes/Circle";
export { Triangle } from "./shapes/Triangle";
export { Ellipse } from "./shapes/Ellipse";
export { Rect } from "./shapes/Rect";
export { Path } from "./shapes/Path";
export { Polyline } from "./shapes/Polyline";
export { Polygon } from "./shapes/Polygon";
export { Text } from "./shapes/Text/Text";
export { IText } from "./shapes/IText/IText";
export { Textbox } from "./shapes/Textbox";
export type { TextStyleDeclaration, TextStyle } from "./shapes/Text/StyledText";
export { Group } from "./shapes/Group";
export type {
  GroupProps,
  GroupEvents,
  SerializedGroupProps,
} from "./shapes/Group";
export { ActiveSelection } from "./shapes/ActiveSelection";
export { Image } from "./shapes/Image";
export type {
  ImageSource,
  SerializedImageProps,
  ImageProps,
} from "./shapes/Image";
export { createCollectionMixin } from "./Collection";

export * as util from "./util";

export * from "./parser";

export { Control } from "./controls/Control";
export * as controlsUtils from "./controls";

export * from "./filters";
