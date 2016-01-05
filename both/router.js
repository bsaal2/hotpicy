Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('restaurants',{path:'/restaurants'});
  this.route('restaurants.detail',{path:'/restaurants/details/:id',
  data:function(){
    Session.set("id",this.params.id);
    return restaurant_data.findOne({id:this.params.id});
  }});
  this.route("about",{path:'/about'});
  this.route("featured",{path:'/restaurants/featured'});
  this.route('feature.detail',{path:'/restaurants/featured/details/:id',
  data:function(){
    Session.set("id",this.params.id);
    return restaurant_data.findOne({id:this.params.id});
  }});
  this.route('featuredfood',{path:'/featured/food'});
  this.route('myfavourite',{path:'/favourite/restaurants'});
  this.route('foodList',{path:'/featured/food/list/:id',
   data:function(){
    Session.set("id",this.params.id);
   }});
  this.route("myfavouritedetail",{path:'/myfavourite/details/:id',
  data:function(){
    Session.set("id",this.params.id);
    return restaurant_data.findOne({id:this.params.id});
  }
  });
  this.route('loadMap',{path:'/nearby/place'});
 
});
