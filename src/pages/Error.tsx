import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import img from "../assets/images/404.webp";
import { Image } from "../components/Image/Image";
import "../styles/error.css";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="img-container">
        <Image src={img} alt="img-error" width="100vw" height="80vh" />
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    </div>
  );
};
