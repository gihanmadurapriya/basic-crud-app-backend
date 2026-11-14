import express from 'express'
import { Router } from 'express';
//import Product from '../models/product.model.js';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);

export default router;
