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
    Key: {
        "id": 1
    },
    UpdateExpression: "set description = :n",
    ExpressionAttributeValues: {
        ":n": "bumbobee"
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", params.id);
    }
});