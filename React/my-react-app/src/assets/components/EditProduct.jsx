import React, { useState } from 'react';

const EditProduct = ({ products, editProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [newProduct, setNewProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(selectedProduct, newProduct);
    setSelectedProduct('');
    setNewProduct('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modificar Producto</h2>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
        <option value="">Selecciona un producto</option>
        {products.map((product, index) => (
          <option key={index} value={product}>{product}</option>
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
