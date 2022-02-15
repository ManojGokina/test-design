const itemsData = [
  { name: "Wooden Table Lamp", price: "$2,300", img: "./images/image98.png" },
  { name: "Shaped Sofa", price: "$2899", img: "./images/image89.png" },
  {
    name: "European Style Sofa",
    price: "$4890",
    img: "./images/Frame84581.png",
  },
  { name: "Long Single Tool", price: "$3499", img: "./images/image95.png" },
  { name: "Wooden Table Lamp", price: "$2,300", img: "./images/image98.png" },
  { name: "Shaped Sofa", price: "$2899", img: "./images/image89.png" },
  {
    name: "European Style Sofa",
    price: "$4890",
    img: "./images/Frame84581.png",
  },
  { name: "Long Single Tool", price: "$3499", img: "./images/image95.png" },
  { name: "Wooden Table Lamp", price: "$2,300", img: "./images/image98.png" },
  { name: "Shaped Sofa", price: "$2899", img: "./images/image89.png" },
  {
    name: "European Style Sofa",
    price: "$4890",
    img: "./images/Frame84581.png",
  },
  { name: "Long Single Tool", price: "$3499", img: "./images/image95.png" },
  { name: "Wooden Table Lamp", price: "$2,300", img: "./images/image98.png" },
  { name: "Shaped Sofa", price: "$2899", img: "./images/image89.png" },
  {
    name: "European Style Sofa",
    price: "$4890",
    img: "./images/Frame84581.png",
  },
  { name: "Long Single Tool", price: "$3499", img: "./images/image95.png" },
  { name: "Wooden Table Lamp", price: "$2,300", img: "./images/image98.png" },
  { name: "Shaped Sofa", price: "$2899", img: "./images/image89.png" },
  {
    name: "European Style Sofa",
    price: "$4890",
    img: "./images/Frame84581.png",
  },
  { name: "Long Single Tool", price: "$3499", img: "./images/image95.png" },
];

function loadTableData(itemsData) {
  const mainDiv = document.getElementById("itemBody");
  let htmlData = "";

  for (let item of itemsData) {
    htmlData += `<div class="itemsContaner">
       <img src=${item.img} alt="item image" class="itemImage" />
       <h2>${item.name}</h2>
       <h3>${item.price}</h3>
     </div>`;
  }

  console.log(htmlData);
  mainDiv.innerHTML = htmlData;
}
loadTableData(itemsData);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
