import React from "react";
import "./Home.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import FirstPage from "../../components/firstPage/firstPage";
import SecondPage from "../../components/secondPage/SecondPage";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Carrusel></Carrusel>
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
      </div>
    </div>
  );
};

export default Home;
