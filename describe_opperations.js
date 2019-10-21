// What do I need??

// SDK
const AWS = require('aws-sdk');

//region
AWS.config.update({region: 'eu-west-2'});

// dynamo object
const docClient = new AWS.DynamoDB;



// ToDo:
// Use async

// const params = {
//         TableName: 'weatherstation_test',
//       };

// docClient.describeTable(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(JSON.stringify(data, null, 2));           // successful response
// });

async function blah() {
    const params = {
    TableName: 'weatherstation_test',
  };
  let queryResult;
        try {
            queryResult = docClient.describeTable(params).promise();
            
        } catch (error) {
            throw error;
        }
        return {
            results: queryResult,
        };
};


console.log(blah())





// async function blag() {
//     return await queryPostcodeIndex();
// }
// const rs = blag();
// console.log(rs);