function WorldPokemon(id, name, lv, exp, hp, att, shield, property, img00, img01, img02){
	this.id = id;
	this.name = name; 
	this.lv = lv; 
	this.exp = exp; 
	this.hp = hp;
	this.att = att;
	this.shield = shield;
	this.property = property;
	this.img00 = img00;
	this.img01 = img01;
	this.img02 = img02;
}

function MyPokemon(bookNo, id, name, lv, exp, hp, att, shield, property, status, img00, img01, img02){
	this.bookNo = bookNo;
	this.id = id;
	this.name = name; 
	this.lv = lv; 
	this.exp = exp; 
	this.hp = hp;
	this.att = att;
	this.shield = shield;
	this.property = property;
	this.status = status;
	this.img00 = img00;  //@@//
	this.img01 = img01;
	this.img02 = img02;
	
	
	this.initHp = hp;
}

function QuestList(questNo, questContent, questNeeds, questDone, reward){  // ## 주어진 시간?? 이런것도 해볼수잇나
	this.questNo = questNo;
	this.questContent = questContent;
	this.questNeeds = questNeeds;
	this.questDone = questDone;
	this.reward = reward;
}