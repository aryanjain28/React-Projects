const express = require('express');
const route = express.Router();
const redis = require('redis');
const client = redis.createClient({
    no_ready_check: true,
    auth_pass: 'Aryan@123'
});

route.get('/', (request, response) => {
    console.log("Get");

    var noteID = request.query.noteID;
    client.get(noteID, (err, reply) => {
        if (err) throw err;
        var data = JSON.parse(reply);
        console.log(data);
        response.status(200).json({
            data: data
        });
    })
});

route.post('/', (request, response) => {
    console.log("Post");
    console.log(request.body);

    client.set(request.body.noteID, JSON.stringify(request.body.data), (err, reply) => {
        if (err) throw err;
        response.status(200).json({
            success: true
        })
    });
});

route.get('/count', (request, response) => {
    console.log(request.query);
    client.get('count', (err, reply) => {
        if (err) throw err;
        response.json({
            count: reply
        });
    })
});

route.post('/count', (request, response) => {
    var count = request.body.count;
    client.set('count', count, (err, reply) => {
        if (err) throw err;
        response.json({
            count: count
        });
    });
});

module.exports = route;