var AWS = require("aws-sdk");
var express = require('express');


var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource of Dynamodb, Hey DynamoDB is good');
});

// Get method: params
router.get('/readCar/:id', function (req, res) {

    var paramId = parseInt(req.params.id);

    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "CarStorage";

    var params = {
        TableName: table,
        Key: {
            id: paramId
        }
    };

    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(JSON.stringify(data, null, 2));
        }
    });
});

// Get method: scan
router.get('/readCar', function (req, res) {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: 'CarStorage',
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(JSON.stringify(data, null, 2));
        }
    });
});

// post method
router.post('/addCar', function (req, res) {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "CarStorage";

    var params = {
        TableName: table,
        Item: {
            "id": parseInt(req.body.id),
            "type": req.body.type,
            "name": req.body.name,
            "manufacturer": req.body.manufacturer,
            "fuel_type": req.body.fuel_type,
            "description": req.body.description
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", params.Item.name);
            res.end();
        }
    });
});

router.post('/deleteCar', function (req, res) {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "CarStorage";

    var params = {
        TableName: table,
        Key: {
            "id": parseInt(req.body.id)
        }
    };

    console.log("Delete a item...");
    docClient.delete(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Delete item:", params.Key.id);
            res.end();
        }
    });
});

module.exports = router;
