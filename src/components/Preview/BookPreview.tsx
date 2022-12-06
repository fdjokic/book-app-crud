import React from "react";
import { ISingleBook, ISingleBookInfo } from "../../books.interfaces";
import { IconContainer } from "./IconContainer";
import Placeholder from "../../assets/images/placeholder.jpeg";
import "../../styles/bookPreview.css";
import { InfoLine } from "./InfoLine";

export const BookPreview = ({
  slide,
  bookInfo,
  setSlide,
}: {
  slide: boolean;
  bookInfo: any;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(bookInfo);
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
      <img
        src={bookInfo.coverPhoto}
        alt="book-img"
        onError={({ currentTarget }) => (currentTarget.src = Placeholder)}
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
