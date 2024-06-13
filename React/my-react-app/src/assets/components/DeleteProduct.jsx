import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = ({ products, fetchProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/products/${selectedProduct}`);
      fetchProducts(); // Actualiza la lista de productos después de eliminar
      setSelectedProduct('');
      setError(''); // Limpiar el mensaje de error si la eliminación fue exitosa
      console.log('Producto eliminado:', response.data);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      setError(JSON.stringify(error, null, 2)); // Mostrar el error específico
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Eliminar Producto</h2>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
        <option value="">Selecciona un producto</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>{product.name}</option>
        ))}
      </select>
      <button type="submit">Eliminar</button>
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
    </form>
  );
};

export default DeleteProduct;
