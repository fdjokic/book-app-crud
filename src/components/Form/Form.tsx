import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createBook, updateBook } from "../../features/bookSlice";
import { getBase64, onlyLetters } from "../../helpers";
import { AppDispatch } from "../../store";
import { ISingleBookPOST } from "../../types/books.interfaces";
import { Btn } from "../Buttons/Btn";
import Input from "../Input/Inputs";

interface IForm {
  editing: boolean;
  state: ISingleBookPOST;
  setState: React.Dispatch<React.SetStateAction<ISingleBookPOST>>;
}

export const Form = ({ editing, state, setState }: IForm) => {
  // states
  const dispatch = useDispatch<AppDispatch>();
  const {
    title,
    nameOfAuthor,
    numberOfPages,
    quantity,
    yearOfPublishing,
    dateOfBirthAuthor,
    coverPhoto,
  } = state;

  // handleChange
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    let value: string | number = e.target.value;
    const checkInt: string[] = [
      "numberOfPages",
      "yearOfPublishing",
      "quantity",
    ];

    if (checkInt.includes(name)) {
      value = value && parseInt(value);
    }

    setState({ ...state, [name]: value });
  };

  // handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check empty fields
    if (
      !title ||
      !nameOfAuthor ||
      !dateOfBirthAuthor ||
      !numberOfPages ||
      !yearOfPublishing ||
      !quantity
    ) {
      toast.error("Fill out required fields");
      return;
    }
    // check editing page
    if (editing) {
      dispatch(updateBook(state));
      return;
    }

    dispatch(createBook(state));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          maxHeight: "70vh",
        }}
      >
        <form
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "5rem",
          }}
        >
          <Input
            name="title"
            label="Title"
            value={title}
            onChange={handleChange}
          />
          <Input
            label="Author"
            placeholder="Name of author"
            value={nameOfAuthor}
            name="nameOfAuthor"
            onChange={handleChange}
          />
          <Input
            label={dateOfBirthAuthor ? "Date of Birth" : ""}
            name="dateOfBirthAuthor"
            type="date"
            width="30%"
            placeholder="Enter Date"
            value={dateOfBirthAuthor}
            onChange={handleChange}
          />
          <Input
            label="Number of pages"
            width="20%"
            name="numberOfPages"
            value={numberOfPages}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />
          <Input
            label="Year of publishing"
            width="20%"
            name="yearOfPublishing"
            value={yearOfPublishing}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />
          <Input
            label="Quantity"
            width="20%"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />

          <div style={{ display: "flex", gap: "2rem" }}>
            <Input
              value={coverPhoto ? "Image Uploaded" : ""}
              width="60%"
              label="Cover Photo"
            />
            <Btn
              variant="outlined"
              width="10rem"
              title="Upload Image"
              component="label"
            >
              <input
                name="coverPhoto"
                hidden
                onChange={(e: any) => {
                  getBase64(e.target.files[0]).then((res) =>
                    setState((prev: ISingleBookPOST) => {
                      const copy = { ...prev };
                      copy.coverPhoto = res;
                      return copy;
                    })
                  );
                }}
                type="file"
                accept="image/png, image/jpeg"
              />
            </Btn>
          </div>
          <Btn
            variant="contained"
            onClick={handleSubmit}
            width="10rem"
            title="Save Book"
          />
        </form>
      </div>
    </>
  );
};
