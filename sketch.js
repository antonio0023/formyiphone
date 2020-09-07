//Si se desea aumentar la velocidad (Default 1)
var speedUp= 1.1;
//Si se desea aumentar la frecuencia de aparicion de las tuberias (Default 100);
var freq= 70;
var bird;
var score=0;
var tiempo=3; //1 Dia , 2 Tarde, 3 Noche.
//121, 194, 239 Dia
//255, 196, 126 Tarde
//12, 58, 125 Noche 
//Color de fondo en RGB 
var R;
var G;
var B;
var pipes=[];
var tiempo=1;
switch(tiempo){
	case 1:
		R=121,G=194,B=239;
		break;
	case 2:
		R=255,G=196,B=126;
		break;
	case 3:
		R=12,G=58,B=125;
		break;
	default:
		R=12,G=58,B=125;

}


function setup(){
	var myCanvas= createCanvas(320,320);
	myCanvas.parent("mainCanv");
	bird= new Bird();
	pipes.push(new Pipe());
	

}
function draw(){
	//r,g,b
	background(R,G,B);
	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
		if(!pipes[i].hits(bird)){
			console.log("Sumar puntos");
			text(score);
			fill(0);
			score=score+1;
			if (pipes[i].offscreen()) {
				pipes.splice(i,1);
	
			}
		}else{
			console.log("Golpe");
			finalScore();
			pipes.length=0;
			Fscore=score;
			score=0;
			setup();
		}



	}
	bird.update();
	bird.show();

	if (frameCount%freq ==0) {
		pipes.push(new Pipe());
		}
	}
		function keyPressed() {
		if (key== ' ') {
			//console.log("Tecla");
			bird.up();
		}  
		
}
function finalScore() {
	window.alert("Puntuacion final: "+ Math.round(score/100));
	// text("Puntuacion final: "+ Math.round(score/100))

}
