
Template.foodList.helpers({
	featuredFood:function(){
		return product_data.find({id:Session.get("id")});
	},
	language:function(){
		return Session.get("japanese");
	}
});