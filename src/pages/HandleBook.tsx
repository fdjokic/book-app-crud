import React, { useEffect, useState } from "react";

import { Header } from "../components/Header/Header";

import { Form } from "../components/Form/Form";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBook } from "../features/bookSlice";
import { AppDispatch, RootState } from "../store";
import { ISingleBookPOST } from "../types/books.interfaces";

export const HandleBook = () => {
  const location = useLocation();
  const title = location.pathname.includes("add") ? "Add Book" : "Edit Book";
  const editing = title.includes("Edit");
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
    dispatch(getSingleBook(id));
  }, [id]);

  useEffect(() => {
    const obj = JSON.parse(JSON.stringify(singleBook));

    setState(obj);
    console.log("logged");
  }, [singleBook]);

  return (
    <>
      <Header title={title} arrow />
      <Form
        editing={editing ? true : false}
        state={state}
        setState={setState}
      />
    </>
  );
};
