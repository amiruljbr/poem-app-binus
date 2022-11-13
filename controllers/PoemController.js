const {Poem, Feeling, Like, Emphaty, User, Comment } = require('../models');
const sequelize = require('sequelize')

class PoemController {
  static getAllPoem(req,res,next){
    //console.log(req.query);
    Poem.findAll({
      order: [
        ['createdAt']
      ],
      include: [User, Feeling, {model: Comment, include: [User]}, {model: Emphaty, include: [User]}, {model: Like, include: [User]}]
      //include: [{model: Like, include: [User]}]
    })
    .then(data=>{
      // console.log(data)
      const newData = data.map((el,idx)=>{
        // console.log(el,idx)
        el.dataValues['countLike']=el.Likes.length
        el.dataValues['countEmphaty']=el.Emphaties.length
        el.dataValues['countComment']=el.Comments.length
        return el
      })
      // console.log(JSON.parse(newData))
      //console.log(newData)
      res.status(200).json(newData)
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


  static addLike(req,res,next){
    let newLike = {
      PoemId:req.params.id,
      UserId:req.userData.id
    }

    Like.create(newLike)
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static addEmphaty(req,res,next){
    let newLike = {
      PoemId:req.params.id,
      UserId:req.userData.id
    }

    Emphaty.create(newLike)
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static addComment(req,res,next){
    let newLike = {
      PoemId:req.params.id,
      UserId:req.userData.id,
      description:req.body.description
    }

    Comment.create(newLike)
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