var express = require('express');
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
  });

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cars', function(req, res, next) {
    res.send('Hello Dynamodb will coming soon!');
});

// Get method: params
router.get('/readCar/:id', function(req, res) {

    var paramId = parseInt(req.params.id);

    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "CarStorage";

    var params = {
        TableName: table,
        Key:{
            id: paramId
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(JSON.stringify(data, null, 2));
        }
    });
});

// Get method: query
router.get('/readCar', function(req, res) {

    var paramId = parseInt(req.query.id);

    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "CarStorage";

    var params = {
        TableName: table,
        Key:{
            id: paramId
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(JSON.stringify(data, null, 2));
        }
    });
});



module.exports = router;
