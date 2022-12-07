import React, { useEffect, useState } from "react";
import "./../styles/form.css";
import { Header } from "../components/Header/Header";

import { Form } from "../components/Form/Form";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBook } from "../features/bookSlice";
import { AppDispatch, RootState } from "../store";
import { ISingleBookPOST } from "../types/books.interfaces";
import { Image } from "../components/Image/Image";

export const HandleBook = () => {
  const location = useLocation();
  const title = location.pathname.includes("add") ? "Add Book" : "Edit Book";
  const editing = title.includes("Edit") ? true : false;
  const dispatch = useDispatch<AppDispatch>();
  const { singleBook } = useSelector((store: RootState) => store.books);
  const { id } = useParams();

  const [state, setState] = useState<ISingleBookPOST>({
    isbn: 23902390923,
    title: "",
    nameOfAuthor: "",
    dateOfBirthAuthor: "",
    numberOfPages: "",
    yearOfPublishing: "",
    quantity: "",
    coverPhoto: "",
  });
  useEffect(() => {
    if (editing) {
      dispatch(getSingleBook(id));
    }
    /* eslint-disable */
  }, [id]);
  useEffect(() => {
    if (editing) {
      const obj = JSON.parse(JSON.stringify(singleBook));

      setState(obj);
    }
    /* eslint-disable */
  }, [singleBook]);

  return (
    <>
      <Header title={title} arrow />
      <div className="handle-book">
        <Form editing={editing} state={state} setState={setState} />
        {editing && (
          <Image
            src={state.coverPhoto}
            alt="sd"
            maxWidth="20rem"
            minWidth="20rem"
            maxHeight="30rem"
          />
        )}
      </div>
    </>
  );
};
