const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const docClient = new AWS.DynamoDB;

async function listTableFunction() {
let response;
try {
    response = await docClient.listTables({}).promise()
} catch (e) {
    throw e;
}
return response;
}
async function blas() {
    const a = await listTableFunction();
    console.log(JSON.stringify(a, null ,2));
}
blas();