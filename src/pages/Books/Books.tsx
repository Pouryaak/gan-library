import React from "react";
import { PageContainer } from "../../components/shared";
import BooksList from "../../components/Books/BooksList";

const Books = () => {
  return (
    <div>
      <PageContainer>
        <BooksList listTitle="List of Books" />
      </PageContainer>
    </div>
  );
};

export default Books;
