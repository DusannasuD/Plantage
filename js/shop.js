
// Change navbar style on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").style.cssText = 
        "padding-bottom:10px; background-color:white; padding-top:10px; transition:0.4s; box-shadow:2px 2px 2px lightgrey; z-index: 1;";
    } else {
        document.getElementById("nav").style.cssText = "padding-left: 5px; padding-top: 10px; transition:0.4s";
    }
}

// Fade in effect on load
window.addEventListener("load", function() {
	document.getElementById("images").style.cssText = "opacity: 1; transition: 1s";
	document.getElementById("navigation").style.cssText = "opacity: 1; transition: 1s";
});

// Fade in effect on load Illustrations
const illustrationsContainer = document.getElementById("illustrations");
const paintingsContainer = document.getElementById("images");
const pConOptions = {};
const pConObserver = new IntersectionObserver(function(entries, pConObserver) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
		  illustrationsContainer.style.cssText = "opacity: 1; transition: all 2s;";
		} else {
		  illustrationsContainer.style.cssText = "opacity: 0; transition: all 2s;";
		}
	})
}, pConOptions);

pConObserver.observe(illustrationsContainer);

// Open Cart
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.body.style.marginRight = "320px";
}

//Close cart
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginRight = "0";
}

// Open menu
$(document).ready(function(){
  $("#cvecara").click(function(){
    $(".tabcontent").slideToggle("slow");
  });
});

//Alert repeated only once
$(function() {
  $(".btn").on('click.once', function() {
    alert("Proizvod je dodat u korpu. \nKliknite na korpu kako biste izvrsili kupovinu.");
      $(".btn").off('click.once');
    })            
 });

// Cart
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

// Check session storage on load
  function onLoadCartNumbers() {
    let productNumbers = sessionStorage.getItem("cartNumbers");
    let cartProducts = sessionStorage.getItem("productsInCart");

    if (productNumbers) {
      document.getElementById("number").textContent = productNumbers;
    }

    if (cartProducts) {
      document.getElementById("cartContainer").innerHTML = cartProducts;
    }
  }

function ready() {
  //  Remove item
  let removeBtns = document.querySelectorAll(".fa-trash");

  for (let i = 0; i < removeBtns.length; i++) {
  let button = removeBtns[i];
  button.addEventListener("click", removeCartItem);
  }

  let addButtons = document.querySelectorAll(".btn");
  for (let i = 0; i < addButtons.length; i++) {
    let addToCartBtn = addButtons[i];
    addToCartBtn.addEventListener("click", addToCartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target.parentNode.parentNode.parentElement.remove();
  let prodPrice = event.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.
  nextElementSibling.nextElementSibling.innerText;
  let productPrice = prodPrice.slice(0, prodPrice.indexOf(","));
  let itemPrice = parseInt(productPrice);

  let cartCost = sessionStorage.getItem("totalCost");
 
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      sessionStorage.setItem("totalCost", cartCost - itemPrice);
      document.getElementById("total").textContent = cartCost - itemPrice + ",00";
    }

  let productNumbers = sessionStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

    if (productNumbers) {
      sessionStorage.setItem("cartNumbers", productNumbers - 1);
      document.getElementById("number").textContent = productNumbers - 1;
    } 
}

function addToCartClicked(event) {
  let addBtn = event.target.parentElement;

  let title = addBtn.nextElementSibling.innerHTML;

  let prodPrice = addBtn.nextElementSibling.nextElementSibling.innerText;
  let priceFixed = prodPrice.slice(0, prodPrice.indexOf(" "));
  let price = parseInt(priceFixed);

  let imgPath = event.target.previousElementSibling.href;
  let position = imgPath.indexOf("images");
  let image = imgPath.slice(position);

  addToCart(title, price, image);
  updateCartTotal(price);
}

// Add to cart
function addToCart(title, price, image) {
  const cartItem = document.createElement("div");

  let cartItems = document.getElementById("mySidenav");

    cartItem.classList.add(".column", ".remove");
    cartItem.innerHTML = `
      <div id="cartContainer" style="display: flex">
        <div class="column">
          <img src="${image}" width="100%">
        </div>

        <div class="column"> 
          <p><span style="font-size: 0.75em; color: black;">${title}</span><br>
            <span style="font-size: 0.9em; color: black;" class="itemPrice">${price},00</span><br>
          </p>
        </div>

        <div class="column">
          <span class="remove" style="font-size: 1.5em;"><i class="fa fa-trash"></i></span>
        </div>
      </div>  
    `;

  // Select cart 
  const cart = document.getElementById("mySidenav");
  const total = document.getElementById("bottom");

  cart.insertBefore(cartItem, total);
  cartItem.querySelectorAll(".fa-trash")[0].addEventListener("click", removeCartItem);
}

// Update total 
function updateCartTotal(price) {

  let cartCost = sessionStorage.getItem("totalCost");
 
      if (cartCost != null) {
        cartCost = parseInt(cartCost);
        sessionStorage.setItem("totalCost", cartCost + price);
        document.getElementById("total").textContent = price + cartCost + ",00";
      } else {
        sessionStorage.setItem("totalCost", price);
        document.getElementById("total").textContent = price + ",00";
      }

  let productNumbers = sessionStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

    if (productNumbers) {
      sessionStorage.setItem("cartNumbers", productNumbers + 1);
      document.getElementById("number").textContent = productNumbers + 1;
    } else {
      sessionStorage.setItem("cartNumbers", 1);
      document.getElementById("number").textContent = 1;
    }
}

onLoadCartNumbers();
