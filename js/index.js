
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  checkLocalStorage();
  getProducts();
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

  fetch("http://localhost:3000/blogs", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => {
    let article = `<div class="row"></div>`;

    data.forEach(function(item) {
      let article1 = data.length;
      let article2 = data.length - 1;
      let article3 = data.length - 2;

      if ((item.blogId == article1) || (item.blogId == article2) || (item.blogId == article3)) {
        article += `
          <div class="column">
            <img src="${item.image}" alt="Blog image" width="100%">
            <p>${item.date}</p>
            <p>${item.title}</p>
            <div>
              <p>${item.text}</p>
            </div>
            <a href="blog_article.html?id=${item.blogId}" onclick="openArticle(${item.blogId})">
              <p>PROČITAJ VIŠE</p>
            </a>
            <hr>
          </div>
      `;
      }
    });

    document.getElementById("clanci").innerHTML = article;
    
  })
}

// Open article
function openArticle(id) {
 console.log(id);
}

// Open navigation menu
function openMenu() {
  document.getElementById("mob-nav").style.width = "100%";
}

// Close navigation menu
function closeMenu() {
  document.getElementById("mob-nav").style.width = "0%";
}

// Open/close submenu
function openSubmenu() {

 if (event.target.nextElementSibling.style.display == "block") {
  event.target.nextElementSibling.style.display = "none";
 } else {
   event.target.nextElementSibling.style.display = "block";
 }
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
      window.location.href = "index.html";
    } else {
      alert("Uspešno ste se prijavili na Newsletter!");
      window.location.href = "index.html";
    }
  })
}
