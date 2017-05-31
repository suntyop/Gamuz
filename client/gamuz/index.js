var canvasKonva = new CreateCanvasKonva(968, 549);
		var socket = io.connect('http://gamuz.ovh:8080');
		canvasKonva.initKonva();
		
		//Initialisation des variables
		
		var focusV = 0;
		var link = document.querySelector('textarea');
		link.focus();

			var statut = 0; 
			
			var salons = new Array(new Salon("clairiere1"));
			var salonSelect = "";
			var monPseudo = "";
			
			var fondCadrePseudo = new Image();
			fondCadrePseudo.src = "http://gamuz.ovh/client/cadrePseudo1.png";
			
			
			var fondBulleParler1 = new Image();
			fondBulleParler1.src = "http://gamuz.ovh/client/bulleParlerDroite1.png";
			
			var fondBulleParler3 = new Image();
			fondBulleParler3.src = "http://gamuz.ovh/client/bulleParlerDroite3.png";
			
			var fondBulleParler4 = new Image();
			fondBulleParler4.src = "http://gamuz.ovh/client/bulleParlerDroite4.png";
			
			var fondBulleEnCours1 = new Image();
			fondBulleEnCours1.src="http://gamuz.ovh/client/ecrireUn.png";

			
			var fondBulleEnCours3 = new Image();
			fondBulleEnCours3.src="http://gamuz.ovh/client/EcrireTrois.png";
			
			var fondBulleEnCours4 = new Image();
			fondBulleEnCours4.src="http://gamuz.ovh/client/EcrireQuatre.png";
			
			var fondBarreMenu = new Image();
			fondBarreMenu.src ="http://gamuz.ovh/client/barreMenu.png";
			var fondCarteMini = new Image();
			fondCarteMini.src ="http://gamuz.ovh/client/carteMini.png";
			
			
			
			var barreMenu = new Konva.Image({
				width:2000,
				height:2000,
        		x: -25,
       		 	y: -500,
        		image: fondBarreMenu,
				visible:false
      		});
			
			var carteMini = new Konva.Image({
				width:30,
				height:30,
				x: 750,
       		 	y: 8,
        		image: fondCarteMini,
				visible:false
			});
			
			
			var bulleEnCours1 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleEnCours1,
				visible:false
      		});
			
			var bulleEnCours3 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleEnCours3,
				visible:false
      		});
			
			var bulleEnCours4 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleEnCours4,
				visible:false
      		});
			
			var textBulleEnCours1 = new Konva.Text({
				  x: 0,
				  y: 0,
				  text: "",
				  fontSize: 12,
				  fontFamily: 'Courier New',
				  fill: 'black',
				  visible:false
			});
				
			var textBulleEnCours2 = new Konva.Text({
				  x: 0,
				  y: 0,
				  text: "",
				  fontSize: 12,
				  fontFamily: 'Courier New',
				  fill: 'black',
				  visible:false
			});
			
			var textBulleEnCours3 = new Konva.Text({
				  x: 0,
				  y: 0,
				  text: "",
				  fontSize: 12,
				  fontFamily: 'Courier New',
				  fill: 'black',
				  visible:false
			});
			
			var textBulleEnCours4 = new Konva.Text({
				  x: 0,
				  y: 0,
				  text: "",
				  fontSize: 12,
				  fontFamily: 'Courier New',
				  fill: 'black',
				  visible:false
			});
			
			canvasKonva.addToLayer(barreMenu);
			canvasKonva.addToLayer(carteMini);
			
			canvasKonva.addToLayer(textBulleEnCours1);
			canvasKonva.addToLayer(textBulleEnCours2);
			canvasKonva.addToLayer(textBulleEnCours3);
			canvasKonva.addToLayer(textBulleEnCours4);
			
			canvasKonva.addToLayer(bulleEnCours1);
			canvasKonva.addToLayer(bulleEnCours3);
			canvasKonva.addToLayer(bulleEnCours4);
			
	
		
			
			var fondCarte = new Image();
			fondCarte.src = "http://gamuz.ovh/client/carte.png";
			
			var fondClairiere1 = new Image();
			fondClairiere1.src = "http://gamuz.ovh/client/clairiere1.png";
			
			var fondCastorDroite = new Image();
			fondCastorDroite.src = "http://gamuz.ovh/client/castorDroite.png";
			
			var fondCastorGauche = new Image();
			fondCastorGauche.src = "http://gamuz.ovh/client/castorGauche.png";
			
			var imageCarte = new Konva.Image({
        		x: 0,
       		 	y: 0,
        		image: fondCarte
      		});

			var imageClairiere1 = new Konva.Image({
        		x: 0,
       		 	y: 0,
        		image: fondClairiere1,
				visible:false
      		});
      		
      		canvasKonva.addToLayer(imageCarte);
			canvasKonva.addToLayer(imageClairiere1);
		// Fin init
		
		canvasKonva.renderLayer(function() {
			
			if(statut === 0 || statut === 1) //Tentative de liaison avec le serveur - connexion.
			{
				if(statut === 0) // Le client n'est ni loguÈ ni connectÈ avec le serveur.
				{
				
					imageCarte.hide();
				}
				else // Le client est connectÈ mais pas loguÈ avec le serveur.
				{
				}
			}
			else if(statut === 2) //Le client est connectÈ et logguÈ avec le serveur. Page de sÈlection des salons.
			{
				
				imageCarte.show();
				salons[0].afficheNbConnect(230,172);
				
			}
			else if(statut === 3) //Le client est entrÈ dans un salon
			{
				canvasKonva.layer.clear();
				imageCarte.hide();
				salons[0].hideNbConnect();
				
				
				
				if(salonSelect == "clairiere1")
				{
					imageClairiere1.show();
					
					
				}
				barreMenu.show();
				carteMini.show();
				barreMenu.moveToTop();
				carteMini.moveToTop();
			}
			else //Erreur : statut n'est pas entre 0 et 3 (inclus)
			{
				console.log("ERREUR : La variable statut doit Ítre comprise (ou Ègale) entre 0 et 3.")
			}
			
		});
	
		canvasKonva.eventLayer(function() {
			
			carteMini.on('click', function(evt) {
				document.location.href="http://gamuz.ovh/client/index.php?tocken="+$_GET('tocken');
			});
			
			
			
			socket.on('paquetID', function(result) {
				if(result.id === 1)
				{
					socket.emit("paquetID", {id:2, tocken:$_GET('tocken')});
					
					
				}
				if(result.id === 3)
				{
					
					statut = 2;
					socket.pseudo = result.pseudo;
					monPseudo = result.pseudo;
					
				}
				if(result.id === 4)
				{
					statut = 1;
				}
				if(result.id === 5)
				{
					salons[0].setNbConnect(result.nbConnectClair1);
				}
				if(result.id === 8)
				{
					if(salonSelect=="clairiere1")
					{
						salons[0].addCharacter(new Character(result.pseudo, result.posX, result.posY));
					}
				}
				if(result.id === 9)
				{
					if(result.salon == "clairiere1")
					{
						salons[0].addCharacter(new Character(socket.pseudo, 300, 300));
						salonSelect="clairiere1";
						statut = 3;
					}
				}
				if(result.id === 11)
				{
					if(salonSelect == "clairiere1")
					{
						changePosCharacter(result.pseudo, result.posX, result.posY);
					}
				}
				
				if(result.id === 13)
				{
					if(salonSelect == "clairiere1" && result.salon == "clairiere1")
					{
						
							var indexTemp = indexOfCharacter(result.pseudo);
							
							salons[0].characters[indexTemp].bulleParler1.hide();
							salons[0].characters[indexTemp].bulleParler3.hide();
							salons[0].characters[indexTemp].bulleParler4.hide();
							
							if(result.text.length < 25)
							{
								salons[0].characters[indexTemp].bulleParler1.moveToTop();
								salons[0].characters[indexTemp].bulleParler1.position({x:salons[0].characters[indexTemp].perso.position().x+40, y:salons[0].characters[indexTemp].perso.position().y-30});
								salons[0].characters[indexTemp].bulleParler1.show();
								salons[0].characters[indexTemp].toSay.value = result.text;
								
								salons[0].characters[indexTemp].toSay.style.top = salons[0].characters[indexTemp].bulleParler1.position().y+2+"px";
								salons[0].characters[indexTemp].toSay.style.left = salons[0].characters[indexTemp].bulleParler1.position().x+2+"px";
								salons[0].characters[indexTemp].toSay.style.height = 30+"px";
							}
							else
							{
								if(result.text.length<38)
								{
									salons[0].characters[indexTemp].bulleParler3.moveToTop();
									salons[0].characters[indexTemp].bulleParler3.position({x:salons[0].characters[indexTemp].perso.position().x+40, y:salons[0].characters[indexTemp].perso.position().y-47});
									salons[0].characters[indexTemp].bulleParler3.show();
									salons[0].characters[indexTemp].toSay.value = result.text;
									
									salons[0].characters[indexTemp].toSay.style.top = salons[0].characters[indexTemp].bulleParler3.position().y+2+"px";
									salons[0].characters[indexTemp].toSay.style.left = salons[0].characters[indexTemp].bulleParler3.position().x+2+"px";
									salons[0].characters[indexTemp].toSay.style.height = 50+"px";
								}
								else
								{
									if(result.text.length<51)
									{
										salons[0].characters[indexTemp].bulleParler4.moveToTop();
										salons[0].characters[indexTemp].bulleParler4.position({x:salons[0].characters[indexTemp].perso.position().x+40, y:salons[0].characters[indexTemp].perso.position().y-47});
										salons[0].characters[indexTemp].bulleParler4.show();
										salons[0].characters[indexTemp].toSay.value = result.text;
										
										salons[0].characters[indexTemp].toSay.style.top = salons[0].characters[indexTemp].bulleParler4.position().y+2+"px";
										salons[0].characters[indexTemp].toSay.style.left = salons[0].characters[indexTemp].bulleParler4.position().x+2+"px";
										salons[0].characters[indexTemp].toSay.style.height = 60+"px";
									}
								}
							}
							
							
					}
				}
				
				if(result.id === 400)
				{
					if(result.salon == "clairiere1")
					{
						salons[0].characters[indexOfCharacter(result.pseudo)].bulleParler1.hide();
						salons[0].characters[indexOfCharacter(result.pseudo)].bulleParler3.hide();
						salons[0].characters[indexOfCharacter(result.pseudo)].bulleParler4.hide();
						salons[0].characters[indexOfCharacter(result.pseudo)].toSay.value = "";
						salons[0].characters[indexOfCharacter(result.pseudo)].toSay.style.top= "-100px";
						salons[0].characters[indexOfCharacter(result.pseudo)].toSay.style.bottom = "0px";
						
						salons[0].characters[indexOfCharacter(result.pseudo)].perso.destroy();
						salons[0].characters.splice(indexOfCharacter(result.pseudo), 1);
						canvasKonva.layer.draw();
						
						
					}
				}
			});
			
			socket.on('disconnect', function(result) {
				console.log("Connexion avec le serveur perdue");
				canvasKonva.layer.destroy();
				salons[0].textNbConnect.destroy();
				statut = 0;
			});
			
				canvasKonva.layer.on('click', function(evt) {
					if(statut === 2)
					{
						if(canvasKonva.stage.getPointerPosition().x >= 111 && canvasKonva.stage.getPointerPosition().x <= 290 && canvasKonva.stage.getPointerPosition().y >=165 && canvasKonva.stage.getPointerPosition().y <=184)
						{
							
							
							socket.emit("paquetID", { id:6, salon:"clairiere1", pseudo:socket.pseudo });
							
						}
					}
					if(statut === 3)
					{
						if(salonSelect === "clairiere1")
						{
						
							changePosCharacter(socket.pseudo, canvasKonva.stage.getPointerPosition().x, canvasKonva.stage.getPointerPosition().y);
							socket.emit("paquetID", { id:10, salon:"clairiere1", pseudo:socket.pseudo, posX:canvasKonva.stage.getPointerPosition().x, posY:canvasKonva.stage.getPointerPosition().y });
							
						}
					}
				});
				
				
			
		});
		
		
		//EVENEMENTS CLAVIER
		document.addEventListener('keyup', function(e) {
					
					if(e.keyCode == 13)
					{	
						link.style.top= "-100px";
						link.style.bottom = "0px";
						bulleEnCours1.hide();
						bulleEnCours3.hide();
						bulleEnCours4.hide();
						socket.emit("paquetID", { id:12, salon:"clairiere1", pseudo:socket.pseudo, text:link.value });
						link.value="";
					}
					else
					{
						salons[0].characters[indexOfCharacter(socket.pseudo)].bulleParler1.hide();
						salons[0].characters[indexOfCharacter(socket.pseudo)].bulleParler3.hide();
						salons[0].characters[indexOfCharacter(socket.pseudo)].bulleParler4.hide();
						salons[0].characters[indexOfCharacter(socket.pseudo)].toSay.value = "";
						salons[0].characters[indexOfCharacter(socket.pseudo)].toSay.style.top= "-100px";
						salons[0].characters[indexOfCharacter(socket.pseudo)].toSay.style.bottom = "0px";
			
						if(e.keyCode == 8)
						{
							if(link.disabled == true)
							{
								link.value = link.value.substring(0, link.value.length-1);
								link.disabled = false;
							}
							
						}
						link.focus();
						
					
						if(link.value.length <25)
						{
							bulleEnCours3.hide();
							bulleEnCours4.hide();
							bulleEnCours1.moveToTop();
							bulleEnCours1.position({x:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().x+40, y:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().y-25});
							bulleEnCours1.show();
							
							link.style.top = bulleEnCours1.position().y+2+"px";
							link.style.left = bulleEnCours1.position().x+2+"px";
							link.style.height = 30+"px";
						}
						else
						{
							if(link.value.length <38)
							{
								bulleEnCours1.hide();
								bulleEnCours4.hide();
								bulleEnCours3.moveToTop();
								bulleEnCours3.position({x:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().x+40, y:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().y-47});
								bulleEnCours3.show();
								
								link.style.top = bulleEnCours3.position().y+2+"px";
								link.style.left = bulleEnCours3.position().x+2+"px";
								link.style.height = 50+"px";
							}
							else
							{
								if(link.value.length <51)
								{
									bulleEnCours3.hide();
									
									bulleEnCours4.moveToTop();
									bulleEnCours4.position({x:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().x+40, y:salons[0].characters[indexOfCharacter(monPseudo)].perso.position().y-47});
									bulleEnCours4.show();
								
									link.style.top = bulleEnCours4.position().y+2+"px";
									link.style.left = bulleEnCours4.position().x+2+"px";
									link.style.height = 60+"px";
								}
								else
								{
									
										link.disabled = true;
									
								}
							}
						}
					}
					
					
				
				
				canvasKonva.layer.draw();
			
		});
		
		//FIN EVENEMENTS CLAVIER
		

		
		function Salon(nom)
		{
			this.nom = nom;
			this.nbConnect = -1;
			this.characters = new Array();
			this.textNbConnect = new Konva.Text({
				  x: 0,
				  y: 0,
				  text: "",
				  fontSize: 16,
				  fontFamily: 'Courier New',
				  fill: 'black'
				});
			
			this.setNbConnect = function(nbC)
			{
				this.nbConnect = nbC;
				
				
				
			};
			
			this.addCharacter = function(character)
			{
				this.characters.push(character);
			};
			
			
			
			this.afficheNbConnect = function(posX, posY) {
				this.textNbConnect.position( {
					x:posX,
					y:posY
				});
				this.textNbConnect.setText(this.nbConnect+"/10");
				canvasKonva.addToLayer(this.textNbConnect);

			};
			
			this.hideNbConnect = function() {
				this.textNbConnect.hide();

			
			};
		}
		
		function Character(pseudo, posX, posY)
		{
			this.pseudo = pseudo;
			this.posX = posX;
			this.posY = posY;
			
			this.toSay = link.cloneNode(true);
			document.body.appendChild(this.toSay);
			this.toSay.disabled = true;
			this.toSay.style.color="black";
			this.toSay.style.fontWeight="bold";
			this.toSay.style.bottom = "400px";
			this.toSay.style.right = "4000px";
			
			this.bulleParler1 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleParler1,
				visible:false
      		});
			this.bulleParler3 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleParler3,
				visible:false
      		});
			this.bulleParler4 = new Konva.Image({
        		x: 300,
       		 	y: 300,
        		image: fondBulleParler4,
				visible:false
      		});
			canvasKonva.addToLayer(this.bulleParler1);
			canvasKonva.addToLayer(this.bulleParler3);
			canvasKonva.addToLayer(this.bulleParler4);
			
			this.perso = new Konva.Image({
        		x: this.posX,
       		 	y: this.posY,
        		image: fondCastorDroite,
				visible:true
      		});
			
			this.cadrePseudo1 = new Konva.Image({
        		x: this.posX-7,
       		 	y: this.posY+this.perso.getHeight(),
        		image: fondCadrePseudo,
				visible:true
      		});
			
			this.textPseudo = new Konva.Text({
			  x: this.posX+2,
			  y: this.posY+this.perso.getHeight()-0.5,
			  text: this.pseudo,
			  fontSize: 12,
			  
			  fontFamily: 'Comic Sans MS',
			  fill: 'white'
			});
	
			canvasKonva.addToLayer(this.cadrePseudo1);
			canvasKonva.addToLayer(this.textPseudo);
			canvasKonva.addToLayer(this.perso);
			
			
			
			this.setPos = function(posX, posY)
			{
				this.posX = posX;
				this.posY = posY;
			};
		
		}
		
		function changePosCharacter(pseudo, x, y)
		{
			
			var indexCharacter = indexOfCharacter(pseudo);
			var anciennePosX = salons[0].characters[indexCharacter].perso.position().x;
			var anciennePosY = salons[0].characters[indexCharacter].perso.position().y;
			
			var ajoutPosX= (x-23.5-anciennePosX)/10;
			var ajoutPosY= (y-72-anciennePosY)/10;
			var toto=0;
			
			if(ajoutPosX < 0)
			{
				salons[0].characters[indexCharacter].perso.setImage(fondCastorGauche);
			}
			else
			{
				salons[0].characters[indexCharacter].perso.setImage(fondCastorDroite);
			}
			
			
			
			setInterval(function() { // On met en place l'intervalle pour afficher la progression du temps

				if(toto<10) {
					toto++;
					
					salons[0].characters[indexOfCharacter(pseudo)].bulleParler1.hide();
					salons[0].characters[indexOfCharacter(pseudo)].bulleParler3.hide();
					salons[0].characters[indexOfCharacter(pseudo)].bulleParler4.hide();
					salons[0].characters[indexOfCharacter(pseudo)].toSay.value = "";
					salons[0].characters[indexOfCharacter(pseudo)].toSay.style.top= "-100px";
					salons[0].characters[indexOfCharacter(pseudo)].toSay.style.bottom = "0px";
						
					if(pseudo === monPseudo)
					{
						link.disabled=false;
						link.style.top= "-100px";
						link.style.bottom = "0px";
						link.value = "";
						bulleEnCours1.hide();
						bulleEnCours3.hide();
						bulleEnCours4.hide();
					}
					if(ajoutPosX+salons[0].characters[indexCharacter].perso.position().x<925 && ajoutPosX+salons[0].characters[indexCharacter].perso.position().x>10 && ajoutPosY+salons[0].characters[indexCharacter].perso.position().y < 480 && ajoutPosY+salons[0].characters[indexCharacter].perso.position().y>242)
					{
						salons[0].characters[indexCharacter].perso.move({x:ajoutPosX, y:ajoutPosY});
						salons[0].characters[indexCharacter].cadrePseudo1.move({x:ajoutPosX, y:ajoutPosY});
						salons[0].characters[indexCharacter].textPseudo.move({x:ajoutPosX, y:ajoutPosY});
       		
					}
					canvasKonva.layer.draw();
				}
				else
				{
					
				}

			}, 60);
			
			
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
		
		function $_GET(param) 
		{
			var vars = {};
			window.location.href.replace( location.hash, '' ).replace( 
				/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
				function( m, key, value ) { // callback
					vars[key] = value !== undefined ? value : '';
				}
			);

			if ( param ) {
				return vars[param] ? vars[param] : null;	
			}
			return vars;
		}
