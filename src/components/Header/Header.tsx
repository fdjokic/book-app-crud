import React from "react";
import { CustomBox } from "../../styles/customComponents";
import { CircleButton } from "../Buttons/CircleButton";

export const Header = ({
  circle,
  title,
}: {
  circle?: boolean;
  title: string;
}) => {
  return (
    <div>
      <CustomBox>
        <div className="header-content">
          <h1>{title}</h1>
        </div>
        {circle ? <CircleButton /> : null}
      </CustomBox>
    </div>
  );
};
