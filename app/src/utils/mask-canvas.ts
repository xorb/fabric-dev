interface GenerateMaskCanvasPathProps {
  top: number;
  left: number;
  artboardHeight: number;
  artboardWidth: number;
}
export const generateMaskCanvasPath = ({
  top,
  left,
  artboardHeight,
  artboardWidth,
}: GenerateMaskCanvasPathProps) => {
  const Padding = 50000;
  const PaddingHalf = Padding / 2;

  const maskPath = `M0 0 L${Padding} 0 L${Padding} ${Padding} L0 ${Padding} L0 0 Z 
  M${PaddingHalf + left} ${PaddingHalf + top} 
  L${PaddingHalf + left} ${PaddingHalf + top + artboardHeight} 
  L${PaddingHalf + left + artboardWidth} ${PaddingHalf + top + artboardHeight} 
  L${PaddingHalf + left + artboardWidth} ${PaddingHalf + top} 
  L${PaddingHalf + left} ${PaddingHalf + top} Z`;
  return maskPath;
};
