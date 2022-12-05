import React from "react";
import "./App.css";
import { TableComponent } from "./components/Table/TableComponent";
import { Loading } from "./components/Loading/Loading";

function App() {
  return (
    <>
      <TableComponent />
      <Loading />
    </>
  );
}

export default App;
