import { useState } from "react";
import "./Store.css";

const Store = () => {
  const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLocation, setSellerLocation] = useState("");
  const [itemsForSale, setItemsForSale] = useState([]);

  const handleAddItem = (item) => {
    setItemsForSale([...itemsForSale, item]);
  };

  return (
    <div className="profile-container">
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
        <h3>Elementos en Venta</h3>
        <ul>
          {itemsForSale.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
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
        <input
          type="text"
          placeholder="Agregar elemento en venta"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddItem(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Store;
