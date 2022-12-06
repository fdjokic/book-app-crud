import React from "react";
import { ISingleBook, ISingleBookInfo } from "../../types/books.interfaces";
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
          src={coverPhoto}
          alt="cover-img"
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
