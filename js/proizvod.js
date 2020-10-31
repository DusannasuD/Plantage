
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  checkLocalStorage();
  productPage();
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

function productPage() {
  let address = window.location.href;
  let url = new URL(address);
  let id = url.searchParams.get("id");

  fetch(`http://localhost:3000/products/${id}`, {
  method: "GET"
  })
  .then(res => res.json())
  .then(data => {
    const cartItem = document.getElementById("section2");

    cartItem.innerHTML = `
    <!-- Store menu -->
      <div>
        <ul class="breadcrumb">
          <li><a href="prodavnica.html">Prodavnica</a></li>
          <li><a href="cvecara_meni.html">${data.type.typeName}</a></li>
          <li><a href="proizvodi.html?type=${data.type.typeName.toLowerCase()}&subtype=${data.subtype.subtypeName.toLowerCase()}">
          ${data.subtype.subtypeName}</a></li>
        </ul>
      </div>

    <!-- Proizvod -->
      <div class="proizvod">
        <div style="width: 400px; height: auto; overflow: hidden;">
          <img src="${data.picture}" width="100%" class="picture">
        </div>

        <div style="padding: 0 50px;">
          <p class="prod-title" style="color: black; margin-top: -10px; margin-bottom: 0; font-size: 42px;">${data.productName}</p>
          <p><span class="prod-price" style="color: rgb(50, 205, 50); font-size: 28px;"><strong>${data.price},00</strong></span></p>
          <p style="margin-bottom: 20px;">${data.about}</p>

          <div style="display: flex; flex-direction: row">
            <button style="margin-right: 8px; background-color: white; display: flex; flex-direction: row; 
            align-items: center; padding: 3px 20px;">
              <span class="quantity" style="padding-right: 30px; padding-left: 10px;">1</span>
              <span style= "display: flex; flex-direction: column;">
                <i class="fa fa-angle-up" style="padding-bottom: 4px;" onclick="quantityUp()"></i>
                <i class="fa fa-angle-down" onclick="quantityDown()"></i>
              </span>
            </button>

            <a href="korpa.html?id=${data.productId}">
              <button class="cart_button" onclick="addToCart(${data.productId})">Dodaj u korpu</button>
            </a>
          </div>

          <p style="margin-top: 20px;">Kategorija: Fotografija</p>
          <p class="kt">Tagovi: List, Fotografija, Art</p>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fa fa-instagram" style="padding-left: 8px;"></i></a>
          <a href="#"><i class="fa fa-twitter" style="padding-left: 8px;"></i></a>
        </div>
      </div>

      <div class="similar-images" style="width: 400px; height: auto; display: flex;">
        <img src="${data.picture}" alt="Product image" style="padding-right: 6px;" onclick="angleImg()"></img>
        <img src="${data.angle1}" alt="Product image" style="padding-right: 6px;" onclick="angleImg()"></img>
        <img src="${data.angle2}" alt="Product image" style="padding-right: 6px;" onclick="angleImg()"></img>
        <img src="${data.angle3}" alt="Product image" onclick="angleImg()"></img>
      </div>

      <!-- Opis proizvoda -->
      <div class="tab">
        <button class="tablinks active" onclick="openTab(event, 'Opis')">Opis</button>
        <button class="tablinks" onclick="openTab(event, 'Informacije')">Informacije</button>
        <button class="tablinks" onclick="openTab(event, 'Komentari')">Komentari</button>
      </div>
      <hr style="margin: 0 auto; display: block; width: 80%;">

      <div id="Opis" class="tabcontent" style="display: block;">
        <p>${data.opis}</p>
      </div>

      <div id="Informacije" class="tabcontent">
        <p>${data.informacije}</p> 
      </div>

      <div id="Komentari" class="tabcontent">
        <p>Komentari proizvoda.</p>
      </div>

      <!-- Slicni proizvodi -->
      <div id="slicni_proizvodi">
        <p style="font-size: 42px; font-weight: bold; color: black; text-align: center;">Slični proizvodi</p>
        <div class="img_row">
          <div class="similar-prod">
            <img src="${data.picture}" alt="Plantart proizvod" width="90%" class="pic">
            <p style="text-align: center; font-weight: bold; font-size: 20px;" class="pt">${data.productName}</p>
            <p style="text-align: center; font-weight: bold; color: black; font-size: 20px;" class="pp">
            ${data.price},00</p>
          </div>

          <div class="similar-prod">
            <img src="${data.picture}" alt="Plantart proizvod" width="90%" class="pic">
            <p style="text-align: center; font-weight: bold; font-size: 20px;" class="pt">${data.productName}</p>
            <p style="text-align: center; font-weight: bold; color: black; font-size: 20px;" class="pp">
            ${data.price},00</p>
          </div>

          <div class="similar-prod">
            <img src="${data.picture}" alt="Plantart proizvod" width="90%" class="pic">
            <p style="text-align: center; font-weight: bold; font-size: 20px;" class="pt">${data.productName}</p>
            <p style="text-align: center; font-weight: bold; color: black; font-size: 20px;" class="pp">
            ${data.price},00</p>
          </div>
        </div>

      </div>
    `;
  })
}

function addToCart(id) {
  cartNumbers();
  addToLocalStorage(id);
}

function cartNumbers() {
  //let productNumbers = localStorage.getItem("cartNumbers");
  //productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems) {
    let sum = 0;

    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].quan;
      //localStorage.setItem("cartNumbers", sum);
      document.getElementById("cart").style.display = "block";
      document.getElementById("cart").textContent = sum;
    }
  } else {
    let number = document.getElementsByClassName("quantity")[0].textContent;
    document.getElementById("cart").textContent = number;
    //localStorage.setItem("cartNumbers", number);
  }
}

function addToLocalStorage(id) {
  let img = document.getElementsByClassName("picture")[0].src;
  let title = document.getElementsByClassName("prod-title")[0].innerHTML;
  let prodPrice = parseInt(document.getElementsByClassName("prod-price")[0].textContent + 0);
  let quan = parseInt(document.getElementsByClassName("quantity")[0].textContent);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let item = {id, img, title, prodPrice, quan}

  if (cartItems != null) {
      let unique = true;
      cartItems.forEach(cartItem => {
        if (cartItem.id == id) {
          cartItem.quan += item.quan;
          unique = false;
        }
      });

      if (unique) {
        cartItems.push(item);
      }
  } else {
    cartItems = [item];
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));

  totalCost(prodPrice, quan);
}

// Total cost
function totalCost(price, quantity) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + (price * quantity));
  } else {
    let number = document.getElementsByClassName("quantity")[0].textContent;
    localStorage.setItem("totalCost", price * number);
  }
}

// Increase quantity 
function quantityUp() {

  document.getElementsByClassName("quantity")[0].textContent++;

}

// Decrease quantity
function quantityDown() {
  let quantity = document.getElementsByClassName("quantity")[0].textContent;

  if (quantity > 1)
    document.getElementsByClassName("quantity")[0].textContent--;
}

// Change image
function angleImg() {
  let source = event.target.src;
  let image = document.getElementsByClassName("picture")[0];
  image.src = source;
}

//Open tabs on click
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
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

