function Player(){
	this.x = 0;
	this.y = 0;
	this.size= 32;
	this.speed= 4;
};

Player.prototype.tick = function() {
		if(up) this.y-= this.speed;
		if(down) this.y+= this.speed;
		if(left) this.x-= this.speed;
		if(right) this.x+= this.speed;
};

Player.prototype.render= function(g){
	g.save();
	g.fillStyle = "aqua";
	g.fillRect(this.x, this.y, this.size, this.size);
	g.restore();
}