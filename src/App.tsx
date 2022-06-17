import React from "react";
import "./App.css";
import { Registration, Login, ProductsPage } from "./containers";
import { Route, Routes } from "react-router-dom";

import { AdminLogin, AdminPanel } from "./containers/admin";

import "antd/dist/antd.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
