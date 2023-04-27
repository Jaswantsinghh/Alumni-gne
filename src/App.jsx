import React from "react";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Home";
import { Branches } from "./pages/Branches";
import { Batch } from "./pages/Batch";
import { Footer } from "./components/Footer";
import { Alumni } from "./pages/alumni";
import { Register } from "./pages/register";
import { Login } from "./pages/Login";
import { AdminPage } from "./pages/AdminPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/batches/:branch" element={<Batch />} />
            <Route path="/alumni/:alumniId" element={<Alumni />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
          <Footer />
        </div>
      </StoreProvider>
    </>
  );
}

export default App;
