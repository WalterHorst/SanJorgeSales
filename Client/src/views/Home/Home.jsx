import React from "react";
import "./Home.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import FirstPage from "../../components/firstPage/firstPage";


const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Carrusel>s</Carrusel>
        <FirstPage></FirstPage>
      </div>
    </div>
  );
};

export default Home;
