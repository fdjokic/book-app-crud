import React from 'react';
import { IconType } from '../Preview/IconContainer';

interface IIcon {
  width: string;
  fontSize: string;
  background?: string;
  children: IconType;
  onClick: () => void;
  color: string;
}

export const Icon = ({
  width,
  fontSize,
  background,
  color,
  children,
  onClick,
}: IIcon) => {
  return (
    <>
      <span
        style={{
          width: `${width}`,
          fontSize: `${fontSize}`,
          background: `${background}`,
          color: `${color}`,
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        {children}
      </span>
    </>
  );
};
