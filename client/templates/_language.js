
Template._language.events({
	'click .japanese':function(){
		Session.setPersistent("japanese","japanese");
	},

	'click .english':function(){
		Session.clear("japanese");
	}
});

Template._language.helpers({
	language:function(){
		return Session.get("japanese");
	},
	checkmarkJP:function(){
		var japanese=Session.get("japanese");
		if(japanese=="japanese"){
			return "ion-checkmark";
		}
	},
	checkmarkEn:function(){
		var japanese=Session.get("japanese");
		if(japanese!="japanese"){
			return "ion-checkmark";
		}
	},
});
