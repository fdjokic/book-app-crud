import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React, { useState } from "react";
// interfaces
interface IQuery {
  author: string;
  title: string;
}
interface ITableHeader {
  setQuery: React.Dispatch<
    React.SetStateAction<{
      author: string;
      title: string;
    }>
  >;
  query: IQuery;
}

export const TableHeader = ({ query, setQuery }: any) => {
  // states
  const [active, setActive] = useState<string>("Title");
  // header titles
  const sortTitles = ["Title", "Author"];

  const toggleSort = (param: string) => {
    console.log(query[param]);
    if (query[param] === "asc") return "desc";
    return "asc";
  };

  const handleSort = (i: string) => {
    console.log(i);
    const param = i.toLowerCase();

    setActive(i);
    setQuery({ [param]: toggleSort(param) });
  };

  return (
    <>
      <TableHead>
        <TableRow>
          {sortTitles.map((i) => {
            return (
              <TableCell key={i}>
                <TableSortLabel
                  onClick={() => handleSort(i)}
                  active={active === i}
                  direction={query[i.toLowerCase()] === "asc" ? "asc" : "desc"}
                >
                  {i}
                </TableSortLabel>
              </TableCell>
            );
          })}
          <TableCell>Year</TableCell>
          <TableCell>Pages</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
