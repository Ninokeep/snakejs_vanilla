const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class SnakePart {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
let speed = 7;

let tileCount = 20;

let headX = 10;
let headY = 10;

let tileSize = canvas.width / tileCount - 2;

let snakeParts = [];
let tailLength = 2;

let xVelocity = 0;
let yVelocity = 0;


const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;


appleX = 5;
appleY = 5;

function drawGame() {
	clearGame();
	changeSnakePosition();
	checkAppleCollision();
	createApple();
	drawSnake();
	setTimeout(drawGame, 1000 / speed);
}

function createRect(x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

function clearGame() {
	createRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake() {

	ctx.fillStyle = "orange";
	ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

	ctx.fillStyle = "blue";
	for (let i = 0; i < snakeParts.length; i++) {
		let part = snakeParts[i];
		ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
	}
	snakeParts.push(new SnakePart(headX, headY));
	while (snakeParts.length > tailLength) {
		snakeParts.shift();
	}
	ctx.fillStyle = "orange";
	ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function createApple() {
	ctx.fillStyle = "red";
	ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}
function changeSnakePosition() {
	headX = headX + xVelocity;
	headY = headY + yVelocity;
}

function checkAppleCollision() {
	if (appleX === headX && appleY === headY) {

		appleY = Math.floor(Math.random() * tileCount);
		appleX = Math.floor(Math.random() * tileCount);
		tailLength++;
	}


}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {

	if (event.keyCode == ARROW_UP) {
		if (yVelocity == 1) {
			return;
		}
		yVelocity = -1;
		xVelocity = 0;
	}
	if (event.keyCode == ARROW_DOWN) {
		if (yVelocity == - 1) {
			return;
		}
		yVelocity = 1;
		xVelocity = 0;
	}
	if (event.keyCode == ARROW_LEFT) {
		if (xVelocity == 1) {
			return;
		}
		yVelocity = 0;
		xVelocity = -1;
	}
	if (event.keyCode == ARROW_RIGHT) {
		if (xVelocity == -1) {
			return;
		}
		yVelocity = 0;
		xVelocity = 1;
	}
}

function detectionWall() { }
drawGame();

