


AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();


let scrollToTopBtn = document.querySelector(".scrollToTopBtn")
let rootElement = document.documentElement
let TOGGLE_RATIO = 0.20;

function handleScroll() {
  // do something on scroll
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
    //show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    //hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}


function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

setTimeout(function () {
  document.querySelector(".preloader").style.display = "none";
}, 0000);

// particles js

// Set up variables
var menuTrigger = document.getElementById('trigger');
var menuContent = document.getElementById('menu');
var menuItems = document.getElementsByClassName('menu-item');

// Basic menu toggle
function menuToggle() {
  menuTrigger.classList.toggle('open');
  menuContent.classList.toggle('open');
}

// Toggle menu on trigger click
menuTrigger.onclick = function(){
  menuToggle();
}

// Toggle menu on same-page anchor click
var windowHref = window.location.protocol + '//' + window.location.host + window.location.pathname; // Don't include any existing anchors in URL

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function(e){
    var linkHref = this.getElementsByTagName('a')[0].href;
    if (linkHref.indexOf(windowHref) > -1) { // If the window's URL is found within the menu item's URL, toggle the menu
      menuToggle();
    }
  }
}



//Send email by EmailJs
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_nrbn7sw";
  const templateID = "template_4hyzsj6";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    // .catch(err=>console.log(err));

}

(function(){
  emailjs.init("i3gnvIE64_c9CMeNG");
})();

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}