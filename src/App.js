import React, { useEffect, useState } from "react";
import Axios from "axios";

// Components
import Fact from "./component/Fact";
import Footer from "./component/Footer";
import Cat from "./component/Cat";
import Header from "./component/Header";

// CSS
import "./stylesheets/base-reset.css";

const App = () => {
  // APIs
  const CAT_API = "https://catfact.ninja/fact";
  const NAME_API = "https://random-data-api.com/api/v2/users";

  // States
  const [catFact, setCatFact] = useState("");
  const [catName, setCatName] = useState("");

  const generateFact = async () => {
    try {
      const response = await Axios.get(CAT_API);
      const data = await response.data;
      setCatFact(data.fact);
    } catch (error) {
      console.log(error);
    }
  };

  const getCatName = async () => {
    try {
      const response = await Axios.get(NAME_API);
      const data = await response.data;
      setCatName(data.first_name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateFact();
    getCatName();
  }, []);

  return (
    <div>
      <Header />

      <Fact catFact={catFact} />
      <Cat catName={catName} />

      <button
        onClick={() => {
          generateFact();
          getCatName();
        }}
      >
        Show me more!
      </button>

      <Footer />
    </div>
  );
};

export default App;
