import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";

const App = () => {
 return (
  <div className="App">
   <h1>Server side rendering</h1>

   <ul>
    <li>
     <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/about">About</Link>
    </li>
    <li>
     <Link to="/articles">Articles</Link>
    </li>
   </ul>

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/articles" element={<Articles />} />
   </Routes>
  </div>
 );
};

export default App;
