const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Listar productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error al listar productos:', err);
    res.status(500).json({ message: err.message });
  }
});

// Añadir producto
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error al añadir producto:', err);
    res.status(400).json({ message: err.message });
  }
});

// Modificar producto
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    if (req.body.name != null) {
      product.name = req.body.name;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    console.error('Error al modificar producto:', err);
    res.status(400).json({ message: err.message });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    console.log(`Attempting to delete product with id: ${req.params.id}`);
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    res.json({ message: 'Producto eliminado', product });
  } catch (err) {
    console.error('Error al eliminar producto:', err.message);
    console.error('Stack trace:', err.stack);
    res.status(500).json({ message: err.message, stack: err.stack });
  }
});

module.exports = router;
