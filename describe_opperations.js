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


// using another function to call the async function
async function blas() {
    const a = await describeTable();
    console.log('a');
    console.log(a);
}

blas();