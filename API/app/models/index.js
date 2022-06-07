const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD, {
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
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.facture = require("./entreprise/facture/facture.model")(sequelize, Sequelize);
db.entreprise = require("./entreprise/entreprise.model")(sequelize, Sequelize);
db.utilisateur = require("./utilisateur/utilisateur.model")(sequelize, Sequelize);
db.statusUtilisateur = require("./utilisateur/status/statusUtilisateur.model")(sequelize, Sequelize);
db.propositionLieu = require("./utilisateur/proposition/proposition.model")(sequelize, Sequelize);
db.statusLieu = require("./lieu/status/statusLieu.model")(sequelize, Sequelize);
db.tag = require("./lieu/tag/tag.model")(sequelize, Sequelize);
db.lieu = require("./lieu/lieu.model")(sequelize, Sequelize);
db.jour = require("./lieu/crenaux/jour.model")(sequelize, Sequelize);
db.creneaux = require("./lieu/crenaux/crenaux.model")(sequelize, Sequelize);


//#region  Association
  //#region PropositionLieu <-> Tag
  db.propositionLieu.belongsToMany(db.tag, {
    through: "proposition_tags",
    foreignKey: "propositionLieuID",
    otherKey: "tagID"
  });
  db.tag.belongsToMany(db.propositionLieu, {
    through: "proposition_tags",
    foreignKey: "tagID",
    otherKey: "propositionLieuID"
  });
  //#endregion
  //#region Lieu <-> Tag
  db.lieu.belongsToMany(db.tag, {
    through: "proposition_tags",
    foreignKey: "lieuID",
    otherKey: "tagID"
  });
  db.tag.belongsToMany(db.lieu, {
    through: "proposition_tags",
    foreignKey: "tagID",
    otherKey: "lieuID"
  });
  //#endregion
  //#region Utilisateur <-> Lieu  "Visiter"
  db.utilisateur.belongsToMany(db.lieu, {
    through: "utilisateur_visiter_lieu",
    foreignKey: "utilisateursID",
    otherKey: "lieuxID"
  });
  db.lieu.belongsToMany(db.utilisateur, {
    through: "utilisateur_visiter_lieu",
    foreignKey: "lieuxID",
    otherKey: "utilisateursID"
  });
  //#endregion
  //#region Utilisateur <-> Lieu  "Suggestion"
  db.utilisateur.belongsToMany(db.lieu, {
    through: "utilisateur_suggestion_lieu",
    foreignKey: "utilisateursID",
    otherKey: "lieuxId"
  });
  db.lieu.belongsToMany(db.utilisateur, {
    through: "utilisateur_suggestion_lieu",
    foreignKey: "lieuxID",
    otherKey: "utilisateursId"
  });
  //#endregion
  //#region Lieu <-> Jour
  db.lieu.belongsToMany(db.jour, {
    through: "lieu_jour",
    foreignKey: "lieuID",
    otherKey: "jourID"
  });
  db.jour.belongsToMany(db.lieu, {
    through: "lieu_jour",
    foreignKey: "jourID",
    otherKey: "lieuID"
  });
  //#endregion
  //#region Jour <-> Crénaux
  db.jour.belongsToMany(db.creneaux, {
    through: "jour_crenaux",
    foreignKey: "jourID",
    otherKey: "creneauxID"
  });
  db.creneaux.belongsToMany(db.jour, {
    through: "jour_crenaux",
    foreignKey: "creneauxID",
    otherKey: "jourID"
  });
  //#endregion




  //#region Entreprise -> facture
  db.entreprise.hasMany(db.facture, {
      as: "factures"
  });
  db.facture.belongsTo( db.entreprise,{
      foreignKey: "entreprisesID",
      as: "entreprises"
  })
  //#endregion
  //#region StatusUtilisateur -> Utilisateur
  db.statusUtilisateur.hasMany(db.utilisateur, {
    as: "utilisateurs"
  });
  db.facture.belongsTo( db.statusUtilisateur,{
      foreignKey: "statusUtilisateursID",
      as: "statusUtilisateurs"
  })
  //#endregion
  //#region Entreprise -> Utilisateur
  db.entreprise.hasMany(db.utilisateur, {
    as: "utilisateurs"
  });
  db.utilisateur.belongsTo( db.entreprise,{
      foreignKey: "entreprisesID",
      as: "entreprises"
  })
  //#endregion
  //#region Utilisateur -> PropositionLieu
  db.utilisateur.hasMany(db.propositionLieu, {
    as: "propositionLieux"
  });
  db.propositionLieu.belongsTo( db.utilisateur,{
      foreignKey: "utilisateursID",
      as: "utilisateurs"
  })
  //#endregion
  //#region StatusLieu -> PropositionLieu
  db.statusLieu.hasMany(db.propositionLieu, {
    as: "propositionLieux"
  });
  db.propositionLieu.belongsTo( db.statusLieu,{
      foreignKey: "statusLieuID",
      as: "statusLieux"
  })
  //#endregion
  //#region Entreprise -> Lieu
  db.entreprise.hasMany(db.lieu, {
    as: "lieux"
  });
  db.propositionLieu.belongsTo( db.entreprise,{
      foreignKey: "entreprisesID",
      as: "entreprises"
  })
  //#endregion
//#endregion

module.exports = db;
