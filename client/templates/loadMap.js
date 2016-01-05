Tracker.autorun(function(){
   var position=Geolocation.latLng();
   Session.set("currentPlace",position);
  });

Meteor.startup(function() {
  GoogleMaps.load();
  });

Template.loadMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});


Template.loadMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      var position=Session.get("currentPlace");
      return {
        center: new google.maps.LatLng(position.lat, position.lng),
        zoom: 8
      };
    }
  },
  language:function(){
    return Session.get("japanese");
  }
});