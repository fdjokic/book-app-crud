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
      <TableCell style={{ borderBottom: "none" }}>{title}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{author}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{year}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{pages}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{quantity}</TableCell>
    </>
  );
};
