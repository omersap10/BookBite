import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://gutendex.com/books/")
      .then((res) => {
        setBooks(res.data.results);
      })
      .catch((err) => {
        console.error("faild to fetch book", err);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="search-bar"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
