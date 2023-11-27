import img1 from "../../assets/Imagenes/Pagina3/img1.jpg";
import img3 from "../../assets/Imagenes/Pagina3/img2.jpg";
import img2 from "../../assets/Imagenes/Pagina3/img3.jpg";
import React from "react";
import "./ThirdPage.css";

const  ThirdPage = () => {
    return (
        <div>
            
            <div className="container">
                <div className="image-container">
                    <img
                        src={img1}
                        alt=""
                    />
                    <div className="image-text">Facil de utilizar</div>
                </div>

                    <div className="image-container">
                    <img
                        src={img2}
                        alt=""
                    />
                    <div className="image-text">Gestiona todas tus ventas rapidamente</div>
                </div>
                <div className="image-container">
                    <img
                        src={img3}
                        alt=""
                    />
                    <div className="image-text">Envios totalmente seguros</div>
                </div>
                </div>
            </div>
     
    );
};

export default  ThirdPage;
