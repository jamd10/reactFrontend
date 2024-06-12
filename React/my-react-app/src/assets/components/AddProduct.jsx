import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
    const [product, setProduct] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct('');
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
