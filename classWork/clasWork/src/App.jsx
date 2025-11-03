import React from "react";
import Card from "./MyComponents/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './MyComponents/Navbar';
import Change from './MyComponents/Usestate';
import Count1 from './MyComponents/count1'; // Capitalized to match JSX usage

const App = () => {
  return (
    <div>
      <Count1 />

      {/* 
      <br />
      <Card name="Pratham" age={18} />
      <br />
      <Card name="Nishkarsh" age={16} />
      <br />
      <Card name="Maruf" age={20} />
      */}
    </div>
  );
};

export default App;