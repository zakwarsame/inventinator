import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Nav from "./Nav";
import CreateInventory from "./pages/CreateInventory";
import UpdateInventory from "./pages/UpdateInventory";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inventory />}></Route>
        <Route path="create" element={<CreateInventory />} />
        <Route path="update/:id" element={<UpdateInventory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
