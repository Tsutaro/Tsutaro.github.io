var up, down, left, right;

function Input(){
	this.key = false;
	this.up = false;
	this.down = false;
	this.left = false;
	this.right = false;
};

Input.prototype.tick = function() {
	window.onkeydown = function(e){
		this.key = String.fromCharCode(e.which) || String.fromCharCode(e.keyCode);
		if(this.key == "W") this.up = true;
		if(this.key == "S") this.down = true;
		if(this.key == "A") this.left = true;
		if(this.key == "D") this.right = true;
		up = this.up;
		down = this.down;
		left = this.left;
		right = this.right;
	}

	window.onkeyup = function(e){		
		this.key = String.fromCharCode(e.which) || String.fromCharCode(e.keyCode);
		if(this.key == "W") this.up = false;
		if(this.key == "S") this.down = false;
		if(this.key == "A") this.left = false;
		if(this.key == "D") this.right = false;
		up = this.up;
		down = this.down;
		left = this.left;
		right = this.right;
	}
};

function Mouse(){
	this.x = 0;
	this.y = 0;
};

Mouse.prototype.tick = function() {
	
};
