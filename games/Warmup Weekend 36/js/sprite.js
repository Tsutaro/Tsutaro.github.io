var grass = [], dirt = [], source = "img/tilesets.png";


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
		center: new Sprite(0, 0, 32, 32, source, false),
		top: new Sprite(1, 3, 32, 32, source, false),
		topLeft: new Sprite(3, 1, 32, 32, source, false),
		topRight: new Sprite(2, 1, 32, 32, source, false),
		left: new Sprite(3, 2, 32, 32, source, false),
		right: new Sprite(2, 2, 32, 32, source, false),
		bot: new Sprite(1, 2, 32, 32, source, false),
		botLeft: new Sprite(3, 4, 32, 32, source, false),
		botRight: new Sprite(0, 4, 32, 32, source, false),
		flower: new Sprite(10, 0, 32, 32, source, false)
	};

	dirt = {
		center: new Sprite(0, 0, 32, 32, source, false),
		top: new Sprite(1, 3, 32, 32, source, false),
		topLeft: new Sprite(2, 1, 32, 32, source, false),
		topRight: new Sprite(2, 1, 32, 32, source, false),
		left: new Sprite(3, 2, 32, 32, source, false),
		right: new Sprite(2, 2, 32, 32, source, false),
		bot: new Sprite(1, 2, 32, 32, source, false),
		botLeft: new Sprite(3, 4, 32, 32, source, false),
		botRight: new Sprite(0, 4, 32, 32, source, false),
		pebble: new Sprite(0, 4, 32, 32, source, false)
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