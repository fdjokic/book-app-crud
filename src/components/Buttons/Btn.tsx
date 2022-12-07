import { Button } from "@mui/material";
import React from "react";

interface IButton {
  variant: any;
  onClick?: (e: React.FormEvent) => void;
  width: string;
  title: string;
  children?: any;
  component?: any;
}

export const Btn = ({
  variant,
  onClick,
  width,
  title,
  children,
  component,
}: IButton) => {
  const grayUpload: any = title === "Upload Image" && {
    border: "1px solid gray",
    color: "gray",
    hover: {
      "&.MuiButtonBase-root:hover": {
        bgcolor: "transparent",
      },
    },
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        width: width,
        border: grayUpload.border,
        color: grayUpload.color,
        "&.MuiButtonBase-root:hover": {
          border: `1px solid ${grayUpload.color}`,
        },
      }}
      component={component}
    >
      {title}
      {children}
    </Button>
  );
};
