import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../features/bookSlice";
import { AppDispatch, RootState } from "../store";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHead";
import AddIcon from "@mui/icons-material/Add";

export const TableComponent = () => {
  const {
    books = [],
    totalRecords,
    limit,
  } = useSelector((store: RootState) => store.books);
  const [page, setPage] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const [sortQueries, setSortQueries] = useState({
    author: null,
    title: null,
  });

  useEffect(() => {
    let filter = `?startPage=${page}&limitPage=${limit ? limit : 10}`;

    if (sortQueries.author) {
      filter = `?sortByAuthor=${
        sortQueries.author
      }&startPage=${page}&limitPage=${limit ? limit : 10}`;
    } else if (sortQueries.title) {
      filter = `?sortByTitle=${sortQueries.title}&startPage=${page}&limitPage=${
        limit ? limit : 10
      }`;
    }

    dispatch(getBooks(filter));
  }, [sortQueries, page]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <Box sx={{ bgcolor: "info.main", position: "relative" }} height="150px">
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            background: "white",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "middle",
            position: "absolute",
            bottom: "-20px",
            padding: "0.5rem",
          }}
        >
          <AddIcon
            fontSize="large"
            sx={{ color: "green", verticalAlign: "middle", fontSize: 20 }}
          />
        </div>
        <Button sx={{ width: "100px" }}></Button>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHeader query={sortQueries} setQuery={setSortQueries} />
          <TableBody>
            {books.map((item) => {
              return (
                <TableRow
                  sx={{
                    outline: "none",
                    border: "none",
                  }}
                >
                  <TableContent bookInfo={item} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        rowsPerPageOptions={[]}
        rowsPerPage={10}
        // back-end hasn't provided totalCount from data base only totalCount from a page
        // totalCount 300 is taken from design
        count={300}
        onPageChange={handlePageChange}
      />
    </>
  );
};
