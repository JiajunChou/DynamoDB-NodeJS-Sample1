require('dotenv').config();
var AWS = require("aws-sdk");

let environment = 'local';

if (process.argv[2] !== undefined) {
    environment = process.argv[2];
}

AWS.config.update({
    endpoint: 'http://localhost:8000',
    region: 'local',
    accessKeyId: 'local',
    secretAccessKey: 'local',
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CarStorage";

var params = {
    TableName: table,
    Key: {
        id: 1
    }
};

docClient.get(params, function (err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});