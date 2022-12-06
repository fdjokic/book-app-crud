import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import img from "../assets/images/404.webp";
import "../styles/error.css";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="img-container">
        <img src={img} />
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    </div>
  );
};
