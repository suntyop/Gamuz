var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('http://gamuz.ovh/client/index.php', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

var listAccueil = new Array();



function indexOfArray(array, pseudoSend)
{
	var i = 0;
	var verif = 0;

		while(i<array.length)
		{
			if(array[i].pseudo === pseudoSend)
			{
				verif = 1;
				break;
			}
			else
			{
				i++;
			}
		}
	
		if(verif === 1)
		{
			return i;
		}
		else
		{
			return -1;
		}
}

		function indexOfCharacter(pseudo)
		{
			var g =0;
			var rB = -1;
			while(g<salons[0].characters.length)
			{
				if(salons[0].characters[g].pseudo === pseudo)
				{
					rB = 1;
					break;
				}
				else
				{
					g++;
				}
			}
			if(rB == 1)
			{
				return g;
			}
			else {
				return -1;
			}
		}
var salons = new Array(new Salon("clairiere1"));

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    socket.emit("paquetID", { id:1, content:2 });
    
    socket.on('paquetID', function(result) {
				if(result.id === 2)
				{
					if(result.tocken != "")
					{
						if(result.tocken == "l6ie3q8p3r04fvnw0f4b")
						{
							socket.pseudo = "Aensoft";
							listAccueil.push(new Character(socket.pseudo));
							socket.salon="";
							socket.emit("paquetID", { id:5, nbConnectClair1:salons[0].characters.length });
							socket.emit("paquetID", { id:3, pseudo:socket.pseudo });
						}
						if(result.tocken == "1jxkm17bwvjyqadqcwc2")
						{
							socket.pseudo = "Saudey";
							listAccueil.push(new Character(socket.pseudo));
							socket.salon="";
							socket.emit("paquetID", { id:5, nbConnectClair1:salons[0].characters.length });
							socket.emit("paquetID", { id:3, pseudo:socket.pseudo });
						}
						if(result.tocken == "nf4nefa55ndxlp35ypa0")
						{
							socket.pseudo = "Nigunn";
							listAccueil.push(new Character(socket.pseudo));
							socket.salon="";
							socket.emit("paquetID", { id:5, nbConnectClair1:salons[0].characters.length });
							socket.emit("paquetID", { id:3, pseudo:socket.pseudo });
						}
						if(result.tocken == "u99nvp2cen8lgnpmbuyp")
						{
							socket.pseudo = "assia16";
							listAccueil.push(new Character(socket.pseudo));
							socket.salon="";
							socket.emit("paquetID", { id:5, nbConnectClair1:salons[0].characters.length });
							socket.emit("paquetID", { id:3, pseudo:socket.pseudo });
						}
						if(result.tocken == "f4u4l7fytgubfr5quthh")
						{
							socket.pseudo = "katokid";
							listAccueil.push(new Character(socket.pseudo));
							socket.salon="";
							socket.emit("paquetID", { id:5, nbConnectClair1:salons[0].characters.length });
							socket.emit("paquetID", { id:3, pseudo:socket.pseudo });
						}
					}
					else
					{
						socket.emit("paquetID", { id:4 });
					}
				}
				if(result.id === 6)
				{
					if(result.salon === "clairiere1")
					{
						if(salons[0].characters.length < 10)
						{
			
							console.log("ajout "+result.pseudo+" ds clairiere1");
							socket.salon="clairiere1";
							socket.emit("paquetID", {id:9, salon:"clairiere1"});
							socket.broadcast.emit("paquetID", {id:8, salon:"clairiere1", pseudo:socket.pseudo, posX:300, posY:300});
							for(var f=0; f<salons[0].characters.length; f++)
							{
								socket.emit("paquetID", {id:8, salon:"clairiere1", pseudo:salons[0].characters[f].pseudo, posX:salons[0].characters[f].posX, posY:salons[0].characters[f].posY });
								console.log("to x :"+salons[0].characters[f].posX);
			
							}
							salons[0].addCharacter(listAccueil[indexOfArray(listAccueil,socket.pseudo)]);
							if(indexOfArray(listAccueil, socket.pseudo) != -1) {
								listAccueil.splice(indexOfArray(listAccueil,socket.pseudo),1);
							}
							
						}
						else
						{
							socket.emit("paquetID", {id:7});
						}
					}
				}
				if(result.id === 10)
				{
					console.log("change pos reçu");
					salons[0].characters[indexOfCharacter(socket.pseudo)].setPos(result.posX, result.posY);
					socket.broadcast.emit("paquetID", {id:11, salon:"clairiere1", pseudo:socket.pseudo, posX:result.posX, posY:result.posY});
				}
				if(result.id === 12)
				{
					
					if(result.salon == "clairiere1")
					{
						if(result.text.length < 51)
						{
							socket.broadcast.emit("paquetID", {id:13, salon:"clairiere1", pseudo:socket.pseudo, text:result.text });
							socket.emit("paquetID", {id:13, salon:"clairiere1", pseudo:socket.pseudo, text:result.text });
						}
						else
						{
							socket.broadcast.emit("paquetID", {id:13, salon:"clairiere1", pseudo:socket.pseudo, text:result.text.substring(0, 49) });
							socket.emit("paquetID", {id:13, salon:"clairiere1", pseudo:socket.pseudo, text:result.text });
						}
					}
				}
	});
	
	socket.on('disconnect', function() {
		
		if(indexOfArray(listAccueil, socket.pseudo) != -1) {
			listAccueil.splice(indexOfArray(listAccueil,socket.pseudo),1);
		}
		if(socket.salon =="clairiere1")
		{
			socket.broadcast.emit("paquetID", {id:400, salon:"clairiere1", pseudo:socket.pseudo});
			salons[0].characters.splice(indexOfCharacter(socket.pseudo),1);
		}
		console.log("Un utilisateur vient de se déconnecter !");
	});
});


function Character(pseudo) {
	
	this.pseudo = pseudo;
	this.salon = "";
	this.posX= 300;
	this.posY= 300;
	
	this.setPos = function(posX, posY)
	{
		this.posX = posX;
		this.posY = posY;
	};
	
}

function Salon(nom) {
	
	this.nom = nom;
	
	this.characters = new Array();

	this.addCharacter = function(character)
	{
		this.characters.push(character);
	};
	
	
	
	
}


server.listen(8080);
