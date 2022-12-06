import { KeyboardEvent } from "react";

export const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const onlyLetters = (e:KeyboardEvent<HTMLImageElement>) => {

  if (!(e.key === 'Backspace')) {
    const regex = /[0-9]/;
    const valid:boolean = regex.test(e.key);
    if (!valid) e.preventDefault();
  }
};
