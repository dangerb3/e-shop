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
  var btnText = document.getElementById("myBtn2");

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
let buttonCountPlus1 = document.querySelectorAll(".buttonCountPlus1");
let buttonCountMinus1 = document.querySelectorAll(".buttonCountMinus1");
let number1 = 1;

buttonCountPlus1.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    let c = element.parentNode;
    let count = c.querySelector(".buttonCountNumber1");
    let jj = c.querySelector(".buttonCountVal1");
    console.log(jj);
    let countPlus = jj.value;
    if (+countPlus <= 10) {
      count.innerHTML++;
      jj.value = count.innerHTML;
    }
  };
});

buttonCountMinus1.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    let c = element.parentNode;
    let pc = c.parentNode;
    let count = c.querySelector(".buttonCountNumber1");
    let jj = c.querySelector(".buttonCountVal1");
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
for (var u = 0; u < tabNavs.length; u++) {
  tabNavs[u].addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.currentTarget);
    var activeTabAttr = e.currentTarget.getAttribute("data-tab");
    console.log(activeTabAttr);
    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");
      if (activeTabAttr === contentAttr) {
        console.log(tabPanes[j]);

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
let revFilter = document.querySelectorAll(".rev-choice__item");
for (z = 0; z < revFilter.length; z++) {
  revFilter[z].addEventListener("click", (e) => {
    for (let k = 0; k < revFilter.length; k++) {
      revFilter[k].classList.remove("active");
    }
    let t = e.target;
    t.classList.add("active");
  });
}

let modal = document.getElementById("login");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let modal2 = document.getElementById("fast-order");
let btn2 = document.getElementById("btnFastOrder");
let span2 = document.getElementsByClassName("close")[1];


let btn3 = document.querySelectorAll(".btnQuestForm");
let modal3 = document.getElementById("question-modal");
let span3 = document.getElementsByClassName("close")[2];
let btn4 = document.querySelectorAll(".revBtn");
let modal4 = document.getElementById("review-modal");
let span4 = document.getElementsByClassName("close")[3];


let modalFunction =(modal2,btn2,span2)=>{
  console.log(typeof btn2)
    btn2.onclick = function () {
      modal2.style.display = "block";
    };

span2.onclick = function () {
  modal2.style.display = "none";
};
}
let modalFunction2 =(modal3,btn3,span3)=>{

    btn3.forEach((b) => {
      b.onclick = function () {
        modal3.style.display = "block";
      };
    });


span3.onclick = function () {
  modal3.style.display = "none";
};
}
  window.onclick = function (event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
    if (event.target == modal2){
      modal2.style.display = "none";
    }
     if (event.target == modal3) {
       modal3.style.display = "none";
     }
     if (event.target == modal4) {
       modal4.style.display = "none";
     }
      if (
        !event.target.matches(".dropdown-btn") &&
        !event.target.matches(".breadcrumb-list__link2")
      ) {
        console.log("hhhhh");
        var dropdowns = document.getElementsByClassName("dropdown-container2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("active")) {
            openDropdown.classList.remove("active");
          }
        }
      }
  };



modalFunction(modal, btn, span);
modalFunction(modal2,btn2,span2);
modalFunction2(modal3, btn3, span3);
modalFunction2(modal4, btn4, span4);

var favClick = document.querySelectorAll(".fav-icon");
favClick.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    var favItem = item.querySelector("path");
    favItem.classList.toggle("icon-clicked");
  });
});

var rankClick = document.querySelectorAll(".rank-icon");
rankClick.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    var rankDetails = item.querySelectorAll("path");
    rankDetails.forEach((elem) => {
      elem.classList.toggle("rank-clicked");
    });
  });
});
var rankClick = document.querySelectorAll(".share-icon");
rankClick.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    var rankDetails = item.querySelectorAll("path");
    rankDetails.forEach((elem) => {
      elem.classList.toggle("share-clicked");
    });
  });
});