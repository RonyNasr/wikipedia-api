var Wikipedia = require('./../js/wikipedia.js').wikipediaModule;

$(document).ready(function(){
  $("#search").click(function(event){
    var currentWikipedia = new Wikipedia();
    var word = $("#word").val();
    $("#word").val("");
    var definition = currentWikipedia.search(word);
    $("#definition").append("<h3>"+ word +"</h3>");
    $("#definition").append("<p>" + definition +"</p>");
  });
});
