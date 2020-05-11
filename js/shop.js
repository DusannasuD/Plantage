
// Change style of navbar on scroll
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

// Working with Cart
(function() {

	var addButtons = document.querySelectorAll(".btn");

	addButtons.forEach(function(btn) {
      btn.addEventListener("click", function(event) {
        
        if (event.target.classList.contains("btn")) {
          var imgPath = event.target.previousElementSibling.href;
          var position = imgPath.indexOf("images");
          var parPath = imgPath.slice(position);

          const item = {};
          item.img = parPath;
        
          var name = event.target.parentNode.nextElementSibling.textContent;
          item.namee = name;

          var price = event.target.parentNode.nextElementSibling.nextElementSibling.textContent;
          var finalPrice = price.slice(0, price.indexOf(" "));
          item.price = parseInt(finalPrice);

          const cartItem = document.createElement("div");
          cartItem.classList.add(".column", ".remove");
          cartItem.innerHTML = `
          <div id="cartContainer" style="display: flex">
            <div class="column">
              <img src="${item.img}" width="100%">
            </div>

            <div class="column"> 
              <p><span style="font-size: 0.75em; color: black;">${item.namee}</span><br>
              <span style="font-size: 0.9em; color: black;" class="itemPrice">${item.price},00</span><br>
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


          /*btn.innerHTML = "In cart";
            btn.disabled = true;*/

          cartNumbers(item);
          totalCost(item);
          removeItem();
        }
      });
	});

	// Check session storage on load
	/*function onLoadCartNumbers() {
	  let productNumbers = sessionStorage.getItem("cartNumbers");
	  let cartProducts = sessionStorage.getItem("productsInCart");

	  if (productNumbers) {
	  	document.getElementById("number").textContent = productNumbers;
	  }

	  if (cartProducts) {
	  	document.getElementById("cartContainer").innerHTML = cartProducts;
	  }
	}*/

    // Session storage
	function cartNumbers(product) {

	  let productNumbers = sessionStorage.getItem("cartNumbers");
	  productNumbers = parseInt(productNumbers);

	  if (productNumbers) {
	  	sessionStorage.setItem("cartNumbers", productNumbers + 1);
	  	document.getElementById("number").textContent = productNumbers + 1;
	  } else {
	  	sessionStorage.setItem("cartNumbers", 1);
	  	document.getElementById("number").textContent = 1;
	  }

	  setItems(product);
	}

	function setItems(product) {
      let cartProducts = sessionStorage.getItem("productsInCart");
      cartProducts = JSON.parse(cartProducts);

      if (cartProducts != null) { 

      	if (cartProducts[product.namee] == undefined) {
          cartProducts = {
          	...cartProducts,
          	[product.namee]: product
          }
      	}

      	cartProducts[product.namee].inCart += 1;

      } else {
      	product.inCart = 1;
	    cartProducts = {[product.namee]: product};
      }

	  sessionStorage.setItem("productsInCart", JSON.stringify(cartProducts));
	}

	// Total cost
	function totalCost(product) {
      let cartCost = sessionStorage.getItem("totalCost");
      
      if (cartCost != null) {
      	cartCost = parseInt(cartCost);
      	sessionStorage.setItem("totalCost", cartCost + product.price);
      	document.getElementById("total").textContent = product.price + cartCost + ",00";
      } else {
        sessionStorage.setItem("totalCost", product.price);
        document.getElementById("total").textContent = product.price + ",00";
      }
	}

	function removeItem() {
      let removeBtns = document.querySelectorAll(".fa-trash");
      let productNumbers = sessionStorage.getItem("cartNumbers");
	  productNumbers = parseInt(productNumbers);
	  let cartCost = sessionStorage.getItem("totalCost");
	  cartCost = parseInt(cartCost);
	  let cartProducts = sessionStorage.getItem("productsInCart");
      cartProducts = JSON.parse(cartProducts);

      for (let i = 0; i < removeBtns.length; i++) {
      	removeBtns[i].addEventListener("click", function(event) {
      	  
          let item = event.target.parentNode.parentNode.parentElement;
          item.remove();

          let prodPrice = event.target.parentElement.parentElement.previousElementSibling.firstChild.nextSibling.lastChild.
          previousSibling.previousSibling.textContent;
          let priceFixed = prodPrice.slice(0, prodPrice.indexOf(","));
          let finalPrice = parseInt(priceFixed);

          let prodName = event.target.parentElement.parentElement.previousElementSibling.firstChild.nextSibling.
          firstChild.textContent;

          // Update cartNumbers
          sessionStorage.setItem("cartNumbers", productNumbers - 1);
          document.getElementById("number").textContent = productNumbers - 1;

          // Update totalCost
          sessionStorage.setItem("totalCost", cartCost - finalPrice);
      	  document.getElementById("total").textContent = cartCost - finalPrice;

      	  // Update products in session storage
      	  cartProducts[prodName].inCart -= 1;
      	  sessionStorage.setItem("productsInCart", JSON.stringify(cartProducts));
      	});
      }
	}

	//onLoadCartNumbers();
})();

//Alert repeated only once
$(function() {
      $(".btn").on('click.once', function() {
          alert("Product added to the cart. \nClick on Cart button to finish order.");
          $(".btn").off('click.once');
      })            
 });

