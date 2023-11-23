import React from "react";
import "./Home.css";
import Carousel from "../../components/Carrusel/carrusel";


const Home = () => {

  const carouselImages = [
    'https://www.daseinestudio.com.ar/wp-content/uploads/2017/07/diseno-frente-local-comercial-rosario-argentina-accesorios-para-celulares.jpg',
    'https://blog.inviertispro.com/wp-content/uploads/2023/01/invertir-en-locales-comerciales-1024x766.webp',
    'https://i.pinimg.com/736x/a0/5c/b0/a05cb0bc9edfc6a5c2d480eee8a3a89b.jpg',
    'https://lh5.googleusercontent.com/p/AF1QipOA52OsJ9xC-2uKw2sBMybS3SoSCjjgmmu7lkvT=w1080-k-no',
    'https://protexargentina.com/wp-content/uploads/2021/12/quickfood.jpg',
    'https://www.google.com/search?q=imagenes+hd++de+locales+comerciale&tbm=isch&ved=2ahUKEwjRgvXN8tqCAxXCSrgEHTrPBGEQ2-cCegQIABAA&oq=imagenes+hd++de+locales+comerciale&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BggAEAgQHjoHCAAQgAQQGFAAWLYfYNwgaABwAHgAgAG6AYgBzhOSAQQyMS42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Rq1fZdHHL8KV4dUPup6TiAY&bih=933&biw=1680&rlz=1C1VDKB_esAR1054AR1054#imgrc=DeJMoI8PuP53sM',
    'https://www.equipamientointegraldeoficinas.com/wp-content/uploads/reforma-tiendas-locales-comerciales.jpg',
    'https://i.pinimg.com/originals/70/0b/73/700b733f5a3b8e633c343beb1807d37e.jpg',
    'https://obelisco.com.co/wp-content/uploads/2020/02/hdlatam_medios.jpg',
    'https://inmobiliaria.cushmanwakefield.es/wp-content/uploads/2021/02/bright-1851267_1920-1.jpg',
    
  
  ];

  return (
    <div >
      <div className="home-container">
        <Carousel images={carouselImages} />
      </div>
    </div>
  );
};

export default Home;
