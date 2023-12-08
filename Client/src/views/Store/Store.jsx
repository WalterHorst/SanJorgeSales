import React, { useState } from "react";
import "./Store.css";
import { Button } from "antd";
import ModalForm from "../../components/ModalProduct/ModalProduct";

const Store = () => {
  const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLocation, setSellerLocation] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [productImage, setProductImage] = useState(""); // Nuevo estado para la URL de la imagen
  const [productList, setProductList] = useState([]);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = (values) => {
    console.log("Received values:", values);
    setProductList([...productList, values]);
    // Aquí puedes realizar la lógica para enviar los datos del formulario al backend
    setVisible(false);
  };

  // const handleAddProduct = () => {
  //   const newProduct = {
  //     name: productName,
  //     price: productPrice,
  //     image: productImage, // Agregar la URL de la imagen al objeto del producto
  //   };

  //   setProductList([...productList, newProduct]);
  //   setProductName("");
  //   setProductPrice("");
  //   setProductImage(""); // Limpiar la URL de la imagen después de agregar el producto
  // };

  const handleBuyProduct = (product) => {
    // Lógica para la compra del producto
    console.log(`Comprando ${product.name} por ${product.price}`);
  };

  return (
    <div className="profile-container">
      {/* <h3>Datos de tu tienda</h3>
      <div className="user-inputs">
        <input
          type="text"
          placeholder="URL de la portada"
          value={coverPhotoUrl}
          onChange={(e) => setCoverPhotoUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la foto de perfil"
          value={profilePictureUrl}
          onChange={(e) => setProfilePictureUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre del Vendedor"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ubicación del Vendedor"
          value={sellerLocation}
          onChange={(e) => setSellerLocation(e.target.value)}
        />
      </div> */}
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${coverPhotoUrl})` }}
      ></div>
      <div className="profile-details">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${profilePictureUrl})` }}
        ></div>
        <h2>{sellerName}</h2>
        <p>{sellerLocation}</p>
      </div>
      <div className="items-for-sale">
        <h3>Productos en Venta</h3>
        <ul className="product-grid">
          <div className="product-container">
            {productList.map((product, index) => (
              <li key={index} className="product-card">
                <img
                  src={product.image ? product.image[0].preview : ""}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <p>{product.description}</p>
                </div>
                <div className="product-actions">
                  <button onClick={() => handleBuyProduct(product)}>
                    comprar
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div>
        <Button type="primary" onClick={showModal}>
          Agregar Producto
        </Button>
        <ModalForm
          visible={visible}
          onCancel={handleCancel}
          onCreate={handleCreate}
        />
      </div>
      {/* <div className="user-inputs">
        <input
          type="text"
          placeholder="URL de la imagen del producto"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre del Producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"

          placeholder="Precio del Producto"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
        <button className="agregar-button" onClick={handleAddProduct}>Agregar</button>
    <div className="submit-store">
        <button className="agregar-button" onClick={handleAddProduct}>volver</button>
        <button className="agregar-button" onClick={handleAddProduct}>guardar cambios</button>
    </div> */}
    </div>
  );
};

export default Store;
