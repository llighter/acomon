
/*
 
 
 
 

*/

$(document).ready(function(){

});

// 포켓몬세계 전체 몬스터리스트.
mapPokemons = [];
mapPokemons[0] = {id:0, name:"aa", lv:1, exp:0, hp: 50, att:13, property:0};
mapPokemons[1] = {id:1, name:"bb", lv:1, exp:0, hp: 52, att:12, property:1};
mapPokemons[2] = {id:2, name:"cc", lv:1, exp:0, hp: 54, att:11, property:2};
mapPokemons[3] = {id:3, name:"dd", lv:1, exp:0, hp: 56, att:10, property:3};
mapPokemons[4] = {id:4, name:"ee", lv:1, exp:0, hp: 57, att:9, property:4};


//맵에서 몬스터와 만날경우. - 상대는 랜덤.
function encounter( randNo1 , randNo2 ){
	myMon = mapPokemons[randNo1];
	enemyMon = mapPokemons[randNo2];
}
encounter(0, parseInt(Math.random() * 4 +1) )







