$(function(){
  //start up code goes here
  //alert("this works!");
//$('#title').html("Using jQuery i changed this text oh shivani!");

//$("#first").html("<h3>Great quotes</h3>");
$("#first").prepend("<h2>Great quotes</h2>");
$("#first").append("<h2>Do What you love to do!</h2>");
//before, after, insertBefore, insertAfter work OUTSIDE
//the given selection.

//$("#myAnchor").attr("href","http://channel9.msdn.com");

$("#title").addClass("standout");
});

//css selectors
/*
$('.important')
$('#myFirstParagraph')
$('p.').fadeOut();

jQuery('<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"</div>');
$.myCustomMethod=function() {alert('hi');};

jQuery.listBox={
  show:function() {},
  hide:function() {},
  postition:function() {},
  initiate:function() {}
  }
*/
//jQuery('#myFirstParagraph').fadeOut(500).fadeIn(500);
