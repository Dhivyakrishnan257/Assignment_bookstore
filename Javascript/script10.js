$(function(){

  $("#success").hide();
  $("#startover").addClass("hoverOut");
  var score=0;
$('#exhead').click(function(){
score++;
$("#score").text(score);
$("#success").show("fast").fadeOut(800);
});

$("#startover").hover(function)()
{
  score=0;
  $("#score").text(score);
  $("#startover").addClass("hoverIn").removeClass("hoverOut");
},function()
{
$('#startover').removeClass("hoverIn").addClass("hoverOut");
});
