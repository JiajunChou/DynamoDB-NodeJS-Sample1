var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
  });
  
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CarStorage";

var params = {
    TableName:table,
    Key:{
        "id": 6
    }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", params.Key);
    }
});