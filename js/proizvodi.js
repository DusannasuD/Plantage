
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  getProducts();
  checkLocalStorage();
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

// Get products
function getProducts() {
  let address = window.location.href;
  let url = new URL(address);
  let type = url.searchParams.get("type");
  let subtype = url.searchParams.get("subtype");

  fetch("http://localhost:3000/products", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => {
    let menu = `<div></div>`;
    let items = `<div class="row"></div>`;

    data.forEach(function(item) {
      if ((item.type.typeName.toLowerCase() == type) && (item.subtype.subtypeName.toLowerCase() == subtype)) {
        menu = `
          <ul class="breadcrumb">
            <li><a href="prodavnica.html">Prodavnica</a></li>
            <li><a href="cvecara_meni.html">Cvećara</a></li>
            <li><a class="current">${item.subtype.subtypeName}</a></li>
          </ul>
        `;

        document.getElementById("proizvodi-menu").innerHTML = menu;

        items += `
          <div class="column">
            <a href="proizvod.html?id=${item.productId}"><img class="product" src="${item.picture}" style="width: 100%" 
            onclick="openProduct(${item.productId})"></a>
            <p style="text-align: center; font-size: 28px; font-weight: bold; color: grey;">${item.productName}</p>
            <p style="text-align: center; font-size: 28px; font-weight: bold; margin-top: -20px;">${item.price}</p>
          </div>
      `;
      };
    });

    document.getElementById("gallery").innerHTML = items;
  })
}

function openProduct(id) {

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