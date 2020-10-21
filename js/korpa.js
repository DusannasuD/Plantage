
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  let prods = localStorage.getItem("productsInCart");
  let products = JSON.parse(prods);

  checkLocalStorage();
  cartItem(products);
  updateTotal();
}

// Check Local Storege on load and update cart number
function checkLocalStorage() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems) {
    let sum = 0;

    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].quan;
      document.getElementById("cart").style.display = "block";
      document.getElementById("cart").textContent = sum;
    }
  }
}

function cartItem(products) {

  cartItem = document.getElementById("section2");
    cartItem.innerHTML = `
    <!-- Proizvod -->
      <div style="display: flex; flex-directoin: row; margin-top: 100px;">
        <p class="odabrani-proizvod" style="flex-shrink: 30;"></p>
        <p class="odabrani-proizvod">Proizvod</p>
        <p class="odabrani-proizvod">Cena</p>
        <p class="odabrani-proizvod">Količina</p>
        <p class="odabrani-proizvod">Ukupno</p>
      </div>

      <hr style="margin-top: -20px;">
    `
    if (products != null) {
      products.forEach(product => {

      cartItem.innerHTML += `
        <div class="productInCart" style="display: flex; flex-directoin: row; padding: 15px 0;">
          <!-- Remove button -->
          <div class="odabrani-proizvod" style="flex-shrink: 30;">
            <span><i class="fa fa-times-circle" style="font-size: 25px;" onclick="removeItem(${product.id})"></i></span>
          </div>

          <!-- Product image -->
          <div class="odabrani-proizvod">
            <img src="${product.img}" width="80%" class="picture">
          </div>

          <!-- Product price -->
          <div class="odabrani-proizvod">
            <p><span class="single-price"><strong style="font-size: 20px; font-weight: normal;" class="prod-price">
            ${product.prodPrice}</strong></span></p>
          </div>

          <!-- Quantity -->
          <div class="odabrani-proizvod"> 
            <div style="display: flex; flex-direction: row">
              <button style="margin-right: 8px; background-color: white; display: flex; flex-direction: row; 
              align-items: center; padding: 3px 20px;">
                <span style="padding-right: 30px; padding-left: 10px;" class="quantity">${product.quan}</span>
                <span style= "display: flex; flex-direction: column;" class="kol">
                  <i class="fa fa-angle-up" style="padding-bottom: 2px;" onclick="quantityUp(${product.id})"></i>
                  <i class="fa fa-angle-down" onclick="quantityDown(${product.id})"></i>
                </span>
              </button>
            </div>
          </div>

          <!-- Sigle product total price -->
          <div class="odabrani-proizvod">
            <p><span class="ukupno" style="font-size: 20px; font-weight: normal;">
            ${product.prodPrice * product.quan}</span></p>
          </div>
        </div>
        <hr>
      <!-- End Proizvod -->
      `
      })
    } else {
      let txt = document.createElement("div"); 
      let text = document.createTextNode("Korpa je trenutno prazna.");

      txt.appendChild(text);
      cartItem.appendChild(txt);
    }
      

      cartItem.innerHTML += `
      <!-- Proizvod info -->
      <div style="margin-top: 100px;">
        <p style="font-size: 28px; font-weight: bold; color: black;">Ukupno</p>
      </div>

      <div style="display: flex; flex-directoin: row;">
        <p class="proizvod-info">Cena proizvoda</p>
        <p class="proizvod-info"><span></span></p>
      </div>
      <hr style="margin-top: 10px; margin-bottom: 10px;">

      <div style="display: flex; flex-directoin: row;">
        <p class="proizvod-info">Način plaćanja</p>
        <form style="padding-top: 20px;">
          <input type="radio" id="kartica" name="nacin-placanja" value="kartica">
          <label for="kartica">Plaćanje putem kartice</label><br>
          <input type="radio" id="pouzecem" name="nacin-placanja" value="pouzecem">
          <label for="pouzecem">Pouzećem</label><br>
        </form>
      </div>
      <hr style="margin-top: 10px; margin-bottom: 10px;">

      <div style="display: flex; flex-directoin: row;">
        <p class="proizvod-info">Ukupno</p>
        <p class="proizvod-info"><span class="total-price"></span></p>
      </div>
      <hr style="margin-top: 10px; margin-bottom: 10px;">

      <button id="plati">Plati</button>

    <!-- End Proizvod info -->
    ` 
}

// Total price
function updateTotal() {
  let total = JSON.parse(localStorage.getItem("totalCost"));
  
  if (total) {
    document.getElementsByClassName("total-price")[0].textContent = total + " + poštarina";
  }
}

// Increase quantity 
function quantityUp(id) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  let price = event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.
  firstElementChild.firstElementChild.textContent;
  price = parseInt(price);

  cartItems.forEach(item => {
  let singleProdPrice = event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.
  firstElementChild.textContent;
  singleProdPrice = parseInt(singleProdPrice);

    if (item.id == id) {
      item.quan++;
      event.target.parentElement.parentElement.firstElementChild.textContent++;
      event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.
      firstElementChild.textContent = parseInt(singleProdPrice) + price;
    }
  });

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  localStorage.setItem("totalCost", cartCost + price);
  checkLocalStorage();
  updateTotal();
}

// Decrease quantity
function quantityDown(id) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  let price = event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.
  firstElementChild.firstElementChild.textContent;
  price = parseInt(price);

  cartItems.forEach(item => {
  let singleProdPrice = event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.
  firstElementChild.textContent;
  singleProdPrice = parseInt(singleProdPrice);

    if (item.id == id) {

      if (item.quan > 1) {
        item.quan--;
        event.target.parentElement.parentElement.firstElementChild.textContent--;
        event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.
        firstElementChild.textContent = parseInt(singleProdPrice) - price;
        localStorage.setItem("totalCost", cartCost - price);
      }
    }
  });

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  checkLocalStorage();
  updateTotal();
}

// Remove product
function removeItem(id) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);

  cartItems.forEach(item => {
    let prod = event.target.parentElement.parentElement.parentElement;
    let line = event.target.parentElement.parentElement.parentElement.nextElementSibling;
    let price = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.
    nextElementSibling.textContent;
    price = parseInt(price);

    if (item.id == id) {
      prod.remove();
      line.remove();
      localStorage.setItem("totalCost", cartCost - price);
      cartItems.shift(item);
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  });

  updateTotal();
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

// Subscribe to Newsletter
let submitButton = document.getElementById("addPost");
submitButton.addEventListener("submit", addPost);

function addPost(e) {
  e.preventDefault();

  let name = document.getElementById("fname").value;
  let mail = document.getElementById("mail").value;

  fetch("http://localhost:3000/subscribers", { 
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    nameAndSurname: name, 
    email: mail
    })
  })
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(function message() {
    if (obj.statusCode) {
      alert("Greška! Ime ili email već postoji.");
    } else {
      alert("Uspešno ste se prijavili na Newsletter!");
    }
  })
}
