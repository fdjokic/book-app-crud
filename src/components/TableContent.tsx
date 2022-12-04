import { TableCell } from "@mui/material";
import React from "react";
import { ISingleBook } from "../books.interfaces";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Placeholder from "../assets/images/placeholder.jpeg";

export const TableContent = ({ bookInfo }: ISingleBook) => {
  const {
    title,
    nameOfAuthor: author,
    yearOfBublishing: year,
    quantity,
    numOfPages: pages,
    coverPhoto,
  } = bookInfo;
  console.log(bookInfo);
  return (
    <>
      <TableCell style={{ borderBottom: "none" }}>
        <img
          style={{ width: "50px", height: "70px" }}
          src={coverPhoto}
          alt="cover-photo"
          onError={({ currentTarget }) => (currentTarget.src = Placeholder)}
        />
      </TableCell>

      <TableCell style={{ borderBottom: "none" }}>{title}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{author}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{year}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{pages}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>{quantity}</TableCell>
      <TableCell style={{ borderBottom: "none" }}>
        <MoreVertIcon />
      </TableCell>
    </>
  );
};
