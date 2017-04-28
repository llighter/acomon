function Player(id, name, x, y, img, direction) {
	this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.img = img;
	this.direction = direction;
}

function Monster(id, name, x, y, img) {
	this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.img = img;
}

function Map(id, img, width, height, matrix) {
	this.id = id;
	this.img = img;
	this.width = width;
	this.height = height;
	this.matrix = matrix;
}