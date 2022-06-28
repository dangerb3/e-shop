document
  .getElementsByClassName("header-btn")[0]
  .addEventListener("click", () => changeContent());

function changeContent() {
  const button = document.getElementsByClassName("header-btn")[0];
  const catalogDefault = document.getElementsByClassName("result-filter")[0];
  const catalogCommon = document.getElementsByClassName("catalog-common")[0];
  if (catalogDefault.style.display === "none") {
    catalogDefault.style.display = "block";
    catalogCommon.style.display = "none";
    button.textContent = "Каталог";
  } else {
    catalogDefault.style.display = "none";
    catalogCommon.style.display = "block";
    button.textContent = "Закрыть";
  }

  //   if (el.readOnly === true) el.readOnly = false;
  //   else el.readOnly = true;
  //   if (el.className === "profile-input_hide") el.className = "profile-input";
  //   else el.className = "profile-input_hide";
}
