import React from "react";
import "./Home.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import FirstPage from "../../components/firstPage/firstPage";
import SecondPage from "../../components/secondPage/SecondPage";

import FourtPage from "../../components/FourtPage/FourtPage";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Carrusel></Carrusel>
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
        <FourtPage></FourtPage>
      </div>
    </div>
  );
};

export default Home;
