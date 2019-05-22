var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

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