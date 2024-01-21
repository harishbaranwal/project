
function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.querySelector('.hamburger').addEventListener('click', function() {
  console.log('Hamburger clicked');
  openNav();
});


function openNav() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var sidenavWidth = (screenWidth < 400) ? "100px" : "150px";
  document.getElementById("mySidenav").style.width = sidenavWidth;
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.querySelector('.hamburger').addEventListener('click', function() {
  console.log('Hamburger clicked');
  openNav();
});




var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 4000);
  var x;
  const img1 = document.querySelectorAll(".heading-section>.ads>.images > img");
  const img2 = document.querySelectorAll(".box>.ads>.images > img");
  for(x = 0; x < img1.length; x++){
    img1[x].style.display = "none";
  }
  for(x = 0; x < img2.length; x++){
    img2[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img1.length){indexValue = 1}
  img1[indexValue -1].style.display = "block";
  if(indexValue > img2.length){indexValue = 1}
  img2[indexValue -1].style.display = "block";
}
slideShow();



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  document.querySelectorAll('a[href^="#"]').forEach(function (el) {
      var section = document.querySelector(el.getAttribute('href'));
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          el.classList.add('active');
      } else {
          el.classList.remove('active');
      }
  });
});