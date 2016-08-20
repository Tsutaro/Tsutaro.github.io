var grass = [];


function Sprite(x, y, width, height, path, collision){
	this.x = x * width;
	this.y = y * height;
	this.width = width;
	this.height = height;
	this.path = new Image();
	this.path.src = path;
	this.collision = collision;
};

function loadSprites() {
	grass = {
		topLeft: new Sprite(0, 0, 32, 32, "img/tilesets.png", false)
	};
};

Sprite.prototype.draw = function(graphics, x, y, width, height){
	graphics.save();
	graphics.drawImage(this.path, this.x, this.y, this.width, this.height, x, y, width, height);
	graphics.restore();
};

Sprite.prototype.tick = function(){

}


loadSprites();