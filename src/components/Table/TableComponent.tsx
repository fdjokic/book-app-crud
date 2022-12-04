import { Box, Button, Table, TableBody, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../features/bookSlice";
import { AppDispatch, RootState } from "../../store";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHead";
import AddIcon from "@mui/icons-material/Add";
import {
  CircleBtn,
  CustomBox,
  CustomPagination,
  CustomTableContainer,
} from "../../styles/customComponents";

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
      <CustomBox>
        <CircleBtn sx={{ hover: { backgroundColor: "transparent" } }}>
          <AddIcon
            fontSize="large"
            sx={{ color: "green", verticalAlign: "middle", fontSize: 20 }}
          />
        </CircleBtn>
        <Button sx={{ width: "100px" }}></Button>
      </CustomBox>
      <CustomTableContainer>
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
      </CustomTableContainer>
      <CustomPagination
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
