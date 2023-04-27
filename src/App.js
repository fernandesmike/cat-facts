import React, { useEffect, useState } from "react";
import Axios from "axios";

// Components & Pages
import LandingPage from "./pages/LandingPage";
import Cat from "./component/Cat/Cat";
import NotFound from "./pages/NotFound";

// CSS
import "./stylesheets/base-reset.css";
import { Link, Route, Routes } from "react-router-dom";

const CAT_API = "https://catfact.ninja/fact";
const NAME_API = "https://random-data-api.com/api/v2/users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
