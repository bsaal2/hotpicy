
Template.featuredfood.helpers({
	restaurants:function(){
		return restaurant_data.find();
	},
	language:function(){
		return Session.get("japanese");
	}
});
