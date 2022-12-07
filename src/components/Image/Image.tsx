import React from "react";
import Placeholder from "../../assets/images/placeholder.jpeg";

interface IImage {
  src: string | undefined;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  alt: string;
  maxHeight?: string;
  borderBottom?: string;
  height?: string;
  minHeight?: string;
}

export const Image = ({
  src,
  width,
  maxWidth,
  minWidth,
  alt,
  maxHeight,
  borderBottom,
  height,
  minHeight,
}: IImage) => {
  const objectFit = width === "50px" ? "cover" : "contain";
  return (
    <>
      <img
        src={src}
        style={{
          objectFit: objectFit,
          width: `${width}`,
          maxWidth: `${maxWidth}`,
          minWidth: `${minWidth}`,
          maxHeight: `${maxHeight}`,
          borderBottom: `${borderBottom}`,
          height: `${height}`,
          minHeight: `${minHeight}`,
        }}
        onError={({ currentTarget }) => (currentTarget.src = Placeholder)}
        alt={alt}
      />
    </>
  );
};
