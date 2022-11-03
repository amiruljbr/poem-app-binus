'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Feeling extends Model {

  }

  Feeling.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'please fill the fill name'
        }
      }
    },
    image: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'please fill the link image'
        }
      }
    },
    bg_color: DataTypes.STRING,
  }, {sequelize});

  //Todo.associate = function(models) {
    // associations can be defined here
    //Todo.belongsTo(models.User)
  //};

  //Todo.addHook('beforeCreate', (todo, options) => {
    //todo.status = 'uncompleted'
  //});

  return Feeling;
};