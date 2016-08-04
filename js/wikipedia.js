function Wikipedia() {
}

Wikipedia.prototype.search = function (word,displayFunction) {
   word = word.replace(/\b\w/g, function(l){ return l.toUpperCase() });
  console.log(word);
 $.ajax('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles='+ word).then(function(response) {

   var pageid = getPageId(response);
   var result = response.query.pages[pageid[0]].extract;
    displayFunction(result);
   return result;
   console.log(result);
 }).fail(function(error) {
   return("Error!");
 });
};

function getPageId(data) {
  var pageid = [];
  for( var id in data.query.pages ) {
    pageid.push( id );
  }
  return pageid;
}

exports.wikipediaModule = Wikipedia;
