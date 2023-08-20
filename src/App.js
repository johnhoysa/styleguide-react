import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//
import Colors from "./styleguide/Colors";
//
function App() {
  return (
    <div className="App">
      <header className="App-header">App.JS file here</header>
      <hr></hr>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to="/styleguide/colors">Link to colors page like /color</Link>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Colors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
