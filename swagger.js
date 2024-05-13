const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        // name of your api
        title: 'Backend Node.js API',
        description: 'Esta es una API en node.js'
    },
    host: 'localhost:3000'
}

// Se generará un nuevo archivo con la documentación
const outputFile = './swagger-output.json'
const routes = ['./index.js']

// Se general la documentación
swaggerAutogen(outputFile, routes, doc)