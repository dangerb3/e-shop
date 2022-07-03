let catalogItem3 = document.getElementsByClassName("catalog__item");
let k3;

for (k3 = 0; k3 < catalogItem3.length; k3++) {
  catalogItem3[k3].addEventListener("click", function (e) {
    console.log(this);
    $(".catalog__item").removeClass("catalog__item_red");
    this.classList.add("catalog__item_red");
  });
}
