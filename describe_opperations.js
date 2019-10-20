// What do I need??

// SDK
const AWS = require('aws-sdk');

//region
AWS.config.update({region: 'eu-west-2'});

// dynamo object
const dynamodb = new AWS.DynamoDB;

var params = {
    TableName: 'weatherstation_data',
  };

dynamodb.describeTable(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(JSON.stringify(data, null, 2));           // successful response
});

