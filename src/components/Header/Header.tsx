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
        <div
          style={{
            padding: "1rem 5rem 2rem 8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <h1>{title}</h1>
        </div>
        {circle ? <CircleButton /> : null}
      </CustomBox>
    </div>
  );
};
