var modal = document.getElementById("login");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
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
