/*
 * 집에서....Apr20,2017
 * 			02:37 
 * 			dev by JB
 * 
 * */
$(document).ready(function(){

});

// 포켓몬세계 전체 몬스터리스트.aa



mapPokemons = [];
mapPokemons[0] = {id:0, name:"jbMon", lv:1, exp:0, hp: 50, att:13, property:0};
mapPokemons[1] = {id:1, name:"ynMon", lv:1, exp:0, hp: 52, att:12, property:1};
mapPokemons[2] = {id:2, name:"gyMon", lv:1, exp:0, hp: 54, att:11, property:2};
mapPokemons[3] = {id:3, name:"jwMon", lv:1, exp:0, hp: 56, att:10, property:3};
mapPokemons[4] = {id:4, name:"jhMon", lv:1, exp:0, hp: 57, att:9, property:4};
mapPokemons[5] = {id:5, name:"bossMon", lv:1, exp:0, hp: 57, att:9, property:4};


//맵에서 몬스터와 만날경우. - 상대는 랜덤.
var rand1;
var rand2;
function noRepeatRand(){
rand1 = parseInt(Math.random() * 5);
rand2 = parseInt(Math.random() * mapPokemons.length );
//console.log("rand1 : "+rand1 +"   rand2 : "+ rand2);
	while(rand1 == rand2){
		noRepeatRand();
	}
}
function encounter( randNo1 , randNo2 ){
	myMon = mapPokemons[randNo1];
	enemyMon = mapPokemons[randNo2];
	console.log("myMon "+myMon.id);
	console.log("enemyMon "+enemyMon.id);
}
noRepeatRand();
encounter(rand1,rand2);

var jiwoo = {mint:5, pokeBall:4, golds:30000};

console.log("jiwoo.mint "+jiwoo.mint +"  jiwoo.pokeBall "+ jiwoo.pokeBall);































