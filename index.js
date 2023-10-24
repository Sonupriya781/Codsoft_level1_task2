function openNavbar() { 
    document.getElementById("sideNavigationBar") 
        .style.width = "50%"; 
} 
function closeNavbar() { 
    document.getElementById("sideNavigationBar") 
        .style.width = "0%"; 
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 60;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);  