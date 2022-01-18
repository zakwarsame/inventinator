import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Nav from "./Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inventory />}>
          <Route path="/inventory" element={<Inventory />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
