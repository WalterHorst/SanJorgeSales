import React from "react";
import "./FifthPage.css";

const FifthPage = () => {
  return (
    <div className="conteinerP5">
      <h1 className="titulo2">
        <strong>Elige el plan que te convenga</strong>
      </h1>

      <h3 className="titulo2">
        <strong>Selecciona el plan más conveniente para tu negocio</strong>
      </h3>

      <div className="planes-container">
        <div className="plan">
          <button className="btnplan">Plan Gratuito</button>
          <h1>Desde $0</h1>
          <h5 className="segundotitulo">
            habre tu propia tienda online en minutos y aumenta tus ventas
            tomando pedidos por WhataApp.
          </h5>
        </div>

        <div className="plan">
          <button className="btnplan">Plan Comercial</button>
          <h1>Desde $1500</h1>
          <h5 className="segundotitulo">
            ¡Ahorra tiempo administrando tu negocio! Gestiona tus productos,
            precios y stock á agilmente con nuevas herramientas.
          </h5>
        </div>

        <div className="plan">
          <button className="btnplan">Plan Premiun</button>
          <h1>Desde $2000</h1>
          <h5 className="segundotitulo">
            Despega tus ventas con Faceboock e Instagram Shop, controla tus
            pedidos en tiempo real y conoce mejor a tus clientes.
          </h5>
        </div>
      </div>

      <button className="Btn">comparar planes</button>
    </div>
  );
};

export default FifthPage;
