import React, { useState } from 'react';

const DeleteProduct = ({ products, deleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteProduct(selectedProduct);
    setSelectedProduct('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Eliminar Producto</h2>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
        <option value="">Selecciona un producto</option>
        {products.map((product, index) => (
          <option key={index} value={product}>{product}</option>
        ))}
      </select>
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default DeleteProduct;
