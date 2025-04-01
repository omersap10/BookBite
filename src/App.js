import "./App.css";
import "./components/BookList";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="app-container">
      <h1>BookBite</h1>
      <BookList />
    </div>
  );
}

export default App;
