Meteor.startup(function(){
 
$.ajax({
        url:'http://hotpicy.com/api/japnese.php',
        type:'post',
        contentType:"application/json",
        mimeType:"application/json",
        crossDomain:true,
        beforeSend:function(xhr){
          xhr.setRequestHeader('Accept', "application/json; charset=utf-8");
        },
        success:function(result){
          restaurant_data.remove({},function(err){
            if(!err){
              _.each(result, function (document) {
                 restaurant_data.insert(document);
              });
            }
          });
        },
        error:function(result){
          
        }
      });

$.ajax({
        url:'http://hotpicy.com/api/japanese_product.php',
        type:'post',
        contentType:"application/json",
        mimeType:"application/json",
        crossDomain:true,
        beforeSend:function(xhr){
          xhr.setRequestHeader('Accept', "application/json; charset=utf-8");
        },
        success:function(result){
          product_data.remove({},function(err){
            if(!err){
              _.each(result, function (document) {
                 product_data.insert(document);
              });
            }
          });
        },
        error:function(result){
          
        }
      });

$.ajax({
        url:'http://hotpicy.com/api/coupon.php',
        type:'post',
        contentType:"application/json;charset=UTF-8",
        mimeType:"application/json",
        crossDomain:true,
        beforeSend:function(xhr){
          xhr.setRequestHeader('Accept', "application/json; charset=utf-8");
        },
        success:function(result){
          coupon_data.remove({},function(err){
            if(!err){
              _.each(result, function (document) {
                 coupon_data.insert(document);
              });
            }
          });
        },
        error:function(result){
          
        }
      });

$.ajax({
        url:'http://www.hotpicy.com/api/client_url.php',
        type:'post',
        contentType:"application/json",
        mimeType:"application/json",
        crossDomain:true,
        beforeSend:function(xhr){
          xhr.setRequestHeader('Accept', "application/json; charset=utf-8");
        },
        success:function(result){
          client_url.remove({},function(err){
            if(!err){
              _.each(result, function (document) {
                 client_url.insert(document);
              });
            }
          });
        },
        error:function(result){
          
        }
      });


});

Template.home.rendered=function(){
  Session.set("homesearch",null);
}

Template.home.helpers({
  language:function(){
    return Session.get("japanese");
  },
  homesearch:function(){
    return Session.get("homesearch");
  }
});

Template.home.events({
  'keydown input':function(e){
    Session.set("homesearch",true);
  },
  'focusout input':function(){
    Session.set("homesearch",null);
    $('.search-btn').val('');
  }
});