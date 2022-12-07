import React from "react";

import { Header } from "../components/Header/Header";

import { Form } from "../components/Form/Form";
import { useLocation } from "react-router";

export const HandleBook = () => {
  const location = useLocation();

  const title = location.pathname.includes("add") ? "Add Book" : "Edit Book";
  return (
    <>
      <Header title={title} arrow />
      <Form editing={title.includes("Edit") ? true : false} />
    </>
  );
};
