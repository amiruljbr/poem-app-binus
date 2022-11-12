'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Poem extends Model {

  }

  Poem.init({
    title: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'please fill the title'
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'please fill the description'
        }
      }
    },
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    FeelingId: DataTypes.INTEGER
  }, {sequelize});

  Poem.associate = function(models) {
    // associations can be defined here
    Poem.belongsTo(models.User)
    Poem.belongsTo(models.Feeling)
    //Poem.belongsToMany(models.User, { through: 'Likes' });
    //Poem.belongsToMany(models.User, { through: 'Emphaty' });
  };



  //Todo.addHook('beforeCreate', (todo, options) => {
  //  todo.status = 'uncompleted'
  //});

  return Poem;
};