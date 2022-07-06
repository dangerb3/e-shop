var favClick = document.querySelectorAll(".fav-icon");
favClick.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    var favItem = item.querySelector("path");
    favItem.classList.toggle("icon-clicked");
  });
});
