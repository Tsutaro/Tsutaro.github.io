function Level(){

}

Level.prototype.loadLevel = function() {
	map = [
	[1, 1, 1, 1]
	];
};

Level.prototype.getTile = function(x, y) {
	if(map[y][x] == tiles.grass) return grassTile;
	return grassTile;
};