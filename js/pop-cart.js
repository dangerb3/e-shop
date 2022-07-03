let modal = document.getElementById("login");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let modal2 = document.getElementById("fast-order");
let btn2 = document.getElementById("btnFastOrder");
let span2 = document.getElementsByClassName("close")[1];


let modalFunction = (modal2, btn2, span2) => {
  btn2.onclick = function () {
    modal2.style.display = "block";
  };

  span2.onclick = function () {
    modal2.style.display = "none";
  };
};

window.onclick = function (event) {
  console.log(event.target);
  console.log(modal);
  console.log(modal2);
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }

};

modalFunction(modal, btn, span);
modalFunction(modal2, btn2, span2);

