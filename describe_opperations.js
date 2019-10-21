const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const docClient = new AWS.DynamoDB;

async function describeTableFunction() {
const params = {
    TableName: 'td_notes_sdk',
};
let response;
try {
    response = await docClient.describeTable(params).promise()
} catch (e) {
    throw e;
}
return response;
}

async function blas() {
    const a = await describeTableFunction();
    console.log(JSON.stringify(a, null ,2));
}
blas();
