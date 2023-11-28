import React from "react";
import "./Home.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import FirstPage from "../../components/FirstPage/FirstPage";
import SecondPage from "../../components/secondPage/SecondPage";
import ThirdPage from "../../components/ThirdPage/ThirdPage";
import FifthPage from "../../components/FifthPage/FifthPage";


const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Carrusel></Carrusel>
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
        <ThirdPage></ThirdPage>
        <FifthPage></FifthPage>
      </div>
    </div>
  );
};

export default Home;
