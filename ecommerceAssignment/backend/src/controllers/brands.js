const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');



router.get('/', async (req, res) => {
    try {
      const brands = await Brand.find().lean().exec();
  
      res.status(200).json({
        brands
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
        const brandId = req.params.id;
    
        const brandDoc = await Brand.findOne({ _id: brandId });
    
        if (!brandDoc) {
          res.status(404).json({
            message: `Cannot find brand with the id: ${brandId}.`
          });
        }
    
        res.status(200).json({
          brand: brandDoc
        });
      } catch (error) {
        res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
  });
  
  router.post('/create', async (req, res) => {
    try{
        const brands = await Brand.create(req.body);
        return res.status(200).send(brands);
     }catch(err){
         return res.statusCode(400).send({message: err.message});
     }
})

router.patch("/:id/edit", async (req, res) => {

  try{
      const brands = await Brand.findByIdAndUpdate(req.params.id, req.body, {
          new : true
      })
      return res.status(200).send(brands);
  }
  catch(err){
      return res.status(400).send({message : err.message})
  }

});
  module.exports = router;