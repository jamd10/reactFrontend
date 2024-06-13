import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = ({ products, fetchProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [newProduct, setNewProduct] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${selectedProduct}`, { name: newProduct });
      fetchProducts();
      setSelectedProduct('');
      setNewProduct('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modificar Producto</h2>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
        <option value="">Selecciona un producto</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>{product.name}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={newProduct} 
        onChange={(e) => setNewProduct(e.target.value)} 
        placeholder="Nuevo nombre del producto" 
        required 
      />
      <button type="submit">Modificar</button>
    </form>
  );
};

export default EditProduct;
