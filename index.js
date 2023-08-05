// scroll to top button

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function(){
  if (window.scrollY > 450) { // Adjust the value as per your preference
    scrollToTopBtn.classList.remove("unshow");
    document.querySelector("#navigation-bar").setAttribute("style", "background-color: lightcoral; box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);");
  } else {
    scrollToTopBtn.classList.add("unshow");
    document.querySelector("#navigation-bar").setAttribute("style", "background-color: rgb(5, 6, 73); box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);");
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/////////////////

// navbar 

const header = document.querySelector(".navbar");

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

//////////////


/* for small devices */
document.getElementById('toggleBtn').addEventListener('click', function(event) {
  var naviList = document.querySelector('.navi-btns-list');
  if (naviList.style.display === 'block') {
      naviList.style.display = 'none';
  } else {
      naviList.style.display = 'block';
  }
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener('click', function(event) {
  var naviList = document.querySelector('.navi-btns-list');
  var toggleBtn = document.getElementById('toggleBtn');

  if (event.target !== naviList && event.target !== toggleBtn) {
      naviList.style.display = 'none';
  }
});


/////////////////