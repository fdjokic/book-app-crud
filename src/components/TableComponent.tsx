import {
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

export const TableComponent = () => {
  const {
    books = [],
    totalRecords,
    limit,
  } = useSelector((store: RootState) => store.books);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const [sortQueries, setSortQueries] = useState({
    author: "asc",
    title: "asc",
  });
  // import { makeStyles } from "@material-ui/core/styles";

  // const useStyles = makeStyles({
  //   finalRow: {
  //     backgroundColor: "lightblue",
  //   },
  // });

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

  const handlePage = (e: any, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHeader query={sortQueries} setQuery={setSortQueries} />
          <TableBody>
            {books.map((item) => {
              return (
                <TableRow>
                  <TableContent bookInfo={item} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        onPageChange={() => setPage(page + 1)}
        rowsPerPage={-1}
        rowsPerPageOptions={[]}
        count={totalRecords ? totalRecords : 0}
      />
    </>
  );
};
