'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Notification extends Model {

  }

  Notification.init({
    UserId: DataTypes.INTEGER,
    PoemId: DataTypes.INTEGER,
    notifType: DataTypes.INTEGER
  }, {sequelize});

  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo(models.User)
    Notification.belongsTo(models.Poem)
  };

  return Notification;
};