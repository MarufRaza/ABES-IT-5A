import { useState } from "react";
import "./App.css";
import Book from "./component/Book";
import Navbar from "./component/Navbar";
import Login from "./component/login";
import Registration from "./component/registration";

function App() {
  const [activeView, setActiveView] = useState("home");

  const renderView = () => {
    if (activeView === "login") return <Login />;
    if (activeView === "registration") return <Registration />;
    return (
      <div id="adi">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    );
  };

  return (
    <div>
      <Navbar onNavigate={setActiveView} />
      <br />
      {renderView()}
    </div>
  );
}

export default App;