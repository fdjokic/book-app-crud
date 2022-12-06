import React from 'react';
import { TextField } from '@mui/material';

interface IInput {
  name: string;
  label: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
  width?: string;
  type?: string;
}

export default function Input(props: IInput) {
  const { name, label, value, onChange, placeholder, width, type } = props;
  return (
    <TextField
      variant='standard'
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      style={{ width: width }}
      onChange={onChange}
      type={type}

      //   {...(error && { error: true, helperText: error })}
    />
  );
}
