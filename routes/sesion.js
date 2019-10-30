var express = require('express');
var app = express();

var Sesion = require('../models/sesion');

app.get('/:id', (req, res)=>{

    var id = req.params.id;

    Sesion.find({idUsuario: id}).exec((error, data)=>{
        if(error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            sesiones: data
        })
    })

})

app.post('/', (req, res)=>{
    var body = req.body;
    if (body.login) {
        var sesion = new Sesion({
            idUsuario: body.idUsuario,
            login: body.login
        })
    }
    if (body.logout) {
        var sesion = new Sesion({
            idUsuario: body.idUsuario,
            logout: body.logout
        })
    }

    sesion.save((error, data)=>{
        if(error) {
            return res.status(400).json({
               error: error 
            })
        }

        res.status(200).json({
          mensaje: 'Sesión creada'  
        })
    })

})

module.exports = app;