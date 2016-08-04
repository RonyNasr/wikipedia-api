var Wikipedia = require('./../js/wikipedia.js').wikipediaModule;

$(document).ready(function(){
  $("#search").click(function(event){
    var currentWikipedia = new Wikipedia();
    var word = $("#word").val();
    $("#word").val("");
    $("#word").select();

    currentWikipedia.search(word, displayResults);


  });
});

$(document).on("mouseup", function (e) {

  var selected = getSelection();
  var range = selected.getRangeAt(0);
  if(selected.toString().length > 1){
    word = selected.toString();
    $("#word").val(word);
    $("#search").click();
  }
  selected.removeAllRanges();
});

function getSelection() {
  var seltxt = '';
  if (window.getSelection) {
    seltxt = window.getSelection();
  } else if (document.getSelection) {
    seltxt = document.getSelection();
  } else if (document.selection) {
    seltxt = document.selection.createRange().text;
  }
  else return;
  return seltxt;
}

function displayResults(result) {
  $(".modal-title").text(word);
  $(".modal-body p").text(result);
  var htmlText = "";
  htmlText = htmlText +
            '<div id="result-modal" class="modal fade"   tabindex="-1"role="dialog">' +
              '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title">'+ word +'</h4>' +
                  '</div>' +
                  '<div class="modal-body">' +
                    '<p>' + result + '</p>'+
                  '</div>'+
                '</div>' +
              '</div>' +
            '</div>';
  $("#definition").append(htmlText);
  $("#result-modal").modal('show');
  // $("#definition").show();
}
