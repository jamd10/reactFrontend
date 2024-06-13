import React from 'react';

const ListProducts = ({ products }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
