const express = require('express');
const router = express.Router();
const Product = require('../models/Products');



router.get('/', async (req, res) => {
    try {
      const Products = await Product.find().lean().exec();
  
      res.status(200).json({
        Products
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
        const ProductId = req.params.id;
    
        const ProductDoc = await Product.findOne({ _id: ProductId });
    
        if (!ProductDoc) {
          res.status(404).json({
            message: `Cannot find Product with the id: ${ProductId}.`
          });
        }
    
        res.status(200).json({
          Product: ProductDoc
        });
      } catch (error) {
        res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
  });
  
  router.post('/create', async (req, res) => {
    try{
        const Products = await Product.create(req.body);
        return res.status(200).send(Products);
     }catch(err){
         return res.statusCode(400).send({message: err.message});
     }
})

router.patch("/:id/edit", async (req, res) => {

  try{
      const Products = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new : true
      })
      return res.status(200).send(Products);
  }
  catch(err){
      return res.status(400).send({message : err.message})
  }

});
  module.exports = router;