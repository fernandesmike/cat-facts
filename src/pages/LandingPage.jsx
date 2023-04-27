import React, { useEffect, useState } from "react";
import "../stylesheets/base-style.css";
import "../stylesheets/base-reset.css";

// Components
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Cat from "../component/Cat/Cat";
import Fact from "../component/Fact/Fact";
import axios from "axios";

// APIs
const CAT_API = "https://catfact.ninja/fact";
const NAME_API = "https://random-data-api.com/api/v2/users";

const LandingPage = () => {
  // State
  const [fact, setFact] = useState("");
  const [name, setName] = useState("");

  // Fetch data from APIs
  const fetchCatFact = async () => {
    try {
      const response = await axios.get(CAT_API);
      const data = await response.data;
      setFact(data.fact);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCatName = async () => {
    try {
      const response = await axios.get(NAME_API);
      const data = await response.data;
      setName(data.first_name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatFact();
    fetchCatName();
  }, []);

  return (
    <main>
      <Header />
      <Fact catFact={fact} />
      <Cat catName={name} />
      <button
        onClick={() => {
          fetchCatFact();
          fetchCatName();
        }}
        className="btn"
      >
        More catsss!
      </button>
      <Footer />
    </main>
  );
};

export default LandingPage;
