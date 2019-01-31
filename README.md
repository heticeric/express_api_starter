# Express API starter kit
Kit de démarrage d'un serveur d'API comportant Express, Mongo, Mongoose 

# Tests

curl -H 'content-type: application/json' -v -X GET http://localhost:3000/student 

curl -H 'content-type: application/json' -v -X GET http://localhost:3000/student/:id

curl -H 'content-type: application/json' -v -X POST -d '{"firstName":"Eric","lastName":"Priou"}' http://localhost:3000/student

curl -H 'content-type: application/json' -v -X PUT -d '{"firstName":"cirE","lastName":"uoirP"}}' http://localhost:3000/student/:id

curl -H 'content-type: application/json' -v -X DELETE http://localhost:3000/student/:id
