import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">
        {book.authors?.[0]?.name || "unknown Authors"}
      </p>
    </div>
  );
};

export default BookCard;
