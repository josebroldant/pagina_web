var net = require('net');//libreria net
var express = require('express');//libreria express
    app = express();//metodo constructor de express, express as framework to use http easily
    bodyParser = require("body-parser");
    methodOverride = require("method-override");
    mongodb = require('mongodb');
var timeout = require('connect-timeout');
var session = require('express-session');
var timeoutID;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router=express.Router();

var users = ['nickname']
var userspass =['pass']

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

router.post('/users', (req, res)=>{
    var usuario = req.body.user;
    var contra  = req.body.pass;
    if((users[0] == usuario) && (userspass[0] == contra)){
        res.sendfile(__dirname + '/public/index2.html');
    }
    else{
        res.sendfile(__dirname + '/public/formulario.html');
        users.push(req.body.user+users.length)//guardar parametros
        userspass.push(req.body.pass+userspass.length)//guardar parametros
        res.sendfile(__dirname + '/public/index.html');
    }
    
});

app.use(router);

router.get('/home', function(req,res){
    res.sendfile(__dirname + '/public/index.html');
});

router.get('/home2', function(req,res){
    res.sendfile(__dirname + '/public/index2.html');
});

router.get('/home3', function(req,res){
    res.sendfile(__dirname + '/public/index3.html');
});

//app.use(timeout('10s'));

app.listen(3000, function(){
    console.log("Ready");
});

var webserver = require('http').Server(app);//var tipo http, crear server tipo http
app.use(express.static('public'));//crear carpeta llamada public
app.use(express.static('public/css'));//acceso a css
app.use(express.static('public/js'));//acceso a js
console.log('Página habilitada');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jose.roldan@correo.usa.edu.co:#Exeron97@ssmcluster-aobqi.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


