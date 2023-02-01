import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom"

import { Home } from "./views/home";

import './assets/styles/main.scss'
import { About } from "./views/about";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>

          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />

        </Routes>
      </Router>
    </div>
  )
}

export default App;
