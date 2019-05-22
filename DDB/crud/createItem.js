var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CarStorage";

var params = {
    TableName:table,
    Item:{
        "id": 3,
        "type": "Automatic/Manual",
        "name": "Maserati",
        "manufacturer": "Fiat Chrysler Automobiles",
        "fuel_type": "Petrol",
        "description": "Daydream"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", params.Item.name);
    }
});