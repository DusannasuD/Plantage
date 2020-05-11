
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