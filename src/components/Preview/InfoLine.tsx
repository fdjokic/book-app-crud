import React from "react";

export const InfoLine = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="info-line">
      <span className="info-title">{title}</span>
      <span className="info-value">{value}</span>
    </div>
  );
};
