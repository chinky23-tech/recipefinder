
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";

import ContactPage from "./Pages/ContactPage.jsx";
import Layout from "./Components/Layout.jsx";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;