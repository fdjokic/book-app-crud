import React from "react";
import { TextField } from "@mui/material";

interface IInput {
  name: string;
  label?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  type?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLImageElement>) => void;
}

export default function Input(props: IInput) {
  const { name, label, value, onChange, placeholder, width, type, onKeyDown } =
    props;

  return (
    <TextField
      variant="standard"
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      style={{ width: width }}
      onChange={onChange}
      type={type}
      onKeyDown={onKeyDown}

      //   {...(error && { error: true, helperText: error })}
    />
  );
}
