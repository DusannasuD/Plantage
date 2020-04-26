
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
  $(".btn").click(function(){
    $("#products").slideDown("slow");
    $("#purchasebtn").show("slow");
    $("#empty").hide("slow");
  });
});*/


	var allBtn = document.querySelectorAll(".btn");
	console.log("Found", allBtn.length, "div which class starts with 'button'.");

	for (var i = 0; i < allBtn.length; i++) {
		allBtn[i].addEventListener("click", function() {
			console.clear();
			console.log("You clicked", this.innerHTML);
		});
	}
