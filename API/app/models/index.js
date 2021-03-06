const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD,
   {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Lieux = require("./lieu.model.js")(sequelize, Sequelize);
db.Tags = require("./tag.model")(sequelize, Sequelize);

//#region Lieu <-> Tag
db.Lieux.belongsToMany(db.Tags, {
  through: "lieu_tags",
  foreignKey: "lieuId"
});
db.Tags.belongsToMany(db.Lieux, {
  through: "lieu_tags",
  foreignKey: "tagId"
});
//#endregion

module.exports = db;
