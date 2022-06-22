let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    document
      .querySelectorAll(".breadcrumb-list .active")
      .forEach((n) => n.classList.remove("active"));
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    console.log()
    dropdownContent.classList.toggle("active");
  });
}
window.onclick = function (event) {
  if (
    !event.target.matches(".dropdown-btn") &&
    !event.target.matches(".breadcrumb-list__link2")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-container");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};