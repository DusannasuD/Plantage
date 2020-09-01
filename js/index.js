// Show Newsletter form on click
$(document).ready(function(){
  $("#newsletter_btn").click(function(){
    $("#newsletter_form").fadeIn(500);
  });
});

//Close Newsletter form
$(document).ready(function(){
  $(".close_form").click(function(){
    $("#newsletter_form").fadeOut(500);
  });
});
