function Level(){

}

Level.prototype.loadLevel = function() {
	map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,16,38,37,37,37,65,1,1,1,1,1,1,1,1,11,1,1],
	[1,1,11,1,1,1,1,1,40,8,19,8,19,39,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,40,19,8,19,8,39,1,1,11,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,40,8,8,22,19,39,1,1,1,1,1,11,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,4,26,26,26,26,49,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,21,21,21,21,21,21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1],
	[1,11,1,21,21,21,21,21,21,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,21,21,21,21,21,21,1,1,1,1,1,1,1,1,1,41,42,1,1,1,1,1],
	[1,1,1,21,21,21,5,6,21,1,1,11,1,1,1,1,1,32,33,34,31,1,11,1,1],
	[1,1,1,21,21,21,17,18,21,1,1,1,1,1,1,1,1,44,45,46,43,1,1,1,1],
	[1,1,1,21,21,21,21,21,21,1,1,1,1,1,1,1,1,1,29,30,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1],
	[1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
};

Level.prototype.getTile = function(x, y) {
	if(map[y][x] == 1) return grassCenter;
	if(map[y][x] == 4) return grassBotLeft;
	if(map[y][x] == 5) return flower;
	if(map[y][x] == 6) return flower;
	if(map[y][x] == 8) return flower;
	if(map[y][x] == 11) return flower;
	if(map[y][x] == 16) return grassTopLeft;
	if(map[y][x] == 17) return flower;
	if(map[y][x] == 18) return flower;
	if(map[y][x] == 19) return flower;
	if(map[y][x] == 21) return flower;
	if(map[y][x] == 22) return flower;
	if(map[y][x] == 26) return grassBot;
	if(map[y][x] == 29) return flower;
	if(map[y][x] == 30) return flower;
	if(map[y][x] == 31) return flower;
	if(map[y][x] == 32) return flower;
	if(map[y][x] == 33) return flower;
	if(map[y][x] == 34) return flower;
	if(map[y][x] == 37) return grassTop;
	if(map[y][x] == 38) return grassTop;
	if(map[y][x] == 39) return grassRight;
	if(map[y][x] == 40) return grassLeft;
	if(map[y][x] == 41) return flower;
	if(map[y][x] == 43) return flower;
	if(map[y][x] == 44) return flower;
	if(map[y][x] == 45) return flower;
	if(map[y][x] == 46) return flower;
	if(map[y][x] == 49) return grassBotRight;
	if(map[y][x] == 65) return grassTopRight;
	return grassCenter;
};