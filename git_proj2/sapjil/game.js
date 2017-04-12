


enchant();
window.onload = function(){
   var game = new Game(320, 320); // window크기설정.
   game.preload("chara1.png"); // ready 이미지 선로딩 느낌. 
   game.fps = 25;  // 초당 25프레임.
  
   game.onload = function(){
    var label = new Label ('Hello, world!'); // innerHTML느낌..
    label.textAlign = 'center';
    label.font = 'bold 15px 굴림';
    label.color = 'red'; 
    label.y = 120; //top인듯.
    
    var gom = new Sprite(32,32);  // 곰의 크기설정. Sprite는 움직이는 그림gif설정인듯.
    gom.y= 130 - 16;
    gom.x= 130 - 16;
/*    gom.tl.moveBy(40,0,20)   // 맨뒤는 시간.. 20/fps = 0.8초인듯. moveTo(절대px), moveBy(상대px) .
    	.moveBy(60,60,20)
    	.moveBy(0,80,20)
    	.moveBy(-80, 0,20)  // tl. 이후에 같은 객체에 다른움직임도 가능.
    	.moveBy(-20,-100,20)
    	.moveBy(0,-40,10);
*/
    // .loop(); 하면 반복동작이 일어난다.
    /* 이외에 actions.
    fadeIn (프레임);
	fadeOut (프레임);
	fadeTo (투명도0~1사이, 프레임);
	hide();
	show();
	scaleTo (X배수, Y배수, 프레임);
	scaleBy (X배수, Y배수, 프레임);
	rotateTo (각도0~360, 프레임);
	rotateBy (각도0~360, 프레임);
    */
    
    gom.tl.moveTo (32, 32, 30)
           .moveTo (160, 160, 30)
           .fadeOut (30)
           .fadeIn (30)
           .fadeTo (0.5, 30)
           .fadeTo (1, 30)
           .hide()
           .show()
           .scaleTo (2, 2, 30)
           .scaleTo (1, 1, 30)
           .rotateTo (180, 30)
           .rotateTo (0, 30)
           .loop();

    	
	game.addEventListener("enterframe", function(){   // addEventlistener 로 애니메이션동작.
		gom.frame ++;  								// 3가지 동작 frame이 ++되면서 애니메이션효과처럼. 
		if(gom.frame >=3 )							// 0~3루프.
			gom.frame = 0;
	});

    gom.image = game.assets ['chara1.png'];     // assets 로 첫이미지 로드.
     game.rootScene.addChild(gom);
    game.rootScene.addChild(label);
   };
   game.start();
};
