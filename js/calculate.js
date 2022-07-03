let buttonCountPlus = document.querySelectorAll(".buttonCountPlus");
let buttonCountMinus = document.querySelectorAll(".buttonCountMinus");
let cart = document.querySelectorAll(".pi-cart");
let number = 1;
cart.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    element.classList.add('d-none');
    let c = element.parentNode;
    let el = c.querySelector(".pi-range");
    let jj = c.querySelector(".buttonCountVal");
    jj.value=1;
    el.classList.add('d-flex');
  };
});;

buttonCountPlus.forEach((element)=>{
  element.onclick = function(e) {
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
    let pc=c.parentNode;
    let count = c.querySelector(".buttonCountNumber");
    let jj = c.querySelector(".buttonCountVal");
    let countPlus = jj.value;
    console.log(countPlus);
    if (+countPlus >= 2) {
      count.innerHTML--;
      jj.value = count.innerHTML;
    }
    if (+countPlus == 1) {
      c.classList.remove('d-flex');
      jj.value = 0;
      let el = pc.querySelector(".pi-cart");
      el.classList.remove("d-none");
    }
  };
});

