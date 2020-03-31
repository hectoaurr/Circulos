let circulo
let circulo1
let numeroCirculo=0
var circulos=[]

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
		background('#DEDEDE')
		circulos.forEach(function(circulo){
	    	circulo1 = circulo
	    	circulo1.draw()
	    	circulo1.move()
	    	circulos.forEach(function(circulo){
				circulo2 = circulo
				if (circulo1.getnumero != circulo2.getnumero) {
					if ((circulo1.posX >= circulo2.posX && circulo1.posX <= circulo2.posX + (circulo1.width))) {
    					if (circulo1.posY >= circulo2.posY && circulo1.posY <= circulo2.posY + (circulo1.height)) {
    						circulo1.cambiarDireccion()
    						circulo2.cambiarDireccion()
    					}
	    			}
				}
			})
		})
}       

function mousePressed() {
	circulo = new Ball(mouseX,mouseY,floor(windowWidth),floor(windowHeight),50,50,numeroCirculo)
	circulos.push(circulo)
	numeroCirculo+=1
}