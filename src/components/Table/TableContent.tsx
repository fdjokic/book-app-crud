import { TableRow } from "@mui/material";
import React from "react";
import { ISingleBook, ISingleBookInfo } from "../../books.interfaces";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Placeholder from "../../assets/images/placeholder.jpeg";
import { CustomCell } from "../../styles/customComponents";

export const TableContent = (props: ISingleBookInfo) => {
  const {
    title,
    nameOfAuthor: author,
    yearOfBublishing: year,
    quantity,
    numOfPages: pages,
    coverPhoto,
  } = props.bookInfo;

  return (
    <>
      <CustomCell>
        <img
          style={{ width: "50px", height: "50px" }}
          src={coverPhoto}
          alt="cover-photo"
          onError={({ currentTarget }) => (currentTarget.src = Placeholder)}
        />
      </CustomCell>

      <CustomCell>{title}</CustomCell>
      <CustomCell>{author}</CustomCell>
      <CustomCell>{year}</CustomCell>
      <CustomCell>{pages}</CustomCell>
      <CustomCell>{quantity}</CustomCell>
      <CustomCell>
        <MoreVertIcon />
      </CustomCell>
    </>
  );
};
