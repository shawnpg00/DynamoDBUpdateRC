var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var DOC = require("dynamodb-doc");
var uuid = require('node-uuid');
var http = require('http');
'use strict';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contextmenu', { title: 'Menu Test' });
});


router.post('/', function (req, res) {
    console.log("posting");
    AWS.config.update({
        region: "us-east-1",
        endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });

    var docClient = new AWS.DynamoDB.DocumentClient();

//var docClient = new AWS.DynamoDB.DocumentClient();

  /*var params = {
   TableName : 'NPE_Details',
   FilterExpression : 'Active = :Active',
   ExpressionAttributeValues : {':Active' : false}
   };

   var DataList;
   docClient.scan(params, function(err, data) {
   if (err) console.log(err);
   else{
   DataList = data;
   console.log(DataList);
   }
   });*/

    var params = {
        TableName:'NPE_Details',
        Item:{
            "id":  uuid.v1(),
            "NPE_ID": req.body.NPE_ID,
            "Location":'some location',
            "expiration": req.body.expiration,
            "Active": req.body.active
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
    res.render('contextmenu', { title: 'Menu Test' });
});


module.exports = router;
