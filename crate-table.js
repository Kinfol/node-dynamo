const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const docClient = new AWS.DynamoDB;
const params = {
    TableName: "td_notes_sdk",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}

async function createTable() {
    let response;
    try {
        response = await docClient.createTable(params).promise();
        
    } catch (e) {
        
        throw e;
    }
    return response;
}

async function blas() {
    const a = await createTable();
    console.log('a')
    console.log(JSON.stringify(a, null ,2));
}
blas();

