$(document).ready(function(){                    
  
  $("#PortfolioButton").click(function(){
      $('html,body').animate({
        scrollTop:$('#PortfolioInfo').offset() .top+100},500);
  });
 
 $("#AboutButton").click(function(){
      $('html,body').animate({
        scrollTop:($('#AboutMeInfo').offset().top+100)},500);
  });
 
$("#ContactButton").click(function(){
  $('html,body').animate({
        scrollTop:($('#contactsSection').offset().top+200)},500);
  });

$("#HomeButton").click(function(){
    $('html,body').animate({
      scrollTop:0 },500);
  });
  
});
