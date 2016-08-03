function Wikipedia() {

}

Wikipedia.prototype.search = function (word) {
  $wgCrossSiteAJAXdomains = Array( '*' );
  $wgCrossSiteAJAXdomains = Array( 'en.wikipedia.org', 'en.wikibooks.org' );
  $wgCrossSiteAJAXdomains = Array( '*.wikipedia.org' );

  $.ajax('https://en.wiktionary.org/w/api.php?action=query&titles=' + word + '&prop=revisions&rvprop=content&format=jsonfm').then(function(response) {
    console.log(response.text);
   $("#definition").append(response);
 }).fail(function(error) {
   return("Error!");
 });
};

exports.wikipediaModule = Wikipedia;
