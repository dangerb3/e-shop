document
  .getElementById("emailLink")
  .addEventListener("click", () => changeInputVisibility("email"));
document
  .getElementById("telLink")
  .addEventListener("click", () => changeInputVisibility("number"));
document
  .getElementById("passwordLink")
  .addEventListener("click", () => changeInputVisibility("password"));

function changeInputVisibility(element) {
  const el = document.getElementById(element);
  if (el.readOnly === true) el.readOnly = false;
  else el.readOnly = true;
  if (el.className === "profile-input_hide") el.className = "profile-input";
  else el.className = "profile-input_hide";
}
