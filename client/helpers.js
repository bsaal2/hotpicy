
Handlebars.registerHelper('changeJp', function(context, options) {
  var temp=document.createElement("p");
  temp.innerHTML=context;
  return temp.innerHTML;
});