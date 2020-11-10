
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
  let prods = localStorage.getItem("productsInCart");
  let products = JSON.parse(prods);

  checkLocalStorage();
  articlePage();
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

function articlePage() {
  let address = window.location.href;
  let url = new URL(address);
  let id = url.searchParams.get("id");

  fetch(`http://localhost:3000/blogs/${id}`, {
  method: "GET"
  })
  .then(res => res.json())
  .then(data => {
    const article = document.getElementById("section2");

    article.innerHTML = `
    <!-- Article -->
      <div class="blog-article">
        <div style="flex-basis:80%;" class="left-sidebar">
          <img src="${data.image}" alt="Blog image" width="100%">
          <p style="font-size: 1.75em; font-weight: bold; margin-top: 60px; margin-bottom: 10px;">${data.title}</p>
          <p style="font-size: 1.25em; margin-top: 30px">${data.text}</p>
        </div>

        <div style="flex-basis: 20%;" class="sidebar">
          <p style="margin-top: 0; margin-bottom: 20px; font-size: 22px; font-weight: bold;">Kategorije</p>
          <p><em>${data.category1}</em></p>
          <p><em>${data.category2}</em></p>
          <p><em>${data.category3}</em></p>
          <p><em>${data.category4}</em></p>
          <p><em>${data.category5}</em></p>
          <p><em>${data.category6}</em></p>
          <p><em>${data.category7}</em></p>
          <p><em>${data.category8}</em></p>
          <p><em>${data.category9}</em></p>
          <p><em>${data.category10}</em></p>

          <p style="font-size: 22px; font-weight: bold; margin-top: 50px;">Tagovi</p>
          <p style="margin-top: 20px;">${data.tags}</p>

          <p style="font-size: 22px; font-weight: bold; margin-top: 50px;">Follow</p>
          <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fa fa-instagram" style="padding-left: 10px;"></i></a>
          <a href="#" target="_blank"><i class="fa fa-twitter" style="padding-left: 10px;"></i></a>
          <a href="#" target="_blank"><i class="fa fa-linkedin" style="padding-left: 10px;"></i></a>
        </div>

      </div>
    `;
  })
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