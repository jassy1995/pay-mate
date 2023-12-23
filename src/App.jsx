
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Pending from "./pages/Pending";
import Approved from "./pages/Approved";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" limit={1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/auth" element={<Login />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
