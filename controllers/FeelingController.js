const {Feeling} = require('../models');

class FeelingController {
  static getAllFeeling(req,res,next){
    console.log(req.query);
    Feeling.findAll()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }
}

module.exports = FeelingController;