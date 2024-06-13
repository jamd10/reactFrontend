import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AddProduct from './assets/components/AddProduct';
import EditProduct from './assets/components/EditProduct';
import DeleteProduct from './assets/components/DeleteProduct';
import ListProducts from './assets/components/ListProducts';

function App() {
  const [section, setSection] = useState('home');
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <header>
        <h1>Bienvenido a la gestión de productos</h1>
        <nav>
          <button onClick={() => setSection('home')}>Home</button>
          <button onClick={() => setSection('add-product')}>Añadir Producto</button>
          <button onClick={() => setSection('edit-product')}>Modificar Producto</button>
          <button onClick={() => setSection('delete-product')}>Eliminar Producto</button>
          <button onClick={() => setSection('list-products')}>Listar Productos</button>
        </nav>
      </header>
      <main>
        {section === 'home' && (
          <div>
            <p>Selecciona una opción del menú para empezar.</p>
          </div>
        )}
        {section === 'add-product' && (
          <section id="add-product">
            <AddProduct fetchProducts={fetchProducts} />
          </section>
        )}
        {section === 'edit-product' && (
          <section id="edit-product">
            <EditProduct products={products} fetchProducts={fetchProducts} />
          </section>
        )}
        {section === 'delete-product' && (
          <section id="delete-product">
            <DeleteProduct products={products} fetchProducts={fetchProducts} />
          </section>
        )}
        {section === 'list-products' && (
          <section id="list-products">
            <ListProducts products={products} />
          </section>
        )}
      </main>
    </>
  );
}

export default App;
