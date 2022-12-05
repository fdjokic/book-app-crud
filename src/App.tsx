import React from "react";
import "./App.css";
import { TableComponent } from "./components/Table/TableComponent";
import { Loading } from "./components/Loading/Loading";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Loading />
      <Router>
        <Routes>
          <Route path="/" element={<TableComponent />} />
          <Route path="/add-book" element={<div>add</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
