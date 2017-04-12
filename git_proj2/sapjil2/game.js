enchant();
window.onload = function(){
  var game = new Core(320, 320);  // 320 X 320 그림판.
  game.preload('space3.png', 'icon0.png');   //곰사진, 사과가있는 사진 빠른로드.
  game.fps = 20;  // 초당20프레임
  game.onload = function(){
        
    //////////// 선언부
    var Player = enchant.Class.create(enchant.Sprite, {  //Player객체에 할당할 행동functions
      initialize: function(){
        enchant.Sprite.call(this, 32, 32);
        this.image = game.assets['space3.png'];
        this.frame = 5;
        game.rootScene.addChild(this);  // game.rootScene에 addChild.
      }
    });

    var Apple = enchant.Class.create(enchant.Sprite, { // Apple객체에 할당할 행동functions.
      initialize: function(){
        enchant.Sprite.call(this, 16, 16);  // this라고 선언하고 크기 할당하는건가??
        this.image = game.assets['icon0.png'];
        this.moveTo(16, player.y + 8);
        this.tl.moveBy(320, 0, 30);  // 320px을 이동하는시간은 30/fps = 1.5초
        this.frame = 15;
        game.rootScene.addChild(this); 
      }
    });

    var Enemy = enchant.Class.create(enchant.Sprite, {
      initialize: function(){
        enchant.Sprite.call(this, 32, 32);
        this.image = game.assets['space3.png'];
        this.moveTo(320, Math.floor(Math.random() * 320));  // y좌표는 0~320랜덤.
        this.scaleX = -1;   // image좌우대칭.
        this.tl.moveBy(-360, 0, 160);  // 왼쪽으로 360px 걸어오는데 160/fps= 8초.
        game.rootScene.addChild(this);
      }
    });
    //////////////선언부 END
    
    var player = new Player();
    
    game.rootScene.tl.then(function() {  //애니메이션 도중에 then이 나오면 그 안에 내용을 실행
      var enemy = new Enemy();
    }).delay(30).loop();  	//delay()는 해당 시간동안 아무것도 안합니다. 
     
     /*
      .on == addEventListener()
      "touchstart" == "click". 마우스나, 터치시에...
      evt 일반변수(아무거나써도됨): 터치한부분의 x,y좌표를 저장시켜줌.
		player.y = evt.localY;  흰곰돌이의 세로 위치를 바꿔주고
		var apple = new Apple(); 사과객체 생성.
	  "touchmove" 터치떼지않고 드래그할때도.. ->함수: y좌표는 움직여줌.
     
     
     */
     
    game.rootScene.on('touchstart', function(evt){   
      player.y = evt.localY;		
      var apple = new Apple();
    });
        
    game.rootScene.on('touchmove', function(evt){
      player.y = evt.localY;
    });
        
    var score = 0;
    
    game.rootScene.on('enterframe',function(){   // .on == addEventListener() 
     var hits = Apple.intersect(Enemy);    // 충돌판정!!!! 겹치는 px이 0보다 클떄.
     if (hits.length > 0 ) {
       game.rootScene.removeChild(hits[0][0]);  // 앞에 Apple 클래스중 충돌된 스프라이트를,
       game.rootScene.removeChild(hits[0][1]);  // 괄호안에 Enemy 클래스중 충돌된 스프라이트
       
       hits.length = 0;  // default는 0으로 재설정.
       score ++;
      }
    });
        
    player.tl.delay(game.fps * 10).then(function(){ //총 20/20*10 = 10초.
      alert('game over! score: ' + score);
      game.stop();  // stop action이 잇나봄. clearInterval?
    });
  };  // game.onload END
  game.start();
}  // window.onload
