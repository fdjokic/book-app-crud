import React from "react";
import "./App.css";
import { TableComponent } from "./components/Table/TableComponent";
import { Loading } from "./components/Loading/Loading";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { AddBook } from "./pages/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Loading />
      <Router>
        <Routes>
          <Route path="/" element={<TableComponent />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </Router>
      <ToastContainer
        closeButton={false}
        pauseOnHover={false}
        closeOnClick={true}
        autoClose={1100}
        position="top-left"
      />
    </>
  );
}

export default App;
