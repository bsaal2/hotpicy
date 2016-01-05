

Template.restaurants.rendered=function(){
	Session.set("search",null);
}

Template.restaurants.helpers({
	restaurants:function(){
		return restaurant_data.find();
	},

	search:function(){
        return Session.get("search");
	},
	language:function(){
		return Session.get("japanese");
	},
});

Template.restaurants.events({
    'keydown input':function(e){
		Session.set("search",true);	
	},

	'focusout input':function(){
		Session.set("search",null);
		$('.search-button').val('');
	},
});

Template.restaurants.destroyed=function(){
	Session.set("search",null);
}

