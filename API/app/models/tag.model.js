module.exports = (sequelize, Sequelize) => {
    const Tags = sequelize.define("tags", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nom: {
        type: Sequelize.STRING
      }
    });
  
    return Tags;
  };
