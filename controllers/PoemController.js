const {Poem, Feeling, Like, Emphaty, User } = require('../models');

class PoemController {
  static getAllPoem(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ],
      include: [User,Feeling]
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static getFeelingPoem(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ]
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static getAllPoemPopular(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ]
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static like(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ]
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static emphaty(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ]
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static added(req,res,next){
    let newPoem = {
      title:req.body.title,
      description:req.body.description,
      status:'active',
      UserId:req.userData.id,
      FeelingId:req.body.FeelingId
    }

    Poem.create(newPoem)
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static delete(req,res,next){
    Poem.destroy({where:{
      id:req.params.id
    }})
    .then(data=>{
      res.status(200).json({message:`Poem with id:${req.params.id} has been deleted`})
    })
    .catch(err=>{
      next(err)
    })
  }

  static edit(req,res,next){
    console.log(req.query);
    Poem.findOne({
      where:{
        id:req.params.id
      }
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static editPost(req,res,next){
    let dataPoem = {
      id:req.params.id,
      title:req.body.title,
      description:req.body.description,
      status: 'active',
      UserId:req.userData.id
    }

    Poem.update({
      title:dataPoem.title,
      description:dataPoem.description,
    }, {
      where: {
        id: dataPoem.id
      }
    })
    .then(data=>{
      res.status(200).json({message:`Poem with id:${dataPoem.id} has been updated`})
    })
    .catch(err=>{
      next(err);
    })
  }
}

module.exports = PoemController;