var swiper = new Swiper(".mini-product-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".product-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  watchOverflow: true,
  spaceBetween: 30,
  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
  thumbs: {
    swiper: swiper,
  },
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}
let buttonCountPlus = document.querySelectorAll(".buttonCountPlus");
let buttonCountMinus = document.querySelectorAll(".buttonCountMinus");
let number = 1;

buttonCountPlus.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    let c = element.parentNode;
    let count = c.querySelector(".buttonCountNumber");
    let jj = c.querySelector(".buttonCountVal");
    console.log(jj);
    let countPlus = jj.value;
    if (+countPlus <= 10) {
      count.innerHTML++;
      jj.value = count.innerHTML;
    }
  };
});

buttonCountMinus.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    let c = element.parentNode;
    let pc = c.parentNode;
    let count = c.querySelector(".buttonCountNumber");
    let jj = c.querySelector(".buttonCountVal");
    let countPlus = jj.value;
    console.log(countPlus);
    if (+countPlus >= 2) {
      count.innerHTML--;
      jj.value = count.innerHTML;
    }
  };
});
const swiper3 = new Swiper(".tab-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows

  grabCursor: true,
  slidesPerView: "auto",
  watchOverflow: true,
  spaceBetween: 20,
  freeMode: true,
});

var tabNavs = document.querySelectorAll(".tab-item");
var tabPanes = document.querySelectorAll(".tab-pane");

console.log(tabNavs);
for (var u = 0; u < tabNavs.length; u++) {
  tabNavs[u].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.currentTarget.getAttribute("data-tab");
    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");
      console.log(contentAttr);
      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}
$(".animated-progress span").each(function () {
  $(this).css({
    width: $(this).attr("data-progress") + "%",
  });
});
const swiper4 = new Swiper(".sales-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  grabCursor: true,
  slidesPerView: 5,
  grid: {
    rows: 2,
    fill: "row",
  },
  watchOverflow: true,
  spaceBetween: 20,
});
let swiper5 = new Swiper(".sale-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  slidesPerView: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
});
