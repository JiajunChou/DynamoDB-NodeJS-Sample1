var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var dynamodb = new AWS.DynamoDB();

var params = {

    TableName: "CarStorage",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"} //Patition key
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function(err, data) {

    if(err) {
        console.log("Unable to create Table: CarStorage. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created Table: CarStorage. Table description JSON:", JSON.stringify(data, null, 2));
    }
});