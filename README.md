# DynamoDB-NodeJS-Sample1

Use DyanmoDB by NodeJS

## Run

```bash
git clone 
npm install
npm start
```

## Build Process History

### Project Init

1. Start NodeJs Project
  a. `express`
  b. `npm install`: install dependence
  c. `npm i nodemon --save`
1. AWS setting for dynamoDB
  a. `npm i aws-sdk --save`
  b. `npm i fs --save`
  c. `aws configure`

### DynamoDB init

1. DynamoDB create Table: CarStorage
  a. `aws dynamodb list-tables`: check table in the aws console
  b. Add files: createCatsTalbe.js
  c. `node createCarsTable.js`: create table request to aws console
  d. check aws console
1. DynamoDB import Car data json into CarStorage
  a. Add files: carData.json
  b. Add files: importDataToDynamoDB.js
  c. `node importDataToDynamoDB.js`
  d. check aws console
1. Dynamodb(C) add New Car into CarStorage
  a. Add files: createItem.js
  b. `node crud/createItem.js`
  c. Check aws console
1. Dyanmodb(U) update Car description
  a. Add files: updateItem.js
  b. `node crud/updataItem.js`
  c. check aws console
1. Dynamodb(R) read Car Data
  a. Add files: readItem.js
  b. `node crud/readItem.js`
  c. check termainal console
1. Dynamodb(D) delete Car data
  a. Add files: deleteItem.js
  b. `node crud/deleteItem.js`
  c. check aws console

REF: [ITPM 鐵人賽](https://ithelp.ithome.com.tw/articles/10195339)

### Carry Data to NodeJs API

1. Control API port
1. Test Users Routes for /cars
1. GET API: `http://localhost:3000/users/readCar`
  i. Modify routes/users.js
  ii. req.params
  iii. req.query
1. Add params for routes

## Node.js Port 3000 already in use but it actually isn't?

```bash
netstat -ano | findstr :3000
tskill typeyourPIDhere
```

REF: [Node.js Port 3000 already in use](https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt)

## local aws dynamodb console

- http://localhost:8000/shell/

REF: [Example](https://docs.aws.amazon.com/zh_tw/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)