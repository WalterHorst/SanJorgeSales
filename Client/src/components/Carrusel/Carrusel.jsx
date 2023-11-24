import { Carousel } from "antd";
const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "15rem",
  color: "#fff",
  textAlign: "center",
  backgroundSize: "cover",
};
const Carrusel = () => (
  <Carousel autoplay>
    <div>
      <img
        style={contentStyle}
        src="https://img.freepik.com/fotos-premium/tienda-frutas-verduras-fondo-pantalla-hd-8k-imagen-fotografica-stock_915071-32070.jpg?w=2000"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://png.pngtree.com/background/20230427/original/pngtree-photo-of-a-store-at-night-with-other-shoppers-picture-image_2494634.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://png.pngtree.com/background/20230516/original/pngtree-commercial-store-full-of-desserts-picture-image_2601589.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://png.pngtree.com/background/20230519/original/pngtree-an-empty-store-at-night-on-a-rainy-day-picture-image_2663096.jpg"
        alt=""
      />{" "}
      */
    </div>
  </Carousel>
);
export default Carrusel;
