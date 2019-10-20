var AWS = require("aws-sdk");

AWS.config.update({
    region : "eu-west-2"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "blah"
};

var paramsWaitFor = {
    TableName : 'blah' /* required */
};

function waitForTableNotExists() {
    dynamodb.waitFor('tableNotExists', paramsWaitFor, function(waitForErr,
            waitForData) {
        if (waitForErr) {
            console.log(waitForErr, waitForErr.stack); // an error occurred
        } else {
            console.log('Deleted ====>', JSON.stringify(waitForData, null, 2));
        }

    });

}

dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(
                err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(
            data, null, 2));
    waitForTableNotExists();
}
});