var map = [];
var tiles = {
	size: 32,
	grass: 1
};

var grassTile = new Tile(grass.topLeft, false);
var rockTile = new Tile(grass.topLeft, true);

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