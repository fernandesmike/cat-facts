import React, { useEffect, useState } from "react";
import Axios from "axios";
import Fact from "./component/Fact";
import Footer from "./component/Footer";
import Cat from "./component/Cat";

const App = () => {
  const CAT_API = "https://catfact.ninja/fact";
  const NAME_API = "https://random-data-api.com/api/v2/users";

  const [catFact, setCatFact] = useState("");
  const [catName, setCatName] = useState();

  const generateFact = async () => {
    Axios.get(CAT_API).then((res) => {
      setCatFact(res.data.fact);
    });
    getCatName();
  };

  const getCatName = async () => {
    Axios.get(NAME_API).then((res) => {
      setCatName(res.data.first_name);
    });
  };

  useEffect(() => {
    generateFact();
  }, []);

  return (
    <div>
      <h1>Random cat facts</h1>
      <p>Said by an actual cat!</p>
      <p>{catFact}</p>
      <p>Said by a cat named {catName}</p>
      <button onClick={generateFact}>Show me more!</button>
    </div>
  );
};

export default App;
