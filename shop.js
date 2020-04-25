
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").style = 
        "padding-bottom:10px; background-color:white; padding-top:10px; transition:0.4s; box-shadow:2px 2px 2px lightgrey";
    } else {
        document.getElementById("nav").style = "padding-left: 5px; padding-top: 10px; transition:0.4s";
    }
}

// Remove product from cart
/*$(document).ready(function(){
  $(".btn").click(function(){
    $("#products").slideUp("slow");
    $("#purchasebtn").slideUp("slow");
    $("#empty").show("slow");
  });
});

//Add to cart 
$(document).ready(function(){
  $("#purchasebtn").hide();
  $(".btn8").click(function(){
    $("#products").slideDown("slow");
    $("#purchasebtn").show("slow");
    $("#empty").hide("slow");
  });
});*/

function addToCart() {
	var addBtn = document.getElementsByClassName(".btn");

	addBtn.forEach(function(btn) {
		btn.addEventlistener("click", function(event) {
		  if (event.target.parentElement.classList.contains(".btn")) {
		  	console.log(event.target.parentElement.previousSibling.src);
		  }
		});
	});
}