import { MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getSelectOptions } from "../../features/bookSlice";
import { AppDispatch, RootState } from "../../store";
import { CustomSelect } from "../../styles/customComponents";

export const Select = () => {
  const { selectOptions } = useSelector((store: RootState) => store.books);
  const [selectedAuthor, setSelectedAuthor] = useState("Any Author");
  const dispatch = useDispatch<AppDispatch>();

  const uniqueOptions: string[] = Array.from(new Set(selectOptions));

  useEffect(() => {
    if (selectedAuthor === "Any Author") {
      dispatch(getBooks(null));
      return;
    }
    selectOptions && dispatch(getBooks(`?author=${selectedAuthor}`));
    /* eslint-disable */
  }, [selectedAuthor]);

  useEffect(() => {
    dispatch(getSelectOptions());
  }, []);
  return (
    <CustomSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      aria-label="sds"
      value={selectedAuthor}
      label="Any Author"
      variant="outlined"
    >
      <MenuItem
        value="Any Author"
        onClick={() => setSelectedAuthor("Any Author")}
      >
        Any Author
      </MenuItem>
      {uniqueOptions.map((i: string) => {
        return (
          <MenuItem key={i} value={i} onClick={() => setSelectedAuthor(i)}>
            {i}
          </MenuItem>
        );
      })}
    </CustomSelect>
  );
};
