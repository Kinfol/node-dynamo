// initialize sdk
const AWS = require("aws-sdk");
// config region
AWS.config.update({region: 'eu-west-3'});

// To do Find out how to list tables from all regions

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data)
    }
});