module.exports = app => {
    const Lieux = require("../controllers/lieu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/POST", Lieux.create);
    //#region POST
    // {
    //     "nom": "MDS",
    //     "url": "https://MDS.fr",
    //     "numeroTelephone": "06.65.75.12.12"
    // }
    //#endregion

    router.post("/POSTWithTag", Lieux.createWithTags);
    //#region 
    // {
    //     "nom": "Chez Kub",
    //     "url": "http://chezkub.fr",
    //     "numeroTelephone": "02 99 31 19 31",
    //     "tag": 1
    // }
    //#endregion
    
    // Retrieve all Lieux
    router.get("/GETALL", Lieux.findAll);
  
    app.use('/api/lieux', router);
  };