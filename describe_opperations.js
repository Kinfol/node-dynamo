const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const docClient = new AWS.DynamoDB;

async function describeTable() {
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

describeTable().then(result => console.log(JSON.stringify(result, null, 2)));