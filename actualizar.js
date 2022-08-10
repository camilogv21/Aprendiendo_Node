var axios = require('axios');
var data = JSON.stringify({
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "filter":{"_id": { "$oid": "62f3acb846d358371b30eab8"}},
    "update": {
        "$set":{
            "nombre":"Ryan Castro"
        }
      }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bgzxj/endpoint/data/v1/action/updateOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'gk2zQIpkQ5XCs7WrRqWKBWOzYeK0tOfi9EqvI0LYJUm78UiFSyOYFZe6aAiVHIRb',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    }); 