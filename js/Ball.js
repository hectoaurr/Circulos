class Ball{
	
	constructor(x,y,widthInicial,heightInicial,width,height,numero) {
		this.x = x
		this.y = y
		this.randFill_r = Math.floor(Math.random() * 255 + 1)
    	this.randFill_g = Math.floor(Math.random() * 255 + 1)
    	this.randFill_b = Math.floor(Math.random() * 255 + 1)
		this.widthInicial = widthInicial
		this.heightInicial = heightInicial
		this.width = width
		this.height = height
		this.numero = numero
		this.speedX = 3 * this.direction()
		this.speedY = 3 * this.direction()
	}

	draw() {
		push()
		fill(this.randFill_r, this.randFill_g, this.randFill_b)
		ellipse(this.x,this.y,this.width,this.height)
		pop()
	}

	move() {
		if (this.x <= 0) {
			this.speedX = this.speedX * -1
		}else if (this.x >= this.widthInicial) {
			this.speedX = this.speedX * -1
		}

		if (this.y <= 0) {
			this.speedY = this.speedY * -1
		}else if (this.y >= this.heightInicial) {
			this.speedY = this.speedY * -1
		}

		this.x+= this.speedX
		this.y+= this.speedY
	}

	cambiarDireccion() {
		this.speedX = this.speedX * -1
		this.speedY = this.speedY * -1
	}

	direction() {
		return floor(random(2))* 2 - 1
	}

	get getspeedX(){
		return this.speedX
	}

	get getspeedY(){
		return this.speedY
	}

	get posX() {
    	return this.x
  	}

  	get posY() {
    	return this.y
  	}

  	get getnumero() {
    	return this.numero
  	}

}