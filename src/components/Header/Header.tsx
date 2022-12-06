import { ArrowBack } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { CustomBox, CustomSelect } from "../../styles/customComponents";
import { CircleButton } from "../Buttons/CircleButton";
import { Icon } from "../Icon/Icon";
import { Select } from "../Select/Select";

export const Header = ({
  circle,
  title,
  select,
  arrow,
}: {
  circle?: boolean;
  title: string;
  select?: boolean;
  arrow?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomBox>
        <div className="header-content">
          {arrow ? (
            <Icon
              width="25px"
              color="white"
              fontSize="25px"
              onClick={() => navigate("/")}
              fixed
            >
              <ArrowBack />
            </Icon>
          ) : null}
          <h1>{title}</h1>
          {select ? <Select /> : null}
        </div>
        {circle ? <CircleButton onClick={() => navigate("/add-book")} /> : null}
      </CustomBox>
    </div>
  );
};
