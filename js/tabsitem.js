var tabNavs = document.querySelectorAll(".inf-tit");
var tabPanes = document.querySelectorAll(".tab-pane");

console.log(tabNavs);
for (var u = 0; u < tabNavs.length; u++) {
  tabNavs[u].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.currentTarget.getAttribute("data-tab");
    console.log(e.currentTarget);
    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");
console.log(contentAttr);
      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.toggle("active");
        tabPanes[j].classList.toggle("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  let ci = document.querySelectorAll(".product-item");
  for (var z = 0; z < ci.length; z++) {
    ci[z].classList.toggle("fullwidth");
  }
});
let filit = document.querySelectorAll(".result-fil-item");
  for (z = 0; z < filit.length; z++) {
    filit[z].addEventListener('click', (e)=>{
      for (let  k= 0; k < filit.length; k++) {
        filit[k].classList.remove("active");
      }
      let t=e.target;
      t.classList.add('active');
    });
  }