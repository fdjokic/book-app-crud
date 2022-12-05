import React from "react";
import { CircleBtn } from "../../styles/customComponents";
import AddIcon from "@mui/icons-material/Add";

export const CircleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <CircleBtn onClick={onClick}>
      <AddIcon
        fontSize="large"
        sx={{ color: "green", verticalAlign: "middle", fontSize: 20 }}
      />
    </CircleBtn>
  );
};
