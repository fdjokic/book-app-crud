import { TableHead, TableRow, TableSortLabel } from "@mui/material";
import React, { useState } from "react";
import { CustomTableHeaderCell } from "../../styles/customComponents";
// interfaces

export const TableHeader = ({ query, setQuery }: any) => {
  // states
  const [active, setActive] = useState<string>("Title");
  // header titles
  const sortTitles = ["Title", "Author"];

  const toggleSort = (param: string) => {
    if (query[param] === "asc") return "desc";
    return "asc";
  };

  const handleSort = (i: string) => {
    const param = i.toLowerCase();

    setActive(i);
    setQuery({ [param]: toggleSort(param) });
  };

  return (
    <>
      {/* change font color to gray */}
      <TableHead>
        <TableRow>
          <CustomTableHeaderCell
            sx={{ border: "none" }}
          ></CustomTableHeaderCell>

          {sortTitles.map((i) => {
            return (
              <CustomTableHeaderCell key={i}>
                <TableSortLabel
                  onClick={() => handleSort(i)}
                  active={active === i}
                  direction={query[i.toLowerCase()] === "asc" ? "asc" : "desc"}
                >
                  {i}
                </TableSortLabel>
              </CustomTableHeaderCell>
            );
          })}
          <CustomTableHeaderCell>Year</CustomTableHeaderCell>
          <CustomTableHeaderCell>Pages</CustomTableHeaderCell>
          <CustomTableHeaderCell>Quantity</CustomTableHeaderCell>
          <CustomTableHeaderCell></CustomTableHeaderCell>
        </TableRow>
      </TableHead>
    </>
  );
};
