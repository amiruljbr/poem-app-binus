const {Notification} = require('../models');

class NotificationController {
  static getAllNotification(req,res,next){
    console.log(req.query);
    Notification.findAll({
      where:{
        UserId:req.userData.id
      },
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
    let newNotification = {
      
      UserId:req.body.userid,
      PoemId:req.body.poemId,
      notifType:req.body.notifType,
    }

    Notification.create(newNotification)
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err);
    })
  }

  static delete(req,res,next){
    Notification.destroy({where:{
      id:req.params.id
    }})
    .then(data=>{
      res.status(200).json({message:`Notification with id:${req.params.id} has been deleted`})
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = NotificationController;