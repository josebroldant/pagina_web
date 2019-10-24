var net = require('net');

function newSocket(socket) {
	
	console.log('Se conecto: ' + socket.remoteAddress);
 

    socket.on('data', function(data) {
    	var datos = data.toString();    	
        console.log(datos + ' - '+socket.remoteAddress);
        
        var date=new Date();
        var datos={
            hora:date.getHours(),
            minutos:date.getMinutes(),
            segundos:date.getSeconds(),
        }        
        console.log(datos);
        socket.write(JSON.stringify(datos));
    })
    socket.on('end', function() {
        closeSocket(socket);
    })
    socket.on('error', function(){
        console.log("Error en socket");
        closeSocket(socket);
    })   	
   
}

var server = net.createServer(newSocket);
server.listen(3000);
console.log('Escuchando puerto 3000');

process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log("ERROR: " +err);
});


function closeSocket(socket) {

    console.log("Dispositivo deconectado");
    socket.destroy();
}