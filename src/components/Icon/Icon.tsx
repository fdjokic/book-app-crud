import React from "react";
import { IconType } from "../Preview/IconContainer";
import "../../styles/icon.css";

interface IIcon {
  width: string;
  fontSize: string;
  background?: string;
  children: IconType;
  onClick: () => void;
  color: string;
  fixed?: boolean;
}

export const Icon = ({
  width,
  fontSize,
  background,
  color,
  children,
  onClick,
  fixed,
}: IIcon) => {
  return (
    <>
      <span
        style={{
          width: `${width}`,
          fontSize: `${fontSize}`,
          background: `${background}`,
          color: `${color}`,
          cursor: "pointer",
        }}
        onClick={onClick}
        className={fixed ? "fixed" : ""}
      >
        {children}
      </span>
    </>
  );
};
