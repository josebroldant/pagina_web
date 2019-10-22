var net = require('net');//libreria net
var express = require('express');//libreria express
app = express();//metodo constructor de express, express as framework to use http easily
bodyParser = require("body-parser");
methodOverride = require("method-override");
mongodb = require('mongodb');
var timeout = require('connect-timeout');
var session = require('express-session');
var timeoutID;

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var users = ['nickname']
var userspass = ['pass']

/*app.get('/home1', function(req,res){
    var usuario = req.query.user;
    var contra  = req.query.pass;
    if((req.query.user == usuario) && (req.query.pass == contra)){
        res.sendfile(__dirname + '/public/index2.html');
    }
    else{
        res.sendfile(__dirname + '/public/formulario.html');
    }
   
});*/

router.post('/users', (req, res) => {
    var usuario = req.body.user;
    var contra = req.body.pass;
    if ((users[0] == usuario) && (userspass[0] == contra)) {
        res.sendfile(__dirname + '/public/index2.html');
    }
    else {
        res.sendfile(__dirname + '/public/formulario.html');
        users.push(req.body.user + users.length)//guardar parametros
        userspass.push(req.body.pass + userspass.length)//guardar parametros
        res.sendfile(__dirname + '/public/index.html');
    }

});

app.use(router);

router.get('/home', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

router.get('/home2', function (req, res) {
    res.sendfile(__dirname + '/public/index2.html');
});

router.get('/home3', function (req, res) {
    res.sendfile(__dirname + '/public/index3.html');
});

//app.use(timeout('10s'));

app.listen(3000, function () {
    console.log("Ready");
});

var webserver = require('http').Server(app);//var tipo http, crear server tipo http
app.use(express.static('public'));//crear carpeta llamada public
app.use(express.static('public/css'));//acceso a css
app.use(express.static('public/js'));//acceso a js
console.log('Página habilitada');

const uri = "mongodb+srv://ssmcluster-aobqi.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfuly conected");
    })
    .catch((err) => console.error(err));

//data declaration
class datos{
    constructor(datos) {
        this.voltaje = voltaje;
        this.corriente = corriente;
        this.potencia = potencia;
        this.estado = estado;
        this.llenado = llenado;
    }
} 

voltaje=0;
corriente=0;
potencia=0;
estado='ok';
llenado=0;

// POST method route
app.post('mongodb://[jose.roldan@correo.usa.edu.co:#Exeron97@]localhost[:3000][/[variables][?options]]', function (req, res) {
    res.send(voltaje);
    res.send(corriente);
    res.send(potencia);
    res.send(estado);
    res.send(llenado);
    console.log("Posted succesfully");
});

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect()
//     .then(() => {
//         console.log("Successfuly conected");

//     })

// client.connect(err => {
//   const collection = client.db("variables").collection("container");
//   // perform actions on the collection object
//   client.close();
// });


