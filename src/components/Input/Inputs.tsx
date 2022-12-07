import React, { useState } from "react";
import { TextField } from "@mui/material";
import { validate } from "../../helpers";

interface IInput {
  name?: string;
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

  const [valid, setValid] = useState<any>(false);

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
      onBlur={() => setValid(validate(name, value))}
      error={valid}
    />
  );
}
