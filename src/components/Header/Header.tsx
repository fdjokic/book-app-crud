import { MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { CustomBox, CustomSelect } from "../../styles/customComponents";
import { CircleButton } from "../Buttons/CircleButton";
import { Select } from "../Select/Select";

export const Header = ({
  circle,
  title,
}: {
  circle?: boolean;
  title: string;
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomBox>
        <div className="header-content">
          <h1>{title}</h1>
          <Select />
        </div>
        {circle ? <CircleButton onClick={() => navigate("/add-book")} /> : null}
      </CustomBox>
    </div>
  );
};
