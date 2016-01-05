

Template.myfavourite.helpers({
	favRestaurant:function(){
		return Myfavourite.find();
	},
	language:function(){
		return Session.get("japanese");
	}
});