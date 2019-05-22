require('dotenv').config();
var AWS = require("aws-sdk");

environment = process.env.environment;
console.log('Env: ' + environment);

if (environment == 'local') {
    AWS.config.update({
        endpoint: 'http://localhost:8000',
        region: 'local',
        accessKeyId: 'local',
        secretAccessKey: 'local',
    });
} else if (environment == 'dev') {
    AWS.config.update({
        region: process.env.region,
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
    });
}

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CarStorage";

var params = {
    TableName: table,
    Item: {
        "id": 3,
        "type": "Automatic/Manual",
        "name": "Maserati",
        "manufacturer": "Fiat Chrysler Automobiles",
        "fuel_type": "Petrol",
        "description": "Daydream"
    }
};

console.log("Adding a new item...");
docClient.put(params, function (err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", params.Item.name);
    }
});