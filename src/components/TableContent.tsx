import { TableCell } from "@mui/material";
import React from "react";
import { ISingleBook } from "../books.interfaces";

export const TableContent = ({ bookInfo }: ISingleBook) => {
  const {
    title,
    nameOfAuthor: author,
    yearOfBublishing: year,
    quantity,
    numOfPages: pages,
  } = bookInfo;

  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>{year}</TableCell>
      <TableCell>{pages}</TableCell>
      <TableCell>{quantity}</TableCell>
    </>
  );
};
