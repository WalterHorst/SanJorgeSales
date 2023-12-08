

import React, { useState } from 'react';
import { Card, Button, Modal, Input, Select } from 'antd';

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



  const productList = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    // ... add more products as needed
  ];

  const filteredProducts = productList.filter((product) => {
    const includesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPriceRange = selectedPriceRange === 'All' || checkPriceRange(product.price, selectedPriceRange);
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;

    return includesSearchTerm && matchesCategory && matchesPriceRange && matchesBrand;
  });

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
    // Implement logic to check if the price falls within the selected range
    // Return true if it does, false otherwise
    // Example:
    // if (range === 'Low' && price < 50) return true;
    // if (range === 'Medium' && price >= 50 && price <= 100) return true;
    // if (range === 'High' && price > 100) return true;
    // return false;
  };


  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
      {/* {productList.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          style={{ width: 300, margin: '16px' }}
        >
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button type="primary" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
          <Button onClick={() => handleShowDetails(product)}>
            View Details
          </Button>
        </Card>
      ))}

      <Modal
        title={selectedProduct?.name}
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
          </>
        )}
      </Modal> */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px' }}>
        <Search placeholder="Search products" onSearch={handleSearch} />
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handleCategoryChange}
        >
          <Option value="All">All Categories</Option>
          {/* Map through your unique categories and create Option components */}
          {/* <Option value="Category1">Category1</Option> */}
          {/* <Option value="Category2">Category2</Option> */}
        </Select>

        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handlePriceRangeChange}
        >
          <Option value="All">All Prices</Option>
          {/* Add price range options */}
          {/* <Option value="Low">Low</Option> */}
          {/* <Option value="Medium">Medium</Option> */}
          {/* <Option value="High">High</Option> */}
        </Select>

        <Select
          defaultValue="All"
          style={{ width: 120, marginRight: '16px' }}
          onChange={handleBrandChange}
        >
          <Option value="All">All Brands</Option>
          {/* Map through your unique brands and create Option components */}
          {/* <Option value="Brand1">Brand1</Option> */}
          {/* <Option value="Brand2">Brand2</Option> */}
        </Select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            style={{ width: 300, margin: '16px' }}
          >
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Button type="primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
            <Button onClick={() => handleShowDetails(product)}>
              View Details
            </Button>
          </Card>
        ))}
      </div>

      <Modal
        title={selectedProduct?.name}
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
          </>
        )}
      </Modal>
    </div>
    </div>
  );
};

export default Productos;
