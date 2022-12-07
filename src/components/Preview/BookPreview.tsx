import React from "react";
import { IconContainer } from "./IconContainer";
import "../../styles/bookPreview.css";
import { InfoLine } from "./InfoLine";
import { Image } from "../Image/Image";

export const BookPreview = ({
  slide,
  bookInfo,
  setSlide,
}: {
  slide: boolean;
  bookInfo: any;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={slide ? "singleBook show" : "singleBook"}>
      <div className="singleBook-header">
        <IconContainer id={bookInfo.id} setSlide={setSlide} />
        <div className="singleBook-header-wrapper">
          <div className="singleBook-header-info">
            <h4>{bookInfo.title}</h4>
            <h6>{bookInfo.nameOfAuthor}</h6>
          </div>
        </div>
      </div>
      <Image
        src={bookInfo.coverPhoto}
        alt="book-img"
        maxWidth="100%"
        minWidth="100%"
        maxHeight="35%"
        borderBottom=" 1px solid #e1e1e1"
      />
      <div className="singleBook-general-info">
        <h5>Info</h5>
        <InfoLine value={bookInfo.title} title="Title" />
        <InfoLine value={bookInfo.nameOfAuthor} title="Author" />
        <InfoLine value={bookInfo.yearOfPublishing} title="Year" />
        <InfoLine value={bookInfo.numberOfPages} title="Pages" />
        <InfoLine value={bookInfo.quantity} title="Quantity" />
      </div>
    </div>
  );
};
