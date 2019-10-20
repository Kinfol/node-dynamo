// What do I need??

// SDK
const AWS = require('aws-sdk');

//region
AWS.config.update({region: 'eu-west-2'});

// dynamo object
const dynamodb = new AWS.DynamoDB;

dynamodb.describeTable(
    { TableName: 'weatherstation_data'},
    (err, data) => {
        if(err) {
            console.log(err);
        } else {
            // the third argument '2' is to prity print the output
            console.log(JSON.stringify(data, null, 2));
        }
})

