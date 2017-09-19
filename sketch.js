//Si se desea aumentar la velocidad (Default 1)
var speedUp= 1.4;
//Si se desea aumentar la frecuencia de aparicion de las tuberias (Default 100);
var freq= 70;
var bird;
var score=0.00;
var tiempo= 0; //1 Dia , 0 Noche.
//121, 194, 239 Dia
//255, 196, 126 Tarde
//12, 58, 125 Noche 
//Color de fondo en RGB 
var R=12;
var G=58;
var B=125;
var pipes=[];

function setup(){
	createCanvas(400,600);
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
			score=score+1;
		}else{
			console.log("Golpe");
			pipes[i].repaint();
			finalScore();
		}


		if (pipes[i].offscreen()) {
			pipes.splice(i,1);

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
	window.alert("Puntuacion final: "+ score);
	location.reload();
}
