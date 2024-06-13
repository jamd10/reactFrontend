import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ fetchProducts }) => {
  const [product, setProduct] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', { name: product });
      fetchProducts();
      setProduct('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Producto</h2>
      <input 
        type="text" 
        value={product} 
        onChange={(e) => setProduct(e.target.value)} 
        placeholder="Nombre del producto" 
        required 
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddProduct;
