import React from "react";
import { ISingleBookInfo } from "../../types/books.interfaces";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CustomCell } from "../../styles/customComponents";
import { Image } from "../Image/Image";

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
        <Image
          src={coverPhoto}
          alt="cover-img"
          width=" 50px"
          height=" 50px"
          minWidth="3rem"
        />
      </CustomCell>

      <CustomCell sx={{ color: "black", fontWeight: "400" }}>
        {title}
      </CustomCell>
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
