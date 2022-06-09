module.exports = app => {
    const Tags = require("../controllers/tag.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tags
    router.post("/POST", Tags.create);
    //#region POST
    // {
    //     "nom": "..."
    // }
    //#endregion

    // Retrieve all Tags
    router.get("/GETALL", Tags.findAll);
  
    app.use('/api/tags', router);
  };