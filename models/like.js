'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Like extends Model {

  }

  Like.init({
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
  }, {sequelize});

  Like.associate = function(models) {
    //associations can be defined here
    Like.belongsTo(models.User)
    Like.belongsTo(models.Poem)
  };

  //Todo.addHook('beforeCreate', (todo, options) => {
  //  todo.status = 'uncompleted'
  //});

  return Like;
};