module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tags", {
      Nom: {
        type: Sequelize.STRING
      }
    });
  
    return Tag;
  };
