import { useState } from "react";
import "./App.css";
import Book from "./component/Book";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <div id="adi">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default App;