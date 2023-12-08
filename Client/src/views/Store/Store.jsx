import React, { useState } from "react";
import "./Store.css";
import { Button } from "antd";
import ModalForm from "../../components/ModalProduct/ModalProduct";
import EditStoreModal from "../../components/ModalStore/ModalStore";

const Store = () => {
  const [productList, setProductList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [storeData, setStoreData] = useState({
    coverPhotoUrl: "URL1",
    profilePictureUrl: "URL2",
    sellerName: "Vendedor",
    sellerLocation: "Ubicación",
  });

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

  const handleBuyProduct = (product) => {
    // Lógica para la compra del producto
    console.log(`Comprando ${product.name} por ${product.price}`);
  };

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleEditCancel = () => {
    setEditModalVisible(false);
  };

  const handleEditUpdate = (values) => {
    setStoreData(values);
    setEditModalVisible(false);
  };

  return (
    <div className="profile-container">

      <Button type="primary" onClick={handleEditClick} style={{ margin: '10px' }}>
        Editar Tienda
      </Button>

      <EditStoreModal 
        visible={editModalVisible}
        onCancel={handleEditCancel}
        onUpdate={handleEditUpdate}
        initialData={storeData}
      />

      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${storeData.coverPhotoUrl})` }}
      ></div>
      <div className="profile-details">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${storeData.profilePictureUrl})` }}
        ></div>
        <h2>{storeData.sellerName}</h2>
        <p>{storeData.sellerLocation}</p>
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
    </div>
  );
};

export default Store;
