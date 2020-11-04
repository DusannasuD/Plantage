
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  let prods = localStorage.getItem("productsInCart");
  let products = JSON.parse(prods);

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
  //let type = url.searchParams.get("type");
  //let subtype = url.searchParams.get("subtype");

  fetch("http://localhost:3000/blogs", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => {
    let items = `<div class="row"></div>`;

    data.forEach(function(item) {

        items += `
          <div class="column">
            <img src="${item.image}" alt="Blog image" width="100%">
            <p style="font-size: 1.125em; margin-top: 30px;">${item.date}</p>
            <p style="font-size: 1.75em; font-weight: bold; margin-top: 0; margin-bottom: 10px;">${item.title}</p>
            <div style="height: 100px; overflow: hidden; margin-bottom: 30px;">
              <p style="font-size: 1.25em;">${item.text}</p>
            </div>
            <a href="blog_article.html?id=${item.blogId}" onclick="openArticle(${item.blogId})">
              <p>PROČITAJ VIŠE</p>
            </a>
            <hr>
          </div>
      `;
    });

    document.getElementById("section2").innerHTML = items;
  })
}

// Open article
function openArticle(id) {

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
      window.location.href = "blog.html";
    } else {
      alert("Uspešno ste se prijavili na Newsletter!");
      window.location.href = "blog.html";
    }
  })
}