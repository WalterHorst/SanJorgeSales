import { useState } from "react";
import { SettingOutlined, PlusOutlined } from "@ant-design/icons";
import "./Store.css";
import { Button } from "antd";
import ModalForm from "../../components/ModalProduct/ModalProduct";
import EditStoreModal from "../../components/ModalStore/ModalStore";
import {createProducts}  from "../../redux/actions";
import { useDispatch } from "react-redux";


const Store = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch()
  
  const [visible, setVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [storeData, setStoreData] = useState({
    coverPhotoUrl:
    "https://cdn.icon-icons.com/icons2/1856/PNG/512/add-photo-alternate_116693.png",
    profilePictureUrl:
    "https://cdn.icon-icons.com/icons2/1856/PNG/512/add-photo-alternate_116693.png",
    sellerName: "",
    sellerLocation: "",
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
    console.log(productList, "dasdsadsad");
    dispatch(createProducts(values))
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
      <EditStoreModal
        visible={editModalVisible}
        onCancel={handleEditCancel}
        onUpdate={handleEditUpdate}
        initialData={storeData}
      />

      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${storeData.coverPhotoUrl})` }}
      >
        <Button
          type="primary"
          onClick={handleEditClick}
          className="botonSetting"
        >
          <SettingOutlined className="edit-store-button" />
        </Button>
      </div>
      <div className="profile-details">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${storeData.profilePictureUrl})` }}
        ></div>
        <h2>{storeData.sellerName || "Tienda generica"}</h2>
        <h2>{storeData.sellerLocation || "Ubicacion: En tu corazon"}</h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
      </div>
      <div className="items-for-sale">
        <ul>
          <div>
            <Button type="primary" onClick={showModal} className="plus-button">
              <PlusOutlined />
            </Button>
            <ModalForm
              visible={visible}
              onCancel={handleCancel}
              onCreate={handleCreate}
            />
          </div>
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
    </div>
  );
};

export default Store;

// import React, { useState } from "react";
// import "./Store.css";
// import { Button } from "antd";
// import ModalForm from "../../components/ModalProduct/ModalProduct";
// import EditStoreModal from "../../components/ModalStore/ModalStore";

// const Store = () => {
//   const [productList, setProductList] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [editModalVisible, setEditModalVisible] = useState(false);
//   const [storeData, setStoreData] = useState({
//     coverPhotoUrl: "URL1",
//     profilePictureUrl: "URL2",
//     sellerName: "Vendedor",
//     sellerLocation: "Ubicación",
//   });

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleCreate = (values) => {
//     console.log("Received values:", values);
//     setProductList([...productList, values]);
//     setVisible(false);
//   };

//   const handleBuyProduct = (product) => {
//     console.log(`Comprando ${product.name} por ${product.price}`);
//   };

//   const handleEditClick = () => {
//     setEditModalVisible(true);
//   };

//   const handleEditCancel = () => {
//     setEditModalVisible(false);
//   };

//   const handleEditUpdate = (values) => {
//     setStoreData(values);
//     setEditModalVisible(false);
//   };

//   return (
//     <div className="profile-container">
//       <div className="store-info">
//         <div
//           className="cover-photo"
//           style={{ backgroundImage: `url(${storeData.coverPhotoUrl})` }}
//         ></div>
//         <div className="profile-details">
//           <div
//             className="profile-picture"
//             style={{ backgroundImage: `url(${storeData.profilePictureUrl})` }}
//           ></div>
//           <h2>{storeData.sellerName}</h2>
//           <p>{storeData.sellerLocation}</p>
//         </div>
//       </div>
//       <div className="items-for-sale">
//         <h3>Productos en Venta</h3>
//         <ul className="product-container">
//           {productList.map((product, index) => (
//             <li key={index} className="product-card">
//               <img
//                 src={product.image ? product.image[0].preview : ""}
//                 alt={product.name}
//                 className="product-image"
//               />
//               <div className="product-details">
//                 <h4>{product.name}</h4>
//                 <p>${product.price}</p>
//                 <p>{product.description}</p>
//               </div>
//               <div className="product-actions">
//                 <button onClick={() => handleBuyProduct(product)}>
//                   Comprar
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <Button type="primary" onClick={showModal}>
//           Agregar Producto
//         </Button>
//         <ModalForm
//           visible={visible}
//           onCancel={handleCancel}
//           onCreate={handleCreate}
//         />
//       </div>
//       <EditStoreModal
//         visible={editModalVisible}
//         onCancel={handleEditCancel}
//         onUpdate={handleEditUpdate}
//         initialData={storeData}
//       />
//     </div>
//   );
// };

// export default Store;

// import React, { useState } from "react";
// import { Button, Row, Col, Modal } from "antd";
// import ModalForm from "../../components/ModalProduct/ModalProduct";
// import EditStoreModal from "../../components/ModalStore/ModalStore";
// import "./Store.css"; // Asegúrate de importar tus estilos

// const Store = () => {
//   const [productList, setProductList] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [editModalVisible, setEditModalVisible] = useState(false);
//   const [storeData, setStoreData] = useState({
//     coverPhotoUrl: "URL1",
//     profilePictureUrl: "URL2",
//     sellerName: "Vendedor",
//     sellerLocation: "Ubicación",
//   });

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleCreate = (values) => {
//     console.log("Received values:", values);
//     setProductList([...productList, values]);
//     setVisible(false);
//   };

//   const handleBuyProduct = (product) => {
//     console.log(`Comprando ${product.name} por ${product.price}`);
//   };

//   const handleEditClick = () => {
//     setEditModalVisible(true);
//   };

//   const handleEditCancel = () => {
//     setEditModalVisible(false);
//   };

//   const handleEditUpdate = (values) => {
//     setStoreData(values);
//     setEditModalVisible(false);
//   };

//   return (
//     <div>
//       <Row gutter={16}>
//         <Col span={6}>
//           {/* Contenido del perfil de tienda */}
//           <div className="store-info">
//             <div
//               className="cover-photo"
//               style={{ backgroundImage: `url(${storeData.coverPhotoUrl})` }}
//             ></div>
//             <div className="profile-details">
//               <div
//                 className="profile-picture"
//                 style={{ backgroundImage: `url(${storeData.profilePictureUrl})` }}
//               ></div>
//               <h2>{storeData.sellerName}</h2>
//               <p>{storeData.sellerLocation}</p>
//             </div>
//           </div>
//         </Col>
//         <Col span={18}>
//           {/* Productos en venta */}
//           <div className="items-for-sale">
//             <Button type="primary" onClick={showModal}>
//               Agregar Producto
//             </Button>
//             <ModalForm
//               visible={visible}
//               onCancel={handleCancel}
//               onCreate={handleCreate}
//             />
//             <Button type="primary" onClick={handleEditClick} style={{ margin: '10px' }}>
//               Editar Tienda
//             </Button>
//             <EditStoreModal
//               visible={editModalVisible}
//               onCancel={handleEditCancel}
//               onUpdate={handleEditUpdate}
//               initialData={storeData}
//             />
//             <h3>Productos en Venta</h3>
//             <ul className="product-container">
//               {productList.map((product, index) => (
//                 <li key={index} className="product-card">
//                   {/* Renderizado de productos */}
//                   <img
//                     src={product.image ? product.image[0].preview : ""}
//                     alt={product.name}
//                     className="product-image"
//                   />
//                   <div className="product-details">
//                     <h4>{product.name}</h4>
//                     <p>${product.price}</p>
//                     <p>{product.description}</p>
//                   </div>
//                   <div className="product-actions">
//                     <button onClick={() => handleBuyProduct(product)}>
//                       comprar
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Store;
