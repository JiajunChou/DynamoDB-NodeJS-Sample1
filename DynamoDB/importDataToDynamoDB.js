var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing CarInfo into DynamoDB. Please wait.");

var cars = JSON.parse(fs.readFileSync('carData.json', 'utf8'));
console.log(cars);
cars.forEach(function(car) {
    var params = {
        TableName: "CarStorage",
        Item: {
            "id": car.id,
            "type":  car.type,
            "name": car.name,
            "manufacturer":  car.manufacturer,
            "fuel_type": car.Petrol,
            "description":car.description
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add cars", car.name, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", car.name);
       }
    });
});