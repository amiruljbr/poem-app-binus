'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Comment extends Model {

  }

  Comment.init({
    UserId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty:{
          msg: 'please fill'
        }
      }
    },
    PoemId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty:{
          msg: 'please fill'
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'please fill'
        }
      }
    },
  }, {sequelize});

  Comment.associate = function(models) {
    //associations can be defined here
    //Like.belongsTo(models.Poem)
    //Like.hasOne(models.Like, { sourceKey: 'PoemId', foreignKey: 'id' })
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Poem)
  };

  //Todo.addHook('beforeCreate', (todo, options) => {
  //  todo.status = 'uncompleted'
  //});

  return Comment;
};