const express = require("express");
const path = require("path");

class ApiRest {
    constructor(appExpress, connection) {
      this.appExpress = appExpress;
      this.connection = connection;
      this.configPublicFiles();
      this.addRoutes();
    }
    configPublicFiles(){
        this.appExpress.use(express.static(path.join(__dirname, '../..', 'public')));
    }
    addRoutes(){
      this.appExpress.get('/nfts',( req, res)=>{
        res.json(this.connection.getDataPlant());
      });
      this.appExpress.get('/update_data',( req, res)=>{
        this.connection.updateData();
        res.json({ "status": "update start" });
      });
    }
  }
  
  module.exports = ApiRest;
