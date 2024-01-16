
import {getAllProducts}  from "../../redux/actions";

import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Input, Select } from 'antd';
import "./Productos.css"
import {useSelector, useDispatch} from 'react-redux';
const { Search } = Input;
const { Option } = Select;


const Productos = () => {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const  productList =  useSelector((estado) => estado.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // const productList [
  //   { id: 1, name: 'Product 1', price: 100, description: 'Description 1', category: 'Category1', brand: 'Brand1' },
  //   { id: 2, name: 'Product 2', price: 200, description: 'Description 2', category: 'Category2', brand: 'Brand2'  },
  //   { id: 3, name: 'Product 1', price: 100, description: 'Description 1', category: 'Category1', brand: 'Brand1'  },
  //   { id: 4, name: 'Product 2', price: 200, description: 'Description 2', category: 'Category2', brand: 'Brand2'  },
  //   { id: 5, name: 'Product 1', price: 500, description: 'Description 1', category: 'Category1', brand: 'Brand1'  },
  //   { id: 6, name: 'Product 2', price: 900, description: 'Description 2', category: 'Category2' , brand: 'Brand1' },
  //   { id: 7, name: 'Product 1', price: 100, description: 'Description 1', category: 'Category1' , brand: 'Brand2' },
  //   { id: 8, name: 'Product 2', price: 200, description: 'Description 2', category: 'Category2' , brand: 'Brand1'},
  //   { id: 9, name: 'Product 1', price: 400, description: 'Description 1', category: 'Category1' , brand: 'Brand1' },
  //   { id: 10, name: 'Product 2', price: 200, description: 'Description 2', category: 'Category2' , brand: 'Brand2' },
  //   { id: 11, name: 'Product 1', price: 80, description: 'Description 1', category: 'Category1' , brand: 'Brand1' },
  //   { id: 22, name: 'Product 2', price: 20, description: 'Description 2', category: 'Category2', brand: 'Brand1' },
  //   { id: 12, name: 'Product 1', price: 30, description: 'Description 1', category: 'Category1', brand: 'Brand2'  },
  //   { id: 23, name: 'Product 2', price: 20, description: 'Description 2', category: 'Category2', brand: 'Brand1'  },
  // ];

  
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };
  
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };
  
  const handlePriceRangeChange = (value) => {
    setSelectedPriceRange(value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  const checkPriceRange = (price, range) => {
    if (range === 'Low' && price < 50.00) return true;
    if (range === 'Medium' && price >= 50.00 && price <= 100.00) return true;
    if (range === 'High' && price > 100.00) return true;
    return false;
  };
  
  const filteredProducts = productList.filter((product) => {
    const includesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesPriceRange = selectedPriceRange === 'All' || checkPriceRange(product.price, selectedPriceRange);
    
    return includesSearchTerm && matchesCategory && matchesPriceRange && matchesBrand;
  });

  return (
    
  
      <div className= "super-product" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px' }}>
        <Search placeholder="Search products" onSearch={handleSearch} />
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handleCategoryChange}
        >
          <Option value="All">Categorias</Option>
          
          <Option value="Indumentaria">Indumentaria</Option>
          <Option value="Repuestos Automotor">Repuestos Automotor</Option>
          <Option value="Cocina">Cocina</Option>
          <Option value="Repuestos de motos">Repuestos de motos</Option>
          <Option value="Almacen">Almacen</Option>
          <Option value="Pezca">Pezca</Option>
          <Option value="Tecnologia">Tecnologia</Option>
          <Option value="Hogar">Hogar</Option>
        </Select>

        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handlePriceRangeChange}
        >
          <Option value="All">Precios</Option>
          {/* Add price range options */}
          <Option value="Low">Bajo</Option>
          <Option value="Medium">Medio</Option>
          <Option value="High">Alto</Option>
        </Select>

        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handleBrandChange}
        >
          <Option value="All">Marcas</Option>
          {/* Map through your unique brands and create Option components */}
          <Option value="Brand1">Marca1</Option>
          <Option value="Brand2">Marca2</Option>
        </Select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <Card
          brand={product.brand}
          image={product.image}
            category={product.category}
            key={product.id}
            title={product.name}
            style={{ width: 300, margin: '16px' }}
          >
           <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Categoria: {product.category}</p>
            <p>brand: {product.brand}</p>
            <Button type="primary" onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </Button>
            <Button onClick={() => handleShowDetails(product)}>
              Ver detalles
            </Button>
          </Card>
        ))}

      <Modal
        title={selectedProduct?.name}
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Cerrar
          </Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <p>{selectedProduct.description}</p>
            <p>Precio: ${selectedProduct.price}</p>
          </>
        )}
      </Modal>
    </div>
    </div>
  );
};

export default Productos;
