var count;

Template.restaurantsDetail.helpers({
	
	favrestura:function(){
		var count=Myfavourite.find({id:Session.get("id")}).count();
		if(count==0){
			return "ion-ios-heart-outline";
		}
		else{
		    return "ion-ios-heart";	
		}
	},
	language:function(){
		return Session.get("japanese");
	},
	recommendedFood:function(){
		return product_data.find({id:Session.get("id")});
	},
	coupon:function(){
		return coupon_data.find({id:Session.get("id")});
	},
	link:function(){
		var data=client_url.findOne({id:Session.get("id")});
		data=window.btoa(data.owner_id);
		return data;
	},
	combine:function(){
		var mail_subject = "様 クーポンを受信したいですか！";
		var space = " ";
		var res_id = 60;
		var restaurant_name_jp ="アジアの";
        var combine_mail_subject = res_id+space+restaurant_name_jp+space+mail_subject;
        return combine_mail_subject;
	},
	mail_body:function(){
        var mail_body = "そのまま送信してください。折り返しメールが返信されますので、記載されたURLへアクセスいただき、お店からクーポンをお送りします。";
        return mail_body;
	}

})


Template.restaurantsDetail.events({
	'click .makeFavourite':function(){
	 
     count=Myfavourite.find({id:Session.get("id")}).count();
	 if(count==0){
	   var data=restaurant_data.findOne({id:Session.get("id")});
	   data.favourite=1;	
       Myfavourite.insert(data);
	 }
	 else{
      Myfavourite.remove({id:Session.get("id")});
	 }
	},
});