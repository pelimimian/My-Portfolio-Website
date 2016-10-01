
$(document).ready(function()
{                    $("#FirstMessage").delay("slow").fadeIn("slow");
$("#SecondMessage").delay("2000").fadeIn("2000");
       $("#PortfolioButton").click(function()
 {
  $('html,body').animate({
    scrollTop:$('#PortfolioInfo').offset() .top-135
},500);
  });
 
 $("#AboutButton").click(function()
 {
  $('html,body').animate({
    scrollTop:($('#AboutMeInfo').offset().top-135)
},500);
  });
$("#ContactButton").click(function()
 {
  $('html,body').animate({
    scrollTop:($('#ButtonsContacts').offset().top)
},500);
  });
$("#ContactButton").click(function()
 {
  $('html,body').animate({
    scrollTop:($('#ButtonsContacts').offset().top)
},500);
  });

$("#HomeButton").click(function()
 {
  $('html,body').animate({
    scrollTop:0 },500);
  });

});