var axios = require('axios');
var data = JSON.stringify({
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "filter": {},
    "projection":{
        "_id":0
    },
    "limit":10
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bgzxj/endpoint/data/v1/action/find',
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
