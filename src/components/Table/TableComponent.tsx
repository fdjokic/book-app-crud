import { Table, TableBody } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getSingleBook } from "../../features/bookSlice";
import { AppDispatch, RootState } from "../../store";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHead";
import {
  CustomPagination,
  CustomTableContainer,
  CustomTableRow,
} from "../../styles/customComponents";
import { ISingleBook } from "../../books.interfaces";
import { BookPreview } from "../Preview/BookPreview";
import { Header } from "../Header/Header";
import "./table.css";

export const TableComponent = () => {
  // states
  const {
    books = [],
    limit,
    singleBook,
  } = useSelector((store: RootState) => store.books);
  const [page, setPage] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const [slide, setSlide] = useState<boolean>(false);
  const [sortQueries, setSortQueries] = useState({
    author: null,
    title: null,
  });
  // end of states

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
  }, [sortQueries, page, limit, dispatch]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleBookPreview = (id: number) => {
    setSlide(true);
    dispatch(getSingleBook(id));
  };

  return (
    <div className="container">
      <div className={slide ? "table shrink" : "table"}>
        <Header circle title="Books" />
        <CustomTableContainer>
          <Table aria-label="simple table" stickyHeader>
            <TableHeader query={sortQueries} setQuery={setSortQueries} />
            <TableBody>
              {books.map((item: ISingleBook) => {
                return (
                  <CustomTableRow
                    key={item.id}
                    onClick={() => handleBookPreview(item.id)}
                  >
                    <TableContent bookInfo={item} />
                  </CustomTableRow>
                );
              })}
            </TableBody>
          </Table>
        </CustomTableContainer>
        <CustomPagination
          page={page}
          rowsPerPageOptions={[]}
          rowsPerPage={limit ? limit : 10}
          // back-end hasn't provided totalCount from data base only totalCount from a page
          // totalCount 300 is taken from design pdf provided
          count={300}
          onPageChange={handlePageChange}
        />
      </div>
      <BookPreview
        bookInfo={singleBook}
        slide={slide}
        setSlide={setSlide}
      ></BookPreview>
    </div>
  );
};
