let buttonCountPlus = document.querySelectorAll(".buttonCountPlus");
let buttonCountMinus = document.querySelectorAll(".buttonCountMinus");

let number = 1;


buttonCountPlus.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();
    let c = element.parentNode;
    let count = c.querySelector(".buttonCountNumber");
    let jj = c.querySelector(".buttonCountVal");
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
