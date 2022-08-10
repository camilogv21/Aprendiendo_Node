var axios = require('axios');
var data = JSON.stringify({
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "document": {
        "cedula": 321654987,
        "nombre": "carlos",
        "edad": 20,
        "promedio":[4.6,3.5],
        "proyecto_formativo":{"nombre_proyecto":"barberiacaicedo","descripcion":"software para una barberia em barrio caicedo","porcentaje_avance":90},
        "promedio_acumulado":4
      }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bgzxj/endpoint/data/v1/action/insertOne',
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
