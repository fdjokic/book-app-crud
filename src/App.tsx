import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TableComponent } from "./components/Table/TableComponent";
import { Loading } from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <TableComponent />
    </div>
  );
}

export default App;
