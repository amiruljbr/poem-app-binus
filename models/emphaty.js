'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Emphaty extends Model {

  }

  Emphaty.init({
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

  //Emphaty.associate = function(models) {
    // associations can be defined here
    //Emphaty.belongsTo(models.User)
  //};

  Emphaty.associate = function(models) {
    //associations can be defined here
    //Like.belongsTo(models.Poem)
    //Like.hasOne(models.Like, { sourceKey: 'PoemId', foreignKey: 'id' })
    Emphaty.belongsTo(models.User)
    Emphaty.belongsTo(models.Poem)
  };

  //Todo.addHook('beforeCreate', (todo, options) => {
  //  todo.status = 'uncompleted'
  //});

  return Emphaty;
};