var map = [];
var tiles = {
	size: 32,
	grass: 1
};

var grassTopLeft = new Tile(grass.topLeft, false);
var grassTop = new Tile(grass.top, false);
var grassTopRight = new Tile(grass.topRight, false);
var grassLeft = new Tile(grass.left, false);
var grassCenter = new Tile(grass.center, false);
var grassRight = new Tile(grass.right, false);
var grassBotLeft = new Tile(grass.botLeft, false);
var grassBot = new Tile(grass.bot, false);
var grassBotRight = new Tile(grass.botRight, false);
var flower = new Tile(grass.flower, false);

function Tile(sprite, solid){
	this.solid = solid;
	this.sprite = sprite;
}

Tile.prototype.render = function(g, x, y){
	this.sprite.draw(g, x * tiles.size, y * tiles.size, tiles.size, tiles.size);
}

function renderMap(g, level){
	for(var y = 0; y < map.length; y++){
		for(var x = 0; x < map[y].length; x++){
			level.getTile(x, y).render(g, x, y)
		}
	}
};