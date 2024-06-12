import { useState } from 'react';
import './App.css';
import AddProduct from './assets/components/AddProduct';
import EditProduct from './assets/components/EditProduct';
import DeleteProduct from './assets/components/DeleteProduct';
import ListProducts from './assets/components/ListProducts';

function App() {
  const [section, setSection] = useState('home');
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (oldProduct, newProduct) => {
    setProducts(products.map(product => product === oldProduct ? newProduct : product));
  };

  const deleteProduct = (productToDelete) => {
    setProducts(products.filter(product => product !== productToDelete));
  };

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
            <AddProduct addProduct={addProduct} />
          </section>
        )}
        {section === 'edit-product' && (
          <section id="edit-product">
            <EditProduct products={products} editProduct={editProduct} />
          </section>
        )}
        {section === 'delete-product' && (
          <section id="delete-product">
            <DeleteProduct products={products} deleteProduct={deleteProduct} />
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
