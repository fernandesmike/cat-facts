import React, { useEffect, useState } from "react";

// Components & Pages
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

// CSS
import "./stylesheets/base-reset.css";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
