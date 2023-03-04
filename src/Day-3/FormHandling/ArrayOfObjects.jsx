import React, { useState } from "react";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];

function BookList() {
  const [bookList, setBookList] = useState(books);

  const handleRemove = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <ul>
      {bookList.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <button onClick={() => handleRemove(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
