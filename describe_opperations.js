const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const docClient = new AWS.DynamoDB;

async function describeTable() {
    const params = {
        TableName: 'weatherstation_test',
    };

    let response;
    try {
        response = await docClient.describeTable(params).promise()
        // .then(result => result);
        // console.log(response); // Logs the response data
    } catch (e) {
        console.error(e)
        throw e;
    }
    return response;
}

// console.log(describeTable().then(result => result));



async function blas() {
    return a = await describeTable();
}

blas().then(result => console.log(result));