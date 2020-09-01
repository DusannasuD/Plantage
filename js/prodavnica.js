



if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  // Load products
  products();

  //Open product

}

// Get products 
function products() {
  fetch("http://localhost:3000/products", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => {
    let items = `<div class="row"></div>`;

    data.forEach(function(item) {

      if (item.productId >= 4) {
        items += `
          <div class="column">
            <img class="product" src="${item.picture}" style="width: 100%">
            <p style="text-align: center; font-size: 28px; font-weight: bold; color: grey;">${item.productName}</p>
            <p style="text-align: center; font-size: 28px; font-weight: bold; margin-top: -20px;">${item.price}</p>
          </div>
      `;
      let prod = document.getElementsByClassName(".product");
      for (let i = 0; i < prod.length; i++) {
      let p = prod[i];
      p.addEventListener("click", openProduct);        
    }
      };
    });

    document.getElementById("section2").innerHTML = items;
  })
}

//Open product
function openProduct(event) {
  console.log("clicked");
}

/*function openProduct(event) {
  let imagePath = event.target.src;
  let position = imagePath.indexOf("images");
  let image = imagePath.slice(position);

  let title = event.target.nextElementSibling.innerText;

  let prodPrice = event.target.nextElementSibling.nextElementSibling.innerText;
  let priceFixed = prodPrice.slice(0, prodPrice.indexOf(" "));
  let price = parseInt(priceFixed);

  let products = event.target.parentElement.parentElement;

  let navigation = event.target.parentElement.parentElement.previousElementSibling;

  let menu = event.target.parentElement.parentElement.nextElementSibling;

  openProductInCart(image, title, price, products, navigation, menu);
}*/

/*function openProductInCart(image, title, price, products, navigation, menu) {

  const cartItem = document.createElement("div");
  products.remove();
  navigation.remove();
  menu.style.display = "block";

    cartItem.classList.add(".itemMenu", ".prod_container", ".added_product");
    cartItem.innerHTML = `
      <div id="proizvod">
        <div class="added_product">
          <div>
          <img src="${image}" width="100%">
          </div>

          <div style="padding: 0 100px;">
          <h1 style="color: black; margin-bottom: 20px;">${title}</h1>
          <p><span style="color: rgb(50, 205, 50);"><strong>${price},00</strong></span></p>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, 
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet.</p>

          <button>Dodaj u korpu</button>
          <p>Kategorija: Fotografija</p>
          <p>Tagovi: List, Fotografija, Art</p>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fa fa-instagram" style="padding-left: 8px;"></i></a>
          <a href="#"><i class="fa fa-twitter" style="padding-left: 8px;"></i></a>
          </div>
        </div>

        <div class="opis">
          <h3 class="tablinks" onclick="openTab(event, 'Opis')" id="defaultOpen">Opis</h3>
          <h3 class="tablinks" onclick="openTab(event, 'Informacije')">Informacije</h3>
          <h3 class="tablinks" onclick="openTab(event, 'Komentari')">Komentari</h3>
        </div>

        <div id="opis_proizvoda" class="tabcontent">
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>

        <div id="informacije" class="tabcontent">
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>

        <div id="komentari" class="tabcontent">
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
    `;

  // Select container 
  const prodContainer = document.getElementById("container");
  prodContainer.appendChild(cartItem);
}*/

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}


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
