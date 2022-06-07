const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.get('/', async (req, res) => {
    try {
      const Users = await User.find().lean().exec();
  
      res.status(200).json({
        Users
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
        const UserId = req.params.id;
    
        const UserDoc = await User.findOne({ _id: UserId });
    
        if (!UserDoc) {
          res.status(404).json({
            message: `Cannot find User with the id: ${UserId}.`
          });
        }
    
        res.status(200).json({
          User: UserDoc
        });
      } catch (error) {
        res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
  });
  
  router.post('/create', async (req, res) => {
    try{
        const Users = await User.create(req.body);
        return res.status(200).send(Users);
     }catch(err){
         return res.status(400).send({message: err.message});
     }
})

router.patch("/:id/edit", async (req, res) => {

  try{
      const Users = await User.findByIdAndUpdate(req.params.id, req.body, {
          new : true
      })
      return res.status(200).send(Users);
  }
  catch(err){
      return res.status(400).send({message : err.message})
  }

});
  module.exports = router;