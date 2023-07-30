import { useState, useEffect } from "react";
import { fetchBooks } from "../services/book.services";
import { Book } from "../interfaces";

export function useFetchBooks(searchTerm: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Book[] | null>(null);

  useEffect(() => {
    setError(null);
    setData(null);
    setLoading(true);

    fetchBooks(searchTerm)
      .then((books) => {
        setData(books);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [searchTerm]);

  return { loading, error, data };
}
