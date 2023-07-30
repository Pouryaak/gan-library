import React from "react";
import BookCard from "../BookCard";
import { Book } from "../../../interfaces";
import { Typography } from "@mui/material";
import Loader from "../../Loader/Loader";
import { useFetchBooks } from "../../../hooks/useFetchBooks";

interface BooksListProps {
  filter?: (books: Book[]) => Book[];
  searchTerm?: string;
  listTitle: string;
}

const BooksList = ({ filter, searchTerm, listTitle }: BooksListProps) => {
  const {
    data: books,
    error,
    loading,
  } = useFetchBooks(searchTerm ?? "compliance");

  if (error) return <div>Error: {error.message}</div>;

  const filteredBooks = (filter ? filter(books || []) : books) || [];

  return (
    <>
      {!loading ? (
        <>
          <Typography variant="h4" gutterBottom>
            {listTitle}
          </Typography>
          {books && !books.length && <div>No Results Found!</div>}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {books &&
              books.length > 0 &&
              filteredBooks.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BooksList;
