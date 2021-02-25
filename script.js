const nav = document.querySelector('.nav')
const meny_btn = document.querySelector('.my-fa-bars')
meny_btn.addEventListener('click', () => {
  console.log('hello')
  nav.classList.toggle('collapes')

  meny_btn.classList.toggle("toggle")
})


// -------------------------------Annimation DIV---------
const loading_annimation_div = document.getElementById('loading-annimation-div')

// ---------------------- Loading Annimation----------
const download = document.getElementById('search-btn')
download.addEventListener('click', loading)

function loading() {

  loading_annimation_div.classList.remove("hidden")
  fetch_cdn()

}
// ---------------------- Loading Annimation End- ---------


// ----------------------------Fetch API Request--------------------
const api = 'https://randomuser.me/api/'

function fetch_cdn() {

  fetch("https://randomuser.me/api/")

    // Converting received data to JSON 
    .then(response => response.json())
    .then(json => {

      console.log(json)
      loading_annimation_div.classList.add('hidden')


    });
}
// ----------------------------Fetch API Request--------------------




// ---------------------------Go To Top------------------------------

const mybutton = document.getElementById("my-arrow-top-icon");
window.onload = function () {
  mybutton.style.display = "none";
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click',topFunction)
function topFunction() {
  window.scrollTo({
    top: 0, // negative value acceptable
    left: 0,
    behavior: 'smooth'
});
}

// ---------------------------Go To Top End------------------------------



