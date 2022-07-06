let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    document
      .querySelectorAll(".breadcrumb-list .active")
      .forEach((n) => n.classList.remove("active"));
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("active");
  });
}




let catalogItem = document.getElementsByClassName("catalog__link");
let k;

for (k = 0; k < catalogItem.length; k++) {
  catalogItem[k].addEventListener("click", function (e) {
    console.log(this);
    $(".catalog__link").removeClass("active");
    this.classList.add("active");
    $(".dropdown-list").removeClass("active");
    let listCont = this.nextElementSibling;
    console.log(listCont);
    if (listCont) {
      if (listCont.classList.contains("dropdown-list")) {
        listCont.classList.toggle("active");
      }
    }
  });
}
let catalogItem2 = document.getElementsByClassName("dropdown-item");
let k2;

for (k2 = 0; k2 < catalogItem2.length; k2++) {
  catalogItem2[k2].addEventListener("click", function (e) {
    console.log(this);
    $(".dropdown-item").removeClass("active");
    this.classList.add("active");
    //this.querySelectorAll(".dropdown-button")[0].classList.add("active");
    $(".dropdown-item .dropdown-list").removeClass("active");
    let listCont =
      this.querySelectorAll(".dropdown-list")[0];
    //console.log(listCont);
    if (listCont) {
      if (listCont.classList.contains("dropdown-list")) {
        listCont.classList.toggle("active");
      }
    }
  });
}

let dropdown3 = document.getElementsByClassName("ft");
let m;

for (m = 0; m < dropdown3.length; m++) {
  dropdown3[m].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    console.log(dropdownContent);
    if (dropdownContent) dropdownContent.classList.toggle("active");
  });
}

  $(function () {
    var set_min = 3.5; 
    var set_max = 410; 
    $("#slider-range").slider({
      range: true,
      step: 0.1,
      min: 3.5,
      max: 410,
      values: [set_min, set_max],
      slide: function (event, ui) {
        $("#amount-min").val(ui.values[0]);
        $("#amount-max").val(ui.values[1]);
      },
    });
    $("#amount-min").val(
        $("#slider-range").slider("values", 0)
        
    );
    $("#amount-max").val($("#slider-range").slider("values", 1))
    $("#amount-min, #amount-min").change(function () {
      
      set_min = $("#amount-min").val();
      set_max = $("#amount-max").val();
      $("#slider-range").slider("values", 0, set_min);
      $("#slider-range").slider("values", 1, set_max);
    });

var set_min2 = 3.5;
var set_max2 = 410;
$("#slider-ranger").slider({
  range: true,
  step: 0.1,
  min: 3.5,
  max: 410,
  values: [set_min2, set_max2],
  slide: function (event, ui) {
    $("#long-min").val(ui.values[0]);
    $("#long-max").val(ui.values[1]);
  },
});
$("#long-min").val($("#slider-ranger").slider("values", 0));
$("#long-max").val($("#slider-ranger").slider("values", 1));
$("#long-min, #lonh-max").change(function () {
  set_min2 = $("#long-min").val();
  set_max2 = $("#long-max").val();
  $("#slider-ranger").slider("values", 0, set_min2);
  $("#slider-ranger").slider("values", 1, set_max2);
});

  });
  