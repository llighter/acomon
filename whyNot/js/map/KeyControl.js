document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
	switch(e.keyCode) {
		case ARROW_LEFT:
			leftPressed = true;
			break;
		case ARROW_UP:
			upPressed = true;
			break;
		case ARROW_RIGHT:
			rightPressed = true;
			break;
		case ARROW_DOWN:
			downPressed = true;
			break;
	}
}

function keyUpHandler(e) {
    switch(e.keyCode) {
		case ARROW_LEFT:
			leftPressed = false;
			break;
		case ARROW_UP:
			upPressed = false;
			break;
		case ARROW_RIGHT:
			rightPressed = false;
			break;
		case ARROW_DOWN:
			downPressed = false;
			break;
	}
}