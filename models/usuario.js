var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: { type: String, index: true, unique: true},
    password: String,
    rol: String
})

UsuarioSchema.plugin(uniqueValidator, {message: 'El correo electrónico ya está en uso'});

module.exports = mongoose.model('Usuario', UsuarioSchema);