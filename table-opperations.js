// initialize sdk
const AWS = require("aws-sdk");
// config region
AWS.config.update({region: 'eu-west-2'});

// To do Find out how to list tables from all regions

// instantiate dynamoDb API
const dynamodb = new AWS.DynamoDB();

// this scenario will output a list of <= 10 dynamoDb tables that begin with 'blah'
// and will provide the LastEvaluatedTableName
var params = {
  ExclusiveStartTableName: 'blah',
  Limit: '10'
};
dynamodb.listTables(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});