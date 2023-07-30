import React, { useState, useEffect } from "react";
import { SearchContainer, SearchResultWrapper } from "./BookSearch.styles";
import { Button, Stack, Typography, OutlinedInput } from "@mui/material";
import BooksList from "../BooksList";
import { useSearchParams } from "react-router-dom";
import { PageContainer } from "../../shared";

interface BookSearchProps {
  initialValue?: string;
}

const BookSearch = ({ initialValue }: BookSearchProps) => {
  const [inputValue, setInputValue] = useState(initialValue || "");
  const [searchValue, setSearchValue] = useState(initialValue || "");
  const [showResults, setShowResults] = useState(Boolean(initialValue));
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (inputValue === "") {
      setSearchValue("");
      setSearchParams({}, { replace: true });
      setShowResults(false);
    }
  }, [inputValue, setSearchParams]);

  useEffect(() => {
    if (searchValue) {
      if (searchParams.get("q") !== searchValue) {
        setSearchParams({ q: searchValue });
      }
    } else {
      if (searchParams.has("q")) {
        setSearchParams({}, { replace: true });
      }
    }
  }, [searchValue, setSearchParams, searchParams]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchValue(inputValue);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchValue("");
    }
  };

  return (
    <SearchContainer>
      <Typography variant="h4">Book Search</Typography>
      <Typography variant="h6">
        Reading lists begin as a shelf full of hope until the year flies
      </Typography>
      <Stack direction="row" my={2} spacing={2} minWidth="350px" width="50%">
        <OutlinedInput
          size="small"
          margin="dense"
          placeholder="Ex. Harry Potter"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {showResults && (
        <PageContainer>
          <SearchResultWrapper>
            <BooksList listTitle="Search Result" searchTerm={searchValue} />
          </SearchResultWrapper>
        </PageContainer>
      )}
    </SearchContainer>
  );
};

export default BookSearch;
