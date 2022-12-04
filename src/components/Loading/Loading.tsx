import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Loading = () => {
  const { isLoading } = useSelector((store: RootState) => store.books);
  const conditions = isLoading;

  return (
    <div className={conditions ? "loading active" : "loading"}>
      <CircularProgress color="primary" />
    </div>
  );
};
